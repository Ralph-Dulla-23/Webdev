from fastapi import FastAPI, Depends
from db import get_db
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from fastapi import FastAPI, Form
from fastapi import HTTPException
from datetime import datetime, date, timedelta
from pydantic import BaseModel
from typing import Optional


class CreateItem(BaseModel):
    ItemName: str
    ItemFromLab: str
    ItemDescription: str
    Quantity: int
    Total_Quantity: int

class EditItem(BaseModel):
    ItemName: str
    FromLab: str
    ItemDescription: str
    Quantity: int

class CreateRequestUser(BaseModel):
    TransactionID: int
    Reason: str
    Deadline: str
    Status: str

app = FastAPI()


origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
@app.get('/')
async def root():
    return{'example':'This is an example', 'data': 0}



@app.get("/fortable")
async def read_all_transaction(
    db=Depends(get_db)
):
    query = "SELECT * from borrowedtransaction"
    db[0].execute(query)
    transactions = [{
        "TransactionID": transactions[0],
        "ItemID": transactions[1],
        "ID" : transactions[2],
        "Borrowed_date": transactions[3],
        "Status":  transactions[6]
    } for transactions in db[0].fetchall()
    ]
    return transactions

@app.get("/forRequest")
async def read_all_request(
    db=Depends(get_db)
):
    query = "SELECT * from request"
    db[0].execute(query)
    request = [{
        "TransactionID": request[0],
        "Reason": request[1],
        "Deadline" : request[2],
    } for request in db[0].fetchall()
    ]
    return request

@app.get("/foritems")
async def read_all_items(
    db=Depends(get_db)
):
    query = "SELECT * from item"
    db[0].execute(query)
    items = [{
        "ItemName": items[0],
        "ItemID": items[1],
        "FromLab" : items[2],
        "ItemDescription": items[3],
        "Quantity": items[4]
    } for items in db[0].fetchall()
    ]
    return items

@app.get("/getAvailable")   
async def read_all_available_items(
    db=Depends(get_db)
):
    query = "SELECT * from item WHERE Quantity > 0"
    db[0].execute(query)
    items = [{
        "ItemName": items[0],
        "ItemID": items[1],
        "FromLab" : items[2],
        "ItemDescription": items[3],
        "Quantity": items[4]
    } for items in db[0].fetchall()
    ]
    return items

@app.put("/ReturningItem/{TID}", response_model=dict)
async def Returning_Item(
    TID: str,
    db=Depends(get_db)
):
    query = "UPDATE `borrowedtransaction` SET `Status` = 'Returned' WHERE `TransactionID` = %s"
    db[0].execute(query, (TID,))
    
    if db[0].rowcount > 0:
        db[1].commit()
        return {"message": "Item Updated Successfully"}

    raise HTTPException(status_code=404, detail="Item not found")



@app.get("/getAdmin")
async def read_all_admins(
    db=Depends(get_db)
):
    query = "SELECT * from user where admin = 1"
    db[0].execute(query)
    admins = [{
        "ID": admins[0],
        "Course": admins[1],
        "Name" : admins[2],
        "Status": admins[3],
        "Role": admins[4]
    } for admins in db[0].fetchall()
    ]
    return admins

@app.get("/getBorrower")
async def read_all_borrowers_who_are_borrowing(
    db=Depends(get_db)
):
    query = "SELECT * from borrowedtransaction where Status = 'Borrowing' "
    db[0].execute(query)
    borrowers = [{
        "TransactionID": borrowers[0],
        "ItemID": borrowers[1],
        "ID" : borrowers[2],
        "Borrowed_date": borrowers[3],
        "Status": borrowers[6]
    } for borrowers in db[0].fetchall()
    ]
    return borrowers

@app.get("/getNonBorrower")
async def read_all_borrowers(
    db=Depends(get_db)
):
    query = "SELECT * FROM user LEFT JOIN borrowedtransaction ON  user.ID=borrowedtransaction.ID where user.ID not in (SELECT user.ID FROM user LEFT JOIN borrowedtransaction ON  user.ID=borrowedtransaction.ID WHERE borrowedtransaction.Status = 'Borrowing')"
    db[0].execute(query)
    borrowers = [{
        "ID": borrowers[0],
        "Name": borrowers[2],
        "Role" : borrowers[4]
    } for borrowers in db[0].fetchall()
    ]
    return borrowers

@app.get("/GetItemBorrowing/{BorrowID}", response_model=list [dict])
async def get_Items_From_Borrowing_User(
    BorrowID: str,
    db=Depends(get_db)
):
    query = "SELECT * FROM borrowedtransaction INNER JOIN item ON borrowedtransaction.ItemID = item.ItemID WHERE borrowedtransaction.ID = %s AND borrowedtransaction.Status = 'Borrowing'"
    db[0].execute(query, (BorrowID,))
    Borrowings = db[0].fetchall()

    if Borrowings:
        items = []
        for Borrowing in Borrowings:
            items.append({
                "TransactionID": Borrowing[0],
                "Quantity": Borrowing[5],
                "ItemName": Borrowing[7],
            })
        return items
    raise HTTPException(status_code=404, detail="User did not Borrow")

@app.post("/CreateBorrowTransaction")
async def Create_Borrow_Transaction(
    ID: str = Form(...),
    BorrowedDateTime: str = Form(datetime.now().strftime("%Y-%m-%d %H:%M:%S")),
    ItemID: int = Form(...),
    Quantity: int = Form(...),
    db=Depends(get_db)
):
    Status = "Borrowing"
    
    # Retrieve the current quantity of the item from the database
    query_get_quantity = "SELECT Quantity FROM item WHERE ItemID = %s"
    db[0].execute(query_get_quantity, (ItemID,))
    current_quantity = db[0].fetchone()[0]
    
    # Check if there are enough items to borrow
    if current_quantity < Quantity:
        return {"message": "Not enough items available to borrow"}
    
    # Update the quantity in the database by subtracting the borrowed quantity
    new_quantity = current_quantity - Quantity
    query_update_quantity = "UPDATE item SET Quantity = %s WHERE ItemID = %s"
    db[0].execute(query_update_quantity, (new_quantity, ItemID))
    db[1].commit()

    # Calculate the Deadline (5 days after BorrowedDateTime)
    BorrowedDateTime = datetime.strptime(BorrowedDateTime, "%Y-%m-%d %H:%M:%S")
    Deadline = BorrowedDateTime + timedelta(days=5)

    # Insert the borrow transaction into the borrowedtransaction table
    query_insert_transaction = "INSERT INTO borrowedtransaction (ID, ItemID, Borrowed_date, Quantity_Borrowed, Deadline, Status) VALUES (%s, %s, %s, %s, %s, %s)"
    db[0].execute(query_insert_transaction, (ID, ItemID, BorrowedDateTime, Quantity, Deadline, Status))
    db[1].commit()

    return {"message": "Transaction Created Successfully!!"}



@app.post("/ReturnItem")
async def Return_Item(
    TransactionID: int = Form(...),
    db=Depends(get_db)
):
    Status = "Returned"

    # Retrieve the quantity borrowed by the user
    query_get_borrowed_quantity = "SELECT Quantity_Borrowed FROM borrowedtransaction WHERE TransactionID = %s AND Status = 'Borrowing'"
    db[0].execute(query_get_borrowed_quantity, (TransactionID,))
    borrowed_quantity = db[0].fetchone()

    if not borrowed_quantity:
        return {"message": "No transaction found with Borrowing status for the given TransactionID"}

    # Extract the borrowed quantity
    borrowed_quantity = borrowed_quantity[0]

    # Retrieve the ItemID associated with the transaction
    query_get_item_id = "SELECT ItemID FROM borrowedtransaction WHERE TransactionID = %s"
    db[0].execute(query_get_item_id, (TransactionID,))
    ItemID = db[0].fetchone()[0]

    # Update the quantity in the database
    query_get_current_quantity = "SELECT Quantity FROM item WHERE ItemID = %s"
    db[0].execute(query_get_current_quantity, (ItemID,))
    current_quantity = db[0].fetchone()[0]

    new_quantity = current_quantity + borrowed_quantity

    query_update_quantity = "UPDATE item SET Quantity = %s WHERE ItemID = %s"
    db[0].execute(query_update_quantity, (new_quantity, ItemID))

    # Update the status in the borrowedtransaction table to "Returned"
    query_update_status = "UPDATE borrowedtransaction SET Status = %s WHERE TransactionID = %s AND Status = 'Borrowing'"
    db[0].execute(query_update_status, (Status, TransactionID))

    # Commit the transaction
    db[1].commit()

    return {"message": "Item Returned Successfully!!"}


@app.post("/CreateItem")
async def create_Item(Item_Create: CreateItem, db=Depends(get_db)) -> CreateItem:
    cursor, db_connection = db
    try:
        cursor.execute(
            "INSERT INTO item (ItemName, FromLab, ItemDescription, Quantity, Total_Quantity) VALUES (%s, %s, %s, %s, %s)",
            (Item_Create.ItemName, Item_Create.ItemFromLab, Item_Create.ItemDescription, Item_Create.Quantity, Item_Create.Total_Quantity)
        )
        db_connection.commit()
        db_connection.close()
        return Item_Create
    except Exception as e:
        # Log the error for debugging
        print("Error:", e)
        # Raise an HTTPException with a 500 status code and detailed error message
        raise HTTPException(status_code=500, detail="Internal Server Error. Please try again later.")

@app.put("/EditItem/{ItemID}")
async def Update_Item(
    ItemID : int,
    item: EditItem,
    db=Depends(get_db)
):
    cursor, db_connection = db
    cursor.execute(
        "UPDATE item SET ItemName = %s, FromLab = %s, ItemDescription = %s, Quantity = %s WHERE ItemID = %s",
        (item.ItemName, item.FromLab, item.ItemDescription, item.Quantity,  ItemID)
    )
    db_connection.commit()
    db_connection.close()
    return item

@app.get("/RequestTable")
async def Read_All_Requests(
 db=Depends(get_db)
):
    query = "SELECT * From request WHERE Status = 'Pending' "
    db[0].execute(query)
    request = [{
        "TransactionID": request[0],
         "Deadline": request[2],
        "Reason": request[1],
       
      } for request in db[0].fetchall()
    ]  
    return request
    
@app.post("/CreateRequestUser")
async def Create_Request_For_User(request_data: CreateRequestUser, db=Depends(get_db)) -> CreateRequestUser:
    cursor, db_connection = db

    # Check if the TransactionID exists and its status is "Borrowing"
    query_check_transaction = "SELECT Status FROM borrowedtransaction WHERE TransactionID = %s AND Status = 'Borrowing' "
    cursor.execute(query_check_transaction, (request_data.TransactionID,))
    transaction_status = cursor.fetchone()
    
    
    if not transaction_status:
        raise HTTPException(status_code=404, detail="TransactionID does not exist")
   
   
    # Insert the request into the request table
    query_insert_request = "INSERT INTO request (TransactionID, Reason, Deadline, Status) VALUES (%s, %s, %s, %s)"
    cursor.execute(query_insert_request, (request_data.TransactionID, request_data.Reason, request_data.Deadline, request_data.Status))
    db_connection.commit()

    return request_data

@app.delete("/DeleteItem/{Item_Delete}", response_model=dict)
async def Delete_Item(
    Item_Delete: int, 
    db=Depends(get_db)):
    try:
        # Retrieve the current quantity and total quantity of the item
        query_get_quantities = "SELECT Quantity, Total_Quantity FROM item WHERE ItemID = %s"
        db[0].execute(query_get_quantities, (Item_Delete,))
        quantities = db[0].fetchone()

        if not quantities:
            raise HTTPException(status_code=404, detail="Item does not exist")

        current_quantity, total_quantity = quantities

        # Check if the current quantity matches the total quantity
        if current_quantity != total_quantity:
            # If not, return an error
            raise HTTPException(status_code=400, detail="Quantity does not match total quantity")

        # Delete the item
        query_delete_Item = "DELETE FROM item WHERE ItemID = %s"
        db[0].execute(query_delete_Item, (Item_Delete,))
        db[1].commit()

        return {"message": "Item deleted successfully"}
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")
    finally:
        db[0].close()
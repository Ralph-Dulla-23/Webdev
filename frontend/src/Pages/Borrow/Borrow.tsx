import { useNavigate } from 'react-router-dom';
import { MultiSelect } from 'primereact/multiselect';
import React, { useState, useRef, useEffect } from 'react'; // Import useEffect
import { Button } from 'primereact/button';        
import { InputNumber } from 'primereact/inputnumber';
import items from '../../JSON/items.json';
import { Toast } from 'primereact/toast';

let itemsBar = items;

interface InputValue {
  name: string;
  code: string;
  status: string;
  itemId: string;
}

function Borrow() {
  const navigate = useNavigate(); // Declare navigate function here

  useEffect(() => {
    // Set a flag in localStorage indicating that the Borrow page has been visited
    localStorage.setItem('borrow_visited', 'true');
  }, []);

  const [value1, setValue1] = useState();
  const [multiselectValue, setMultiselectValue] = useState(null);
  const multiselectValues: InputValue[] = itemsBar;
  const toast = useRef(null);

  const handleBorrowBtn = () => {
    multiselectValues.forEach((selectedItem: InputValue) => {
      const { name, code, status, itemId } = selectedItem;
      console.log(`Borrowing ${name} (Code: ${code}, Status: ${status}, Item ID: ${itemId})`);
    });

    // Show the toast message
    if (toast.current) {
      toast.current.show({ severity: 'success', summary: 'Success', detail: 'Items borrowed successfully', life: 3000 });
    }

    // Redirect to the Scan page after borrowing items
    handleScanClick();
  };

  const handleLogout = () => {
    // Clear user ID from localStorage
    localStorage.removeItem('user_id');
    // Navigate back to the first scan page
    navigate('/Scan');
  };

  const handleHomeClick = () => navigate('/Dashboard');
  const handleBorrowClick = () => navigate('/Borrow');
  const handleReturnClick = () => navigate('/Return');
  const handleScanClick = () => navigate('/Scan');
  const handleScanAClick = () => navigate('/ScanA');
  const handleScanRClick = () => navigate('/ScanR');
  const handleUpdateItemsClick = () => navigate('/Update-Items');
  const hanldeRequestUserClick = () => navigate('/Request-User');
  const hanldeRequestAdminClick = () => navigate('/Request-Admin');
  const handleRequestClick = () => navigate('/Request');

  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <div className="WholeContent">
        <aside>
          <div className="aside">
            <div className="sidebar">
              <div className="pfp" >
                <div className="username">
                  <h1>Hillbert Tan</h1>    
                </div>
              </div>
              <div className="sidebuttons">
                <a onClick={handleHomeClick}>
                  <span className="material-symbols-outlined" >
                    home
                  </span>
                  <h2>Dashboard</h2>
                </a>
                <a onClick={handleBorrowClick}>
                  <span className="material-symbols-outlined">
                    book
                  </span>
                  <h2>Borrow</h2>
                </a>
                <a onClick={handleScanRClick} >
                  <span className="material-symbols-outlined" >
                    keyboard_return
                  </span>
                  <h2>Return</h2>
                </a>
                <a onClick={handleUpdateItemsClick}>
                  <span className="material-symbols-outlined" >
                    update
                  </span>
                  <h2>Update Items</h2>
                </a>
                <a onClick={handleRequestClick}>
                  <span className="material-symbols-outlined" >
                    Request_page
                  </span>
                  <h2>Request</h2>
                </a>
                <a onClick={handleLogout}> {/* Logout handler */}
                  <span className="material-symbols-outlined">logout</span>
                  <h2>Logout</h2>
                </a>
              </div>
            </div>
          </div>
        </aside>
        <div className="content">
          <div className="upper">
            <div className="logo"></div>
            <h1>Borrow Screen</h1> 
          </div>
          <div className="lower">
            <div className="table">
              <div className="borrow">
                <div className="uppertable">
                  <div className="Items">
                    <h2>Items Available</h2>
                    <div className="card flex justify-content-center">
                      <MultiSelect
                        maxSelectedLabels={5}
                        className='itemlist'
                        value={multiselectValue}
                        onChange={(e) => setMultiselectValue(e.value)}
                        options={multiselectValues}
                        optionLabel="name" // Displayed in the input field
                        itemTemplate={(option: InputValue) => (
                          <div>
                            <div>{option.name}</div>
                            <div>Status: {option.status}</div>
                            <div>Item ID: {option.itemId}</div>
                          </div>
                        )}  
                      />
                    </div>
                  </div>
                  <div className="quantity">
                    <h2>Quantity</h2>
                  </div>
                  <div className="card flex justify-content-center">
                    <div className="flex-auto">
                      <InputNumber className='quantityitems' inputId="stacked-buttons" value={value1} onValueChange={(e) => setValue1(e.value)} showButtons mode="decimal" currency="USD" min={0} />
                    </div>
                  </div>
                </div>
                <div className="lowertable">
                  <div className="borrowbtn">
                    <Button className='btn' label="Borrow" onClick={handleBorrowBtn}  />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="footer-content">
            <h3>GearGuard</h3>
            <p>Praise be Jesus and Mary! Now and Forever!</p>
          </div>
        </footer>
      </div>
      <Toast ref={toast} />
    </>
  )
}

export default Borrow;

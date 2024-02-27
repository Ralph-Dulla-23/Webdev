import { useNavigate } from 'react-router-dom';
import { MultiSelect } from 'primereact/multiselect';
import React, { useState } from 'react';    
import { Message } from 'primereact/message';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { useRef } from 'react';
import { Toast } from 'primereact/toast';
        


function Return() {
  const [value1, setValue1] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const items = Array.from({ length: 100000 }).map((_, i) => ({ label: `Item #${i}`, value: i }));
  const [message, setMessage] = useState(null);

  const toast = useRef(null);

  const showSuccess = () => {
      toast.current.show({severity:'success', summary: 'Success', detail:'Message Content', life: 3000});
  }

  const navigate = useNavigate();

  const handleHomeClick = () => navigate('/');
  const handleBorrowClick = () => navigate('/Borrow');
  const handleReturnClick = () => {
    if (selectedItem && value1) {
      // Perform any additional logic if needed
      console.log('Item borrowed:', selectedItem, 'Quantity:', value1);
      // Navigate to the Return page
      navigate('/Return');
      toast.current.show({severity:'success', summary: 'Success', detail:'Message Content', life: 3000});
    } else {
      // Show a validation message
      setMessage({ severity: 'error', summary: 'Validation Error', detail: 'Please fill in all required fields!' });
    }
  };
  
  const handleAccountClick = () => navigate('/Account');
  const handleScanClick = () => navigate('/Scan');
  const handleScanRClick = () => navigate('/ScanR');
  const handleAddClick = () => navigate('/Add');
  const handleRemoveClick = () => navigate('/Remove');
  const handleUpdateItemClick = () => navigate('/Update-Item');
  const handleUpdateItemsClick = () => navigate('/Update-Items');
  const hanldeRequestUserClick = () => navigate('/Request-User');
  const hanldeRequestAdminClick = () => navigate('/Request-Admin');
  const handleRequestClick = () => navigate('/Request');



  return (
    <>

<link rel="stylesheet" href="https://fonts.googleapis.com/cs
s2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48
,100..700,0..1,-50..200" />

    <div className="WholeContent">

    <aside>
          <div className="aside">
            <div className="sidebar">
              <div className="pfp" >
                <span id='icon' onClick={handleAccountClick} class="icon material-symbols-outlined">
              edit
              </span> 
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
            <a href="#">
              <span className="material-symbols-outlined">logout</span>
              <h2>Logout</h2>
            </a>
            </div>
            </div>
          </div>
        </aside>
        
        
       
          <div className="content">

            <div className="upper">
              
               <div className="logo">
                </div>
                <h1>Return Screen</h1> 
              </div>
            
            <div className="lower">
                 <div className="table">
                 <div className="return">
                  <div className="uppertable">
                  <div className="Items">
                        <h2>Items Borrowed</h2>
                        <div className="card flex justify-content-center">
                  <Dropdown value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={items} virtualScrollerOptions={{ itemSize: 38 }} 
                      placeholder="Select Item" className="itemlist" />
             </div>
                        
                    </div>
                    <div className="quantity">
                      <h2>Quantity Borrowed:</h2>
                    </div>
                    <div className="card flex justify-content-center">
                    <div className="flex-auto">
                    <InputNumber className='quantityitems' inputId="integeronly" value={value1} onValueChange={(e) => setValue1(e.value)} />
                     </div>
                    </div>
                  </div>
                  <div className="lowertable">
                    <div className="borrowbtn">
                    <Button className='rbtn' label="Return" onClick={handleHomeClick} />
                      
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
    </>
  )
}

export default Return

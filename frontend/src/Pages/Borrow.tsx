import { useNavigate } from 'react-router-dom';
import { MultiSelect } from 'primereact/multiselect';
import React, { useState } from 'react';    
import { Button } from 'primereact/button';        
import { Dropdown } from 'primereact/dropdown';     
import { InputNumber } from 'primereact/inputnumber';
import items from '../JSON/items.json';
        
let itemsBar = items;

interface InputValue {
    name: string;
    code: string;
}


function Return() {
  const [value1, setValue1] = useState(0);

  const [multiselectValue, setMultiselectValue] = useState(null);
  const multiselectValues: InputValue[] = itemsBar;


  const navigate = useNavigate();
  const handleHomeClick = () => navigate('/');
  const handleBorrowClick = () => navigate('/Borrow');
  const handleReturnClick = () => navigate('/Return');
  const handleAccountClick = () => navigate('/Account');

  return (
    <>

<link rel="stylesheet" href="https://fonts.googleapis.com/cs
s2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48
,100..700,0..1,-50..200" />

    <div className="WholeContent">

    <aside>
          <div className="aside">
            <div className="sidebar">
              <div className="pfp" onClick={handleAccountClick}>
                <span id='icon' className="icon material-symbols-outlined">
              edit
              </span> 
              <div className="username">
              <h1>User!</h1>    
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
            <a onClick={handleReturnClick} >
              <span className="material-symbols-outlined" >
                keyboard_return
              </span>
              <h2>Return</h2>
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
                <h1>Welcome to the Borrow Screen!</h1> 
              </div>
            
            <div className="lower">
                 <div className="table">
                  <div className="borrow">
                  <div className="uppertable">
                  <div className="Items">
                        <h2>Items Available</h2>
                        <div className="card flex justify-content-center">
                          
                        <MultiSelect className='itemlist'
                        value={multiselectValue}
                        onChange={(e) => setMultiselectValue(e.value)}
                        options={multiselectValues}
                        optionLabel="name"
                        placeholder="Select Items"
                        filter
                        display="chip"
                    />
             </div>
                        
                    </div>
                    <div className="quantity">
                      <h2>Quantity:</h2>
                    </div>
                    <div className="card flex justify-content-center">
                    <div className="flex-auto">
                    <InputNumber className='quantityitems' inputId="stacked-buttons" value={value1} onValueChange={(e) => setValue1(e.value)} showButtons mode="decimal" currency="USD" min={0} />
                     </div>
                    </div>
                  </div>
                  <div className="lowertable">
                    <div className="borrowbtn">
                    <Button className='btn' label="Borrow Items" />
                      
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

import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';    


function Scan() {

  const [value1, setValue1] = useState(0);
    
  const [selectedItem, setSelectedItem] = useState(null);
  const items = Array.from({ length: 100000 }).map((_, i) => ({ label: `Item #${i}`, value: i }));

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
                <span id='icon' class="icon material-symbols-outlined">
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
        
        <div className="scan">
            <span id='logoscan' class="material-symbols-outlined">
                gpp_maybe
            </span>
            <h4>Hello Please Scan First</h4>
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

export default Scan

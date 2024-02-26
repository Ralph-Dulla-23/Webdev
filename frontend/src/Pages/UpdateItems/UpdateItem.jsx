
import { useNavigate } from 'react-router-dom';

import { Password } from 'primereact/password';

import { InputText } from 'primereact/inputtext';

import React, { useState } from "react";


import { Button } from 'primereact/button';
                

function UpdateItem() {
    const [name, setUsername] = useState('');
    const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleHomeClick = () => navigate('/');
  const handleBorrowClick = () => navigate('/Borrow');
  const handleReturnClick = () => navigate('/Return');
  const handleAccountClick = () => navigate('/Account');
  const handleScanClick = () => navigate('/Scan');
  const handleScanRClick = () => navigate('/ScanR');
  const handleAddClick = () => navigate('/Add');
  const handleRemoveClick = () => navigate('/Remove');
  const handleUpdateItemClick = () => navigate('/UpdateItem');
  

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
            <a onClick={handleUpdateItemClick}>
              <span className="material-symbols-outlined" >
                update
              </span>
              <h2>Update Items</h2>
            </a>
            <a onClick={handleHomeClick}>
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
                <h1>Welcome to GearGuard!</h1> 
              </div>
            
            <div className="lower">
                 
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

export default UpdateItem

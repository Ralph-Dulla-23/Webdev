
import { useNavigate } from 'react-router-dom';

import { Password } from 'primereact/password';

import { InputText } from 'primereact/inputtext';

import React, { useState } from "react";


import { Button } from 'primereact/button';
                

function Account() {
    const [name, setUsername] = useState('');
    const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleHomeClick = () => navigate('/');
  const handleBorrowClick = () => navigate('/Borrow');
  const handleReturnClick = () => navigate('/Return');
  const handleAccountClick = () => navigate('/Account');
  const handleScanClick = () => navigate('/Scan');
  const handleScanRClick = () => navigate('/ScanR');

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
            <a onClick={handleScanRClick} >
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
                <h1>Welcome to GearGuard!</h1> 
              </div>
            
            <div className="lower">
                 <div className="table">
                    <div className="changeinfo">
                        <div className="usernamechange">
                            <h2>Change your name</h2>
                        <span className="p-float-label">
                             <InputText id="username" name={name} onChange={(e) => setUsername(e.target.name)} />
                            <label htmlFor="username">Username</label>
                         </span>
                        </div>
                        <div className="password">
                            <h2>
                            Change your password
                            </h2>
                        <span className="p-float-label">
                            <Password id='password' inputId="password" style={{fontFamily:'Poppins'}} password={password} onChange={(e) => setPassword(e.target.password)} />
                             <label htmlFor="password">Password</label>
                        </span>

                        </div>
                        <Button className='cbtn' label="Confirm" />
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

export default Account

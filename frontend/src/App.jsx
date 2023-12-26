
import './App.css'
import TableItems from '../src/JSON/TableItems.json';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ForTableJSON } from './JSON/ForTableJSON.jsx';
import { Items } from './JavaScript/Items';        
import  {table} from "./Pages/table.jsx";


function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    ForTableJSON.getProductsMini().then(data => setProducts(data));
  }, []);

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
              <div className="pfp" >
                <span id='icon' onClick={handleAccountClick} class="icon material-symbols-outlined">
              edit
              </span> 
              <div className="username">
              <h1>Ralph Vincent Dulla</h1>    
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
              
               <div className="logo" />
               
                <h1>Welcome to GearGuard!</h1> 
              </div>
            
            <div className="lower">
                 <div className="table" >
                 <div className="card">
                   <DataTable value={products} scrollable scrollHeight="400px" tableStyle={{ minWidth: '50rem' }}>
                      <Column field="ItemId" header="ID"></Column>
                      <Column field="ItemName" header="Item"></Column>
                      <Column field="Status" header="Status"></Column>
                      <Column field="DateBorrowed" header="Date Borrowed"></Column>
                      <Column field="ReturnDate" header="Return Date"></Column>
                   </DataTable>
        </div>
                  
                 </div>
            </div>
            
          </div>
      

  
    <footer>
      <div className="footer-content">
      <h3>GearGuard</h3>
            <p>Praise be Jesus and Mary! Now and Forever!</p>
            
        </div>
    </footer>  </div>

    </>
  )
}

export default App

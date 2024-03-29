import './App.css';
import TableItems from './JSON/TableItems.json';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Items } from './JavaScript/Items.js';
import { table } from "./Pages/table.jsx";

function App() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user has visited the Scan page before
    const hasVisitedScan = localStorage.getItem('has_visited_scan');
    if (!hasVisitedScan) {
      // If not visited before, navigate to the Scan page
      navigate('/Scan');
      // Set a flag in localStorage indicating that the user has visited the Scan page
      localStorage.setItem('has_visited_scan', 'true');
    }
  }, []);

  const handleLogout = () => {
    // Clear user ID from localStorage
    localStorage.removeItem('user_id');
    // Navigate back to the first scan page
    navigate('/Scan');
  };

  // Other navigation handlers
  const handleHomeClick = () => navigate('/Dashboard');
  const handleBorrowClick = () => navigate('/Borrow');
  const handleReturnClick = () => navigate('/Return');
  const handleScanClick = () => navigate('/Scan');
  const handleScanRClick = () => navigate('/ScanR');
  const handleUpdateItemsClick = () => navigate('/Update-Items');
  const handleRequestUserClick = () => navigate('/Request-User');
  const handleRequestAdminClick = () => navigate('/Request-Admin');
  const handleRequestClick = () => navigate('/Request');

  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <div className="WholeContent">
        <aside>
          <div className="aside">
            <div className="sidebar">
              <div className="pfp">
                <div className="username">
                  <h1>Hillbert Tan</h1>
                </div>
              </div>
              <div className="sidebuttons">
                <a onClick={handleHomeClick}>
                  <span className="material-symbols-outlined">
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
                <a onClick={handleScanRClick}>
                  <span className="material-symbols-outlined">
                    keyboard_return
                  </span>
                  <h2>Return</h2>
                </a>
                <a onClick={handleUpdateItemsClick}>
                  <span className="material-symbols-outlined">
                    update
                  </span>
                  <h2>Update Items</h2>
                </a>
                <a onClick={handleRequestClick}>
                  <span className="material-symbols-outlined">
                    Request_page
                  </span>
                  <h2>Request</h2>
                </a>
                <a onClick={handleLogout}>
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
            <div className="card custom-datatable">
              <DataTable className='yes' value={products} scrollable scrollHeight="400px" tableStyle={{ minWidth: '50rem' }}>
                <Column headerClassName='custom-header2' className='itemid' field="ItemId" header="ID"></Column>
                <Column headerClassName='custom-header2' className='itemid' field="ItemName" header="Item"></Column>
                <Column headerClassName='custom-header2' className='itemid' field="Status" header="Status"></Column>
                <Column headerClassName='custom-header2' className='itemid' field="DateBorrowed" header="Date Borrowed"></Column>
                <Column headerClassName='custom-header2' className='itemid' field="ReturnDate" header="Return Date"></Column>
              </DataTable>
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
  );
}

export default App;

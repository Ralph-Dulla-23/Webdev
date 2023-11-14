
import './App.css'
import { useNavigate } from 'react-router-dom';

        

function App() {

  const navigate = useNavigate();
  const handleHomeClick = () => navigate('/');
  const handleBorrowClick = () => navigate('/Borrow');
  const handleReturnClick = () => navigate('/Return');

  return (
    <>

<link rel="stylesheet" href="https://fonts.googleapis.com/cs
s2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48
,100..700,0..1,-50..200" />

    <div className="WholeContent">

    <aside>
          <div className="aside">
            <div className="sidebar">
              <div className="pfp">
                <h1>User!</h1>
              </div>
            <a onClick={handleHomeClick}>
              <span className="material-symbols-outlined" onClick={handleHomeClick}>
                home
              </span>
              <h2>Dashboard</h2>
            </a>
            <a onClick={handleBorrowClick}>
              <span className="material-symbols-outlined" onClick={handleBorrowClick}>
                book
              </span>
              <h2>Borrow</h2>
            </a>
            <a onClick={handleReturnClick} >
              <span className="material-symbols-outlined" onClick={handleReturnClick}>
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
        </aside>
        

       
          <div className="content">

            <div className="upper">
              
               <div className="logo">
                </div>
                <h1>Welcome to GearGuard!</h1> 
              </div>
            
            <div className="lower">
                 <div className="table">

                 </div>
            </div>
            
          </div>
      

    </div>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
        

function App() {
  const [count, setCount] = useState(0)

  

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
                <a href="#">
                <span class="material-symbols-outlined">
                  home
                  </span>
                  <h2>Dashboard</h2>
                </a>
                <a href="#">
                <span class="material-symbols-outlined">
                  book
                  </span>
                  <h2>Borrow</h2>
                </a>
                <a href="#">
                <span class="material-symbols-outlined">
                 keyboard_return
                </span>
                  <h2>Return</h2>
                  </a>
                   <a href="#">
                   <span class="material-symbols-outlined">
                    logout
                    </span>
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

                 </div>
            </div>
            
          </div>
      

    </div>
    </>
  )
}

export default App

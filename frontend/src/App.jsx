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
    <div className="WholeContent">
      <div className="aside">
          <aside>
            <span>Hello</span>
          </aside>
        </div>
    </div>
    </>
  )
}

export default App

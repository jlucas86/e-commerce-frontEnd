import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserManagement from './componets/userManagement/userManagement'
import MenuBar from './componets/header/menuBar'
import Menu from './componets/menu/menu'
import ProductWindow from './componets/productWindow/productWindow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <MenuBar></MenuBar>
      <div className='flex flex-col lg:flex-row'>
        <Menu></Menu>
        <ProductWindow></ProductWindow>
      </div>
      

    </>
  )
}

export default App

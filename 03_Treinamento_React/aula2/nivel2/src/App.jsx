import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import Layout from './pages/Layout'
import Home from './pages/Home'
import Checkout from './pages/Checkout.jsx'

import {coffees} from './db/db.jsx';

function App() {
  const [itemsAdded, setItemsAdded] = useState([]);
  
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Layout itemsAdded={itemsAdded}/>} >
          <Route path='/' element={<Home coffees={coffees} itemsAdded={itemsAdded} setItemsAdded={setItemsAdded}/>} />
          <Route path='/checkout' element={<Checkout itemsAdded={itemsAdded}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

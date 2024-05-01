import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import { useState } from 'react'

import {coffees} from './db/db.jsx';


function App() {
  const [itemsAdded, setItemsAdded] = useState([]);
  
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Layout itemsAdded={itemsAdded}/>} >
          <Route path='/' element={<Home coffees={coffees} itemsAdded={itemsAdded} setItemsAdded={setItemsAdded}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

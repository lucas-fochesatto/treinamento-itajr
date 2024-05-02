import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import Layout from './pages/Layout'
import Home from './pages/Home'
import Checkout from './pages/Checkout.jsx'

import {coffees} from './db/db.jsx';

function App() {
  localStorage.setItem('itemsAdded', JSON.stringify([]));

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route path='/' element={<Home coffees={coffees}/>} />
          <Route path='/checkout' element={<Checkout/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

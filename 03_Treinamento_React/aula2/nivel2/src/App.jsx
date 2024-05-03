import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './pages/Layout'
import Home from './pages/Home'
import Checkout from './pages/Checkout.jsx'

import {coffees} from './db/db.jsx';
import Success from './pages/Success.jsx'
import AddCoffee from './pages/AddCoffee.jsx'

function App() {
  localStorage.setItem('itemsAdded', JSON.stringify([]));

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route path='/' element={<Home coffees={coffees}/>} />
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='/add' element={<AddCoffee coffees={coffees}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

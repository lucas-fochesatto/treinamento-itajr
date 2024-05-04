import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import Checkout from './pages/Checkout.jsx'

import Success from './pages/Success.jsx'
import AddCoffee from './pages/AddCoffee.jsx'
import { useEffect, useState } from 'react'

import api from './utils/api.js'

function App() {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    const fetchCoffees = async () => {
      const res = await fetch(api.getProductsUrl);
      const data = await res.json();
      setCoffees(data);
      console.log(data);
    }

    fetchCoffees();
  }, [])

  localStorage.setItem('itemsAdded', JSON.stringify([]));

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route path='/' element={<Home coffees={coffees}/>} />
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='/add' element={<AddCoffee />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import ProductPage from "./pages/ProductPage"

function App() {

  const db = [
    {
      productName: "Cupcake",
      description: "Um pequeno bolo",
      price: "15",
      isDiscount: true,
      id: 1
    },
    {
      productName: "Cupcake",
      description: "Um pequeno bolo",
      price: "21.5",
      isDiscount: false,
      id: 2
    }
  ]

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout  />}>
          <Route path="/" element={<Home database={db}/>}/>
          <Route path="/product/:id" element={<ProductPage database={db}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

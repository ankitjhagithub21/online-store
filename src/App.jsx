import React from 'react'
import "./App.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Products from './components/Products'
import SingleCategory from './components/SingleCategory'
import ProductDetails from './pages/ProductDetails'
import Footer from './components/Footer'
import About from './pages/About'
import Cart from './pages/Cart'
import { Toaster } from 'react-hot-toast'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
    <Toaster/>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:id" element={<ProductDetails/>}/>
      <Route path="/products/category/:id" element={<SingleCategory/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
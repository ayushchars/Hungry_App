import React from 'react'
import Header from './container/header'
import Product from './container/products'
import { Routes, Route } from 'react-router-dom'
import ProductDetail from './container/ProductDetail'
import Footer from './container/footer'
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/product/:id' element={< ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

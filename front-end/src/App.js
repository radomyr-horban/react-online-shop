import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import NavBar from './components/NavBar'
import Cart from './pages/Cart'
import calculateTotalCartItemsQuantity from './utils/calculateTotalCartItemsQuantity'

export const CartContext = React.createContext()

function App() {
  const initialData = localStorage.getItem('cart')
  const [cart, setCart] = useState(initialData ? JSON.parse(initialData) : [])
  const [totalCartItems, setTotalCartItems] = useState(
    calculateTotalCartItemsQuantity(cart)
  )

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <div className='App'>
      <CartContext.Provider
        value={{ cart, setCart, totalCartItems, setTotalCartItems }}
      >
        <BrowserRouter>
          <NavBar />
          <div className='pages'>
            <Routes>
              <Route element={<Home />} path='/' />
              <Route element={<Cart />} path='/cart' />
            </Routes>
          </div>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  )
}

export default App

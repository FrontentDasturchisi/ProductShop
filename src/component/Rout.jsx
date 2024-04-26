import React from 'react'
import {Routes , Route} from "react-router-dom"
import Cart from './Cart'
import Product from './Product'
const Rout = ({addtocart ,cartItem ,setCartItem}) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Product addtocart={addtocart}/>}/>
        <Route path='/cart' element={<Cart  cartItem={cartItem} setCartItem={setCartItem}/>}/>
      </Routes>
    </>
  )
}

export default Rout

import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Nav from './component/Nav'
import Rout from './component/Rout'

const App = () => {
  const [cartItem, setCartItem] = useState([])

  let addtocart = (product) => {
    let exsit = cartItem.find((x) => (x.id === product.id))
    if (exsit) {
      alert("Mahsulot Savatga Qo'shildi")
    }
    else {
      setCartItem([...cartItem, { ...product, quantity: 1 }])
    }

  }

  return (
    <>
      <Router>
        <Nav />
        <Rout addtocart={addtocart} cartItem={cartItem} setCartItem={setCartItem} />
      </Router>
    </>
  )
}

export default App
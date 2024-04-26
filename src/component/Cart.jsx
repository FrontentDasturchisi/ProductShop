import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
const Cart = ({ cartItem, setCartItem }) => {
  // Funk inc
  function inc (product){
    let exsit = product = cartItem.find((x)=>(
      x.id ===product.id
    ))
    setCartItem(cartItem.map((item)=>(
      item.id === product.id ? {...exsit , quantity : exsit.quantity +1} : item
    )))
  }

  // Funk dec
 
  function dec (product){
    let exsit = product = cartItem.find((x)=>(
      x.id ===product.id
    ))
    setCartItem(cartItem.map((item)=>(
      item.id === product.id ? {...exsit , quantity : exsit.quantity - 1} : item
    )))
  }

/// Remove

function removecart (product){
  let exsit = product = cartItem.find((x)=>(
    x.id ===product.id
  ))
  if(exsit.quantity >0){
 setCartItem(cartItem.filter((x)=>(
   x.id !== product.id
 )))
  }
}

/// TotalPrice

let TotalPrice = cartItem.reduce((price, item) => price +  item.quantity * item.price,0)

  return (
    <>
      {cartItem.length === 0 &&
        <>
          <h2 className='emty_cart text-center'>Cart It Empty place Select a  product</h2>
        <Link to="/">
        <button className='cart_shop'>Shop Now </button>
        </Link>
        </>
      }
      <div className='cart_container'>
        <div className='cart_product'>
          {
            cartItem.map((item)=>(
              <div className='cart_box' key={item.id}>
                <div className="cart_container_product">
                  <div className='cart_img_box'>
                  <button onClick={()=>removecart(item)} className='remove_cart'>X</button>
                    <img src={item.pruductImg} alt="" />
                  </div>
                  <div className='cart_item_detail'>
                    <h2>{item.productName}</h2>
                    <h3> Price $  {item.price}</h3>
                    <button onClick={()=>dec(item)} className='quantity_dec'>-</button>
                    <input  type="text" value={item.quantity}/>
                    <button onClick={()=>inc(item)} className='quantity_inc'>+</button>
                    <h3> Sub Total:$ {item.price *item.quantity }</h3>
                  </div>
                </div>
              </div>
            ))
          }
        
        </div>
        {cartItem.length > 0 &&
          < div className='total_dad'>
           <p className='cart_total'>Umumiy Xisob ${TotalPrice}</p>
         <Link to="/"> <button className='chekout'>Mahsulotga O'tish</button></Link>
          </div>
         }
      </div>
    </>
  )
} 

export default Cart
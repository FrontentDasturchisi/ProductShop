import React from 'react'
import { lists } from './prosuctDetail'
import "./style.css"
const Product = ({addtocart}) => {
  return (
    <div className='product-container'>
      <div className="main-product">
        {
          lists.map((curElm, i) => (
         <div className="box" key={i}>
          <div className="img-box">
            <img src={curElm.pruductImg} alt="" />
          </div>
          <div className="detail text-center">
            <h4 className='text-2xl font-bold mb-2 mt-3'>{curElm.productName}</h4>
            <p className='text-xl font-semibold mb-2'>${curElm.price}</p>
            <button onClick={()=>addtocart(curElm)} className='addtocart'>Savat</button>
          </div>
         </div>
        ))
        }
      </div>
    </div>
  )
}

export default Product

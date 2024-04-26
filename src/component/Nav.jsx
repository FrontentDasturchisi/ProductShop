import React from 'react'
import {Link} from "react-router-dom"
import { FaCartPlus } from "react-icons/fa";
import "./style.css"
const Nav = () => {
    return (
        <>
            <div className="header">
                <div className='logo'>
                    <h2>CT</h2>
                </div>
                <div className="nav ">
                    <ul>
                        <li><Link to="/" className='link'>Product</Link></li>
                        <li><Link to="/cart"className='link'><FaCartPlus className='w-[80px] ml-5 mr-5' /></Link></li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Nav


import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import { CartContext } from '../App'

const NavBar = () => {
  const { totalCartItems } = useContext(CartContext)

  return (
    <div className='nav-bar'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/cart'>
            <i className='bi bi-cart'></i>
            <span> Cart </span>
            <span id='cart-items-number'>{totalCartItems}</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar

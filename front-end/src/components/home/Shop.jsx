import React from 'react'

const Shop = ({ shopName, onClick, isActive }) => {
  const handleClick = () => {
    onClick(shopName)
  }

  return (
    <div
      className={`shop-box ${isActive ? 'active' : ''}`}
      id={shopName}
      onClick={handleClick}
    >
      <p>{shopName}</p>
    </div>
  )
}

export default Shop

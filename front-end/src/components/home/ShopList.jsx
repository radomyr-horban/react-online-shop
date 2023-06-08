import React, { useContext, useEffect, useState } from 'react'
import shopItemsData from '../../constants/shopItemsData'
import Shop from './Shop'
import { CurrentShopContext } from '../../pages/Home'

const ShopList = () => {
  const { setCurrentShop } = useContext(CurrentShopContext)
  const [activeShop, setActiveShop] = useState('pizzeria')

  useEffect(() => {
    setCurrentShop(activeShop)
  }, [setCurrentShop, activeShop])

  const handleShopClick = (shopName) => {
    setActiveShop(shopName)
    setCurrentShop(shopName)
  }

  return (
    <div className='shops-list-container'>
      {Object.keys(shopItemsData).map((shopName) => (
        <Shop
          isActive={activeShop === shopName}
          key={shopName}
          onClick={handleShopClick}
          shopName={shopName}
        />
      ))}
    </div>
  )
}

export default ShopList

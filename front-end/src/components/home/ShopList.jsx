import React, { useContext, useEffect, useState } from 'react'
import shopItemsData from '../../constants/Data'
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
          shopName={shopName}
          key={shopName}
          onClick={handleShopClick}
          isActive={activeShop === shopName}
        />
      ))}
    </div>
  )
}

export default ShopList

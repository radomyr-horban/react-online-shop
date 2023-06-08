import React, { useContext } from 'react'
import Item from '../../components/home/Item'
import { CurrentShopContext } from '../../pages/Home'
import shopItemsData from '../../constants/shopItemsData'

const ItemsContainer = () => {
  const { currentShop } = useContext(CurrentShopContext)

  return (
    <div className='shop'>
      {shopItemsData[currentShop].map((item) => (
        <Item data={item} key={item.id} />
      ))}
    </div>
  )
}

export default ItemsContainer

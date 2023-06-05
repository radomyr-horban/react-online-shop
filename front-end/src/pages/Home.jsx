import React, { useState } from 'react'

import ItemsContainer from '../containers/home/ItemsContainer'
import ShopList from '../components/home/ShopList'

export const CurrentShopContext = React.createContext()

const Home = () => {
  const [currentShop, setCurrentShop] = useState('pizzeria')

  return (
    <div className='flexbox-container'>
      <CurrentShopContext.Provider value={{ currentShop, setCurrentShop }}>
        <ShopList />
        <ItemsContainer />
      </CurrentShopContext.Provider>
    </div>
  )
}

export default Home

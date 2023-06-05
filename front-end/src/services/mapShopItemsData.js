const mapShopItemsData = (shopItemsData) => {
  return Object.values(shopItemsData).reduce((map, shop) => {
    shop.forEach((item) => {
      map[item.id] = item
    })

    return map
  }, {})
}

export default mapShopItemsData

export const setOrders = orders => ({
  type: 'SET_ORDERS',
  orders
});

export const placeOrder = order => ({
  type: 'PLACE_ORDER',
  order
})

export const removeOrder = id => ({
  type: 'REMOVE_ORDER',
  id
})

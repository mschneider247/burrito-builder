export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
}

export const postOrder = (order) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(order),
    headers: {'Content-Type': 'application/json'}
  }
  return fetch('http://localhost:3001/api/v1/orders', options)
    .then(response => response.json())
    .catch(console.log("Order submission failed"))
}
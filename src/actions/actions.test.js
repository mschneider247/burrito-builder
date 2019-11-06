import * as actions from './index';

describe('Actions tests', () => {
  it('Should create a setOrders action with .type SET_ORDERS', () => {
    const orders = [{ name: 1, ingredients: ['food'] }];
    const expected = {
      type: 'SET_ORDERS',
      orders,
    };
    const result = actions.setOrders(orders);
    expect(result).toEqual(expected);
  })

  it('Should create a placeOrder action with .type PLACE_ORDER', () => {
    const order = [{ name: 'Penny', ingredients: ['bacon'] }];
    const expected = {
      type: 'PLACE_ORDER',
      order,
    };
    const result = actions.placeOrder(order);
    expect(result).toEqual(expected);
  })
})
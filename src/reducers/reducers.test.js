import { orders } from './orders';

describe('Orders reducer', () => {
  it('Should return an initial state', () => {
    const expected = [];
    const result = (undefined, []);
    expect(result).toEqual(expected);
  });

  it('should return action.orders when type is SET_ORDERS', () => {
    const mockAction = { type: 'SET_ORDERS', orders: ['1', '2', '3'] };
    const result = orders([], mockAction);
    expect(result).toEqual(['1', '2', '3']);
  });

  it('should return action.order when type is PLACE_ORDER', () => {
    const mockAction = { type: 'PlACE_ORDER', order: {} };
    const result = orders([{}], mockAction);
    expect(result).toEqual([{}]);
  });
});
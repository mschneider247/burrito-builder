import React from 'react';
import { shallow } from 'enzyme';
import { Orders, mapDispatchToProps, mapStateToProps } from './Orders'
import { setOrders } from '../../actions';

describe('Orders container', () => {
  const wrapper = shallow(<Orders orders={[]}/>);
  
  it('Should match its snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('Should return order Elements when orderEls is called', () => {
    const expectedOrders = []
    const orders = wrapper.instance().orderEls([])
    expect(orders).toEqual(expectedOrders)
  })
});

describe('Orders mapDispatchToProps', () => {

  it('Should dispatch orders when setOrders is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setOrders([{name: 'steve', ingredients: 'food'}]);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setOrders([{name: 'steve', ingredients: 'food'}]);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});

describe('Orders mapStateToProps', () => {

  it('Should have orders set in the redux store', () => {
    const mockState = { orders: [{}, {}, {}] };
    const expected = { orders: [{}, {}, {}] };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  })
})
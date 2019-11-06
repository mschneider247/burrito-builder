import React from 'react';
import { shallow } from 'enzyme';
import { OrderForm } from './OrderForm'

describe('OrderForm component', () => {
  const wrapper = shallow(<OrderForm/>)
  it('Should match its snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('Should update state with name changes when handleNameChange is called', () => {
    const expectedState = {name: 'Danny', ingredients: []}
    const event = {target: {name: 'name', value: 'Danny'}};
    wrapper.instance().handleNameChange(event)
    expect(wrapper.state()).toEqual(expectedState)
  })

  it('Should update state with ingredient when handleIngredientChange is called', () => {
    const expectedState = {name: 'Danny', ingredients: ['cheese']}
    const event = {target: {name: 'cheese'}, preventDefault: jest.fn()};
    wrapper.instance().handleIngredientChange(event)
    expect(wrapper.state()).toEqual(expectedState)
  })
})
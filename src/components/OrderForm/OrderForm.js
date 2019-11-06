import React, { Component } from 'react';
import { postOrder } from '../../apiCalls';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { placeOrder } from '../../actions';

export class OrderForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      name: '',
      ingredients: []
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleIngredientChange = e => {
    e.preventDefault();
    this.setState({ingredients: [...this.state.ingredients, e.target.name]});
  }

  postOrder = () => {
    const order = {
      name: this.state.name,
      ingredients: this.state.ingredients
    }
    postOrder(order);
    this.props.placeOrder(order);
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.ingredients.length === 0) {
      return
    }
    this.postOrder();
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { ingredientButtons }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

        <button onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
  }
}

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    placeOrder,
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(OrderForm);
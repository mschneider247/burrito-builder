import React from 'react';
import { Component } from 'react';
import './Orders.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setOrders, removeOrder } from '../../actions';
import { getOrders } from '../../apiCalls'

export class Orders extends Component {

  componentDidMount() {
    getOrders()
      .then(data => this.props.setOrders(data.orders))
      .catch(err => console.error('Error fetching:', err));
  }

  removeOrder = (index) => {
    this.props.removeOrder(index)
    // deleteOrder(??)
  }

  orderEls = () => this.props.orders.map((order, index) => {
    return (
      <div className="order" key={index}>
        <h3>{order.name}</h3>
        <ul className="ingredient-list">
          {order.ingredients.map((ingredient, index) => {
            return <li key={index}>{ingredient}</li>
          })}
        </ul>
        <button onClick={() => this.removeOrder(index)}>Order Finished! DELETE</button>
      </div>
    )
  });

  render() {
    let orders = this.orderEls()
    let ordersLength = orders.length;
    return (
      <section>
        { ordersLength > 0 ? orders : <p>No orders yet!</p> }
      </section>
    )
  }
}

export const mapStateToProps = ({ orders }) => ({
  orders
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setOrders,
    removeOrder,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
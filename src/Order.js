import React from 'react';
import './Order.css';
import CheckoutProduct from './CheckoutProduct';
import moment from 'moment';
import {NumericFormat} from 'react-number-format';
function Order({order}) {
  return (
    <div className="order">
      <h2>Order </h2>
      <p>On {moment.unix(order.data.created).format('DD MM YYYY @  h:mma')}</p>
      <p className="order__id">
        <small>Order ID : {order.id}</small>
      </p>
      {order.data.cart.map((item) => (
        <CheckoutProduct
          id={item.id}
          key={item.id + Math.random() * 100}
          price={item.price}
          rating={item.rating}
          title={item.title}
          image={item.image}
          hideButton
        />
      ))}
      <NumericFormat
        renderText={(value) => <h3>Order Total - {value} </h3>}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'£'}
      />
    </div>
  );
}

export default Order;

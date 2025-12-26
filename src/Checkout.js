import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal.js';
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
function Checkout() {
  const [{cart, user}] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=313/layout-engine/2020-12/ICICI-CCDC_web.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">
            Hi {user?.email.split('@')[0]}, Here is Your Shopping Cart!
          </h2>
          {cart.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

export function GetUserName() {
  const [{user}] = useStateValue();

  return <>{user?.email.split('@')[0]}</>;
}

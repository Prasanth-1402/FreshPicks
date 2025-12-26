import React from 'react';
import './CheckoutProduct.css';
import {useStateValue} from './StateProvider';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function CheckoutProduct({id, image, title, price, rating, quantity, hideButton}) {
  const [, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id,
    });
  };

  const increaseQuantity = () => {
    dispatch({
      type: 'INCREASE_QUANTITY',
      id,
    });
  };

  const decreaseQuantity = () => {
    dispatch({
      type: 'DECREASE_QUANTITY',
      id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>£</small>
          <strong>{price}</strong>
          {quantity > 1 && (
            <span className="checkoutProduct__itemTotal">
              {' '}× {quantity} = £{(price * quantity).toFixed(2)}
            </span>
          )}
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐️</p>
            ))}
        </div>
        {!hideButton && (
          <div className="checkoutProduct__actions">
            <div className="checkoutProduct__quantityControls">
              <button
                className="checkoutProduct__quantityBtn checkoutProduct__decreaseBtn"
                onClick={decreaseQuantity}
                title="Decrease quantity"
              >
                <RemoveIcon fontSize="small" />
              </button>
              <span className="checkoutProduct__quantity">{quantity}</span>
              <button
                className="checkoutProduct__quantityBtn checkoutProduct__increaseBtn"
                onClick={increaseQuantity}
                title="Increase quantity"
              >
                <AddIcon fontSize="small" />
              </button>
            </div>
            <button
              className="checkoutProduct__removeBtn"
              onClick={removeFromCart}
              title="Remove from cart"
            >
              <DeleteOutlineIcon fontSize="small" />
              <span>Remove</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;

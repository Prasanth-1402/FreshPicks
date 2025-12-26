import React from 'react';
import './Product.css';
import {useStateValue} from './StateProvider';
function Product({key, id, title, image, price, rating}) {
  const [{cart}, dispatch] = useStateValue();
  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((idx) => {
              return (
                <p className="star" key={idx + 1}>
                  ⭐️
                </p>
              );
            })}
        </div>
      </div>
      <img className="cartimg" src={image} alt=""></img>
      <button className="cartButton" onClick={addToCart}>
        {' '}
        Add to cart
      </button>
    </div>
  );
}

export default Product;

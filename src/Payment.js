import React, {useState, useEffect} from 'react';
import {NumericFormat} from 'react-number-format';
import './Payment.css';
import {useStateValue} from './StateProvider';
import {GetUserName} from './Checkout';
import CheckoutProduct from './CheckoutProduct';
import {Link, useNavigate} from 'react-router-dom';
import {getCartTotal, getCartItemCount} from './Reducer';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import axios from './axios';
function Payment() {
  const navigate = useNavigate();
  const [{cart, user, address}, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  useEffect(() => {
    const getClientSecret = async () => {
      let amount = getCartTotal(cart);
      if (amount > 0) {
        const response = await axios({
          method: 'post',
          url: `/payments/create?total=${Math.floor(amount * 100)}`,
        });
        setClientSecret(response.data.clientSecret);
      }
    };
    getClientSecret();
  }, [cart]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const {paymentIntent, error: stripeError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {card: elements.getElement(CardElement)},
      }
    );

    if (stripeError) {
      setError(stripeError.message);
      setProcessing(false);
      return;
    }

    if (paymentIntent) {
      console.log('PaymentIntent:', paymentIntent);
      // Save order via API
      await axios.post('/orders/create', {
        userId: user?.uid,
        paymentIntentId: paymentIntent.id,
        cart: cart,
        address,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
      });
      setSucceeded(true);
      setError(null);
      setProcessing(false);
      dispatch({
        type: 'EMPTY_CART',
      });
      navigate('/orders', {replace: true});
    }
  };
  const handleChange = (e) => {
    //checks for changes in the cardElement & updates live
    setDisabled(e.empty);
    setError(e.error ? e.error.message : '');
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h2>
          Checkout (<Link to="/Checkout">{getCartItemCount(cart)} items</Link>)
        </h2>
        {/*Payment section - address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address </h3>
          </div>
          <div className="payment__address">
            <p>
              <GetUserName />
            </p>
            <small>{address}</small>
          </div>
        </div>
        {/*Payment section - review Items*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items for Delivery </h3>
          </div>
          <div className="payment__items">
            {cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                key={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                quantity={item.quantity}
              />
            ))}
          </div>
        </div>
        {/*Payment section  - payment method*/}
        <div className="payment__section">
          <div className="payment__title">
            {' '}
            <h3>Payment Method </h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <NumericFormat
                  renderText={(value) => <h3> Order Total : {value}</h3>}
                  decimalScale={2}
                  value={getCartTotal(cart)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'£'}
                />
                <button
                  disabled={
                    processing ||
                    disabled ||
                    succeeded ||
                    !clientSecret ||
                    getCartTotal(cart) === 0
                  }
                >
                  <span>{processing ? 'Processing...' : 'Buy Now'}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

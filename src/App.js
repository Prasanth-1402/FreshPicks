import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import './index.css';
import Orders from './Orders.js';
import {useEffect} from 'react';
import Checkout from './Checkout';
import Login from './Login';
import Register from './Register';
import Payment from './Payment';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {auth} from './firebase';
import {onAuthStateChanged} from 'firebase/auth';
import {useStateValue} from './StateProvider';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51I6yWmGAwh0uRQFnpCMOeNDQPYIr4fgZgosVC5HbvglXi46PLMXgISnLCB1TSIBfaNFpYyDxfTxyYcIHUZNrNZaJ00K5A8IHEM'
);
function App() {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
    return () => unsubscribe();
  }, [dispatch]);
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/payment" element={<Elements stripe={promise}><Payment /></Elements>} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

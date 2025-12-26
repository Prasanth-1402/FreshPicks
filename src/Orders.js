import React, {useState, useEffect} from 'react';
import axios from './axios';
import {useStateValue} from './StateProvider';
import './Orders.css';
import Order from './Order';
function Orders() {
  const [{user}] = useStateValue();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      if (user) {
        try {
          setLoading(true);
          const response = await axios.get(`/orders/${user.uid}`);
          setOrders(response.data);
        } catch (error) {
          console.error('Error fetching orders:', error);
          setOrders([]);
        } finally {
          setLoading(false);
        }
      } else {
        setOrders([]);
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {loading ? (
          <p>Loading orders...</p>
        ) : (
          orders?.map((order) => (
            <Order order={order} key={order.id} />
          ))
        )}
      </div>
    </div>
  );
}

export default Orders;

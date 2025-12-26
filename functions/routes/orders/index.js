const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');

// Get Firestore instance
const getDb = () => admin.firestore();

// Create a new order
router.post('/create', async (req, res) => {
  try {
    const {userId, paymentIntentId, cart, address, amount, created} = req.body;

    if (!userId || !paymentIntentId) {
      return res.status(400).send({error: 'Missing required fields'});
    }

    const db = getDb();
    const ordersRef = db.collection('users').doc(userId).collection('orders');

    await ordersRef.doc(paymentIntentId).set({
      cart,
      address,
      amount,
      created,
    });

    res.status(201).send({success: true, orderId: paymentIntentId});
  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).send({error: error.message});
  }
});

// Get all orders for a user
router.get('/:userId', async (req, res) => {
  try {
    const {userId} = req.params;

    if (!userId) {
      return res.status(400).send({error: 'User ID is required'});
    }

    const db = getDb();
    const ordersRef = db.collection('users').doc(userId).collection('orders');
    const snapshot = await ordersRef.orderBy('created', 'desc').get();

    const orders = snapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));

    res.status(200).send(orders);
  } catch (error) {
    console.error('Get orders error:', error);
    res.status(500).send({error: error.message});
  }
});

// Get a single order
router.get('/:userId/:orderId', async (req, res) => {
  try {
    const {userId, orderId} = req.params;

    const db = getDb();
    const orderDoc = await db
      .collection('users')
      .doc(userId)
      .collection('orders')
      .doc(orderId)
      .get();

    if (!orderDoc.exists) {
      return res.status(404).send({error: 'Order not found'});
    }

    res.status(200).send({
      id: orderDoc.id,
      data: orderDoc.data(),
    });
  } catch (error) {
    console.error('Get order error:', error);
    res.status(500).send({error: error.message});
  }
});

module.exports = router;

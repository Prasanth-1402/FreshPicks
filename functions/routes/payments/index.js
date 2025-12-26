const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET);

// Create payment intent
router.post('/create', async (req, res) => {
  try {
    const total = req.query.total;
    console.log('Payment request received for ', total / 100, '!');

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: 'GBP',
    });

    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Payment error:', error);
    res.status(500).send({error: error.message});
  }
});

module.exports = router;

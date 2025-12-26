const express = require('express');
const router = express.Router();
const stripe = require('stripe')(
  'sk_test_51I6yWmGAwh0uRQFn337V0Rn7d4JimqOsBZoljUp2RnyQruGCI4hI8ejkZfmaghnH7gStF7Ua1hmnKvbIzdsrPo2Y00JhjP1alH'
);

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

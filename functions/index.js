const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');

// Initialize Firebase Admin
admin.initializeApp();

// Import routes
const paymentsRoutes = require('./routes/payments');
const ordersRoutes = require('./routes/orders');
const userRoutes = require('./routes/user');

// App configuration
const app = express();

app.use(cors({ origin: "http://localhost:3000" })); 

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API Routes
app.get('/', (req, res) => res.send('FreshPicks API is running!'));

// Mount route modules
app.use('/payments', paymentsRoutes);
app.use('/orders', ordersRoutes);
app.use('/user', userRoutes);

// Export the API
exports.api = functions.https.onRequest(app);
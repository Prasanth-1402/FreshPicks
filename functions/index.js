const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Initialize Firebase Admin
// For Render: uses GOOGLE_APPLICATION_CREDENTIALS_JSON env var
// For local: uses default credentials or service account file
if (process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON) {
  const serviceAccount = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  admin.initializeApp();
}

// Import routes
const paymentsRoutes = require('./routes/payments');
const ordersRoutes = require('./routes/orders');
const userRoutes = require('./routes/user');

// App configuration
const app = express();

// CORS configuration - allow your Firebase hosted frontend
const allowedOrigins = [
  'http://localhost:3000',
  'https://freshpicksonline.web.app',
  'https://freshpicksonline.firebaseapp.com',
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

// Middlewares
app.use(express.json());

// API Routes
app.get('/', (req, res) => res.send('FreshPicks API is running!'));

// Health check endpoint for Render
app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }));

// Mount route modules
app.use('/payments', paymentsRoutes);
app.use('/orders', ordersRoutes);
app.use('/user', userRoutes);

// Start server (for Render deployment)
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 FreshPicks API running on port ${PORT}`);
});
# FreshPicks

A full-stack e-commerce web application for purchasing fresh groceries and daily essentials online. Built with React, Firebase, and Stripe for seamless shopping and secure payments.

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-11.2-FFCA28?logo=firebase&logoColor=black)
![Stripe](https://img.shields.io/badge/Stripe-Payments-008CDD?logo=stripe&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-6.1-007FFF?logo=mui&logoColor=white)

---

## Features

- **Shopping Cart** - Add, remove, and manage items in your cart
- **User Authentication** - Secure sign-up and login with Firebase Auth
-  **Stripe Payments** - Secure payment processing with Stripe integration
-  **Order History** - View past orders and order details
-  **Responsive Design** - Works seamlessly on desktop and mobile devices
-  **Real-time Updates** - Powered by Firebase for instant data sync

---

##  Tech Stack

### Frontend
- **React 18** - UI library
- **React Router v6** - Client-side routing
- **Material UI (MUI)** - Component library
- **Axios** - HTTP client
- **Stripe React** - Payment UI components

### Backend
- **Firebase Functions** - Serverless backend
- **Firebase Auth** - Authentication
- **Firebase Firestore** - NoSQL database
- **Express.js** - API routing
- **Stripe API** - Payment processing

---

## Project Structure

\`\`\`
FreshPicks/
├── public/                 # Static assets
│   └── images/products/    # Product images
├── src/                    # React frontend
│   ├── App.js              # Main app component & routing
│   ├── Home.js             # Homepage with product listings
│   ├── Header.js           # Navigation header
│   ├── Product.js          # Individual product component
│   ├── Checkout.js         # Shopping cart page
│   ├── Payment.js          # Stripe payment page
│   ├── Orders.js           # Order history page
│   ├── Login.js            # Login page
│   ├── Register.js         # Registration page
│   ├── StateProvider.js    # React Context for state management
│   ├── Reducer.js          # State reducer for cart & user
│   ├── firebase.js         # Firebase configuration
│   └── axios.js            # Axios instance configuration
├── functions/              # Firebase Cloud Functions
│   ├── index.js            # Express app entry point
│   └── routes/
│       ├── payments/       # Stripe payment endpoints
│       ├── orders/         # Order management endpoints
│       └── user/           # User-related endpoints
└── package.json
\`\`\`

---

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase CLI (\`npm install -g firebase-tools\`)
- Stripe account (for payment testing)

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/Prasanth-1402/FreshPicks.git
   cd FreshPicks
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   # Install frontend dependencies
   npm install

   # Install backend dependencies
   cd functions
   npm install
   cd ..
   \`\`\`

3. **Set up environment variables**
   
   Create a \`.env\` file in the root directory:
   \`\`\`env
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   \`\`\`

4. **Set up Firebase Functions config**
   \`\`\`bash
   firebase functions:config:set stripe.secret="your_stripe_secret_key"
   \`\`\`

### Running the App

**Start the development server:**
\`\`\`bash
npm start
\`\`\`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

**Start Firebase Functions locally:**
\`\`\`bash
cd functions
npm run serve
\`\`\`

---

## Available Scripts

| Command | Description |
|---------|-------------|
| \`npm start\` | Runs the app in development mode |
| \`npm run build\` | Builds the app for production |
| \`npm test\` | Launches the test runner |
| \`firebase deploy\` | Deploys to Firebase Hosting & Functions |
| \`firebase emulators:start\` | Starts Firebase local emulators |

---

## Test Credentials

For testing Stripe payments, use the following test card:
- **Card Number:** 4242 4242 4242 4242
- **Expiry:** Any future date
- **CVC:** Any 3 digits

---

##  Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

---

## 👨Author

**Prasanth** - [GitHub Profile](https://github.com/Prasanth-1402)

---


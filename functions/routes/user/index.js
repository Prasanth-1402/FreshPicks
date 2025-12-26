const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');

// Get Firestore instance
const getDb = () => admin.firestore();

// Create or update user profile
router.post('/profile', async (req, res) => {
  try {
    const {userId, email, displayName} = req.body;

    if (!userId) {
      return res.status(400).send({error: 'User ID is required'});
    }

    const db = getDb();
    const userRef = db.collection('users').doc(userId);

    await userRef.set(
      {
        email,
        displayName,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      },
      {merge: true}
    );

    res.status(200).send({success: true});
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).send({error: error.message});
  }
});

// Get user profile
router.get('/profile/:userId', async (req, res) => {
  try {
    const {userId} = req.params;

    if (!userId) {
      return res.status(400).send({error: 'User ID is required'});
    }

    const db = getDb();
    const userDoc = await db.collection('users').doc(userId).get();

    if (!userDoc.exists) {
      return res.status(404).send({error: 'User not found'});
    }

    res.status(200).send({
      id: userDoc.id,
      ...userDoc.data(),
    });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).send({error: error.message});
  }
});

module.exports = router;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const stripe = require('stripe')('sk_test_51NdCXmSFEEyTQkqeoUppjTeUN5fSKfLg5716KkRvPeqMg5xPnTmBrG8anpcXKgPLEioOEjMiOTcdNbUYiqGHB56E00ud23GG2m'); // Replace with your Stripe secret key
const port = process.env.PORT || 3009;
app.use(bodyParser.json());

app.use(express.static('../public'));
// let the react app to handle any unknown routes 
// serve up the index.html if express does'nt recognize the route
const path = require('path');
app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

// Define your API routes
app.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency } = req.body;

    // Create a payment intent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });

  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: 'An error occurred while creating payment intent' });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

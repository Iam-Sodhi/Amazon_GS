const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const stripe = require('stripe')('sk_test_51NdCXmSFEEyTQkqeoUppjTeUN5fSKfLg5716KkRvPeqMg5xPnTmBrG8anpcXKgPLEioOEjMiOTcdNbUYiqGHB56E00ud23GG2m'); // Replace with your Stripe secret key
const port = process.env.PORT || 3009;
app.use(bodyParser.json());
app.use(cors())

const path = require('path')
const buildPath = path.join(__dirname, 'build')
app.use(express.static(buildPath))
app.use(express.json())
app.use(cors())


// gets the static files from the build folder
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'))
})

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

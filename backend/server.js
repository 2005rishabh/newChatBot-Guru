
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // ✅ This now works

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/checkout', async (req, res) => {
  try {
    const { lineItems } = req.body;

    if (!lineItems || !Array.isArray(lineItems)) {
      return res.status(400).json({ error: 'Invalid lineItems format' });
    }

    console.log('Received lineItems:', lineItems);

    // 🛑 DEMO MODE: If using a placeholder key, simulate success
    if (process.env.STRIPE_SECRET_KEY && process.env.STRIPE_SECRET_KEY.includes('placeholder')) {
      console.log('⚠️ Using placeholder Stripe key. Simulating successful checkout.');
      const origin = req.headers.origin || 'http://localhost:5173';
      return res.json({ url: `${origin}/success?demo=true` });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: lineItems.map((item) => ({
        price_data: {
          currency: 'inr',
          product_data: {
            name: item.name,
            description: item.description || '',
            images: [item.image],
          },
          unit_amount: item.unit_amount,
        },
        quantity: item.quantity,
      })),
      success_url: 'http://localhost:5173/success',
      cancel_url: 'http://localhost:5173/cancel',
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    res.status(500).json({ error: 'Something went wrong while creating checkout session.' });
  }
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));

import { Handler } from '@netlify/functions';
import Stripe from 'stripe';
import { products } from '../../src/data/products';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const { items } = JSON.parse(event.body || '');

    // Create line items for Stripe
    const lineItems = items.map((item: { id: string; quantity: number }) => {
      const product = products.find(p => p.id === item.id);
      if (!product) throw new Error(`Product not found: ${item.id}`);

      return {
        price_data: {
          currency: 'inr',
          product_data: {
            name: product.name,
            description: product.description,
            images: [product.imageUrl],
          },
          unit_amount: product.price * 100, // Convert to smallest currency unit (paise)
        },
        quantity: item.quantity,
      };
    });

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.URL}/checkout/success`,
      cancel_url: `${process.env.URL}/cart`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ id: session.id }),
    };
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to create checkout session' }),
    };
  }
};

export { handler };
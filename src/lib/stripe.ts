import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export const initiateCheckout = async (lineItems: any[]) => {
  try {
    const response = await fetch('http://localhost:5000/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ lineItems }), // ✅ send as lineItems
    });

    if (!response.ok) {
      const text = await response.text(); // ✅ better error feedback
      throw new Error(`Backend error: ${text}`);
    }

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      throw new Error('Invalid response from server.');
    }
  } catch (error) {
    console.error('Stripe checkout error:', error);
    throw error; // ✅ rethrow so CartPage can catch
  }
};

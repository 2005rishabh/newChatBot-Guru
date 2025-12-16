import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const SuccessPage: React.FC = () => {
    const navigate = useNavigate();
    const { clearCart } = useCart();

    useEffect(() => {
        // Clear cart on successful payment load
        clearCart();
    }, []);

    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-4">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full border border-gray-100 animate-fade-in-up">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>

                <h1 className="text-3xl font-bold text-primary mb-2">Order Confirmed!</h1>
                <p className="text-gray-600 mb-8">
                    Thank you for your purchase. Your order has been placed successfully and will be shipped to your address soon.
                </p>

                <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg text-left">
                        <p className="text-sm text-gray-500 mb-1">Transaction ID</p>
                        <p className="font-mono text-primary font-medium">#ORD-{Math.floor(Math.random() * 1000000)}</p>
                    </div>

                    <button
                        onClick={() => navigate('/')}
                        className="w-full bg-primary text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-primary-light transition-colors"
                    >
                        <ShoppingBag className="h-5 w-5" />
                        Continue Shopping
                    </button>

                    <button
                        onClick={() => navigate('/contact')}
                        className="w-full text-gray-500 py-2 text-sm hover:text-primary transition-colors flex items-center justify-center gap-1"
                    >
                        Need help? Contact Support <ArrowRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

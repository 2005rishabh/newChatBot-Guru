import React from 'react';
import { ShieldCheck, RefreshCw, Clock, CreditCard, HelpCircle, CheckCircle } from 'lucide-react';

export const ReturnPolicyPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-900">Returns & Refunds</h1>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <ShieldCheck className="h-8 w-8 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-semibold text-indigo-800">Our Guarantee</h2>
          </div>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At ChatBot Guru, we stand behind the quality of our products. We offer a hassle-free
            return and refund policy to ensure your complete satisfaction with your purchase.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <RefreshCw className="h-6 w-6 text-indigo-600 mr-2" />
              <h3 className="text-xl font-semibold text-indigo-800">Return Policy</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>30-day return window for most products</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Product must be in original condition</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>All original packaging and accessories included</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Return shipping costs covered for defective items</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <CreditCard className="h-6 w-6 text-indigo-600 mr-2" />
              <h3 className="text-xl font-semibold text-indigo-800">Refund Process</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Refunds processed within 5-7 business days</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Original payment method will be refunded</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Shipping costs refunded for defective items</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Store credit option available</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-semibold text-indigo-800 mb-6">Return Process Steps</h3>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-indigo-100 rounded-full p-3 mr-4">
                <Clock className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">1. Initiate Return</h4>
                <p className="text-gray-600">
                  Log into your account and visit the order history section. Select the item
                  you wish to return and follow the prompts to initiate the return process.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-indigo-100 rounded-full p-3 mr-4">
                <RefreshCw className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">2. Package Return</h4>
                <p className="text-gray-600">
                  Pack the item securely in its original packaging along with all accessories.
                  Attach the provided return label to the package.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-indigo-100 rounded-full p-3 mr-4">
                <CreditCard className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">3. Refund Processing</h4>
                <p className="text-gray-600">
                  Once we receive and inspect the return, we'll process your refund within
                  5-7 business days to your original payment method.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-lg p-8 mt-8">
          <div className="flex items-center mb-4">
            <HelpCircle className="h-6 w-6 text-indigo-600 mr-2" />
            <h3 className="text-xl font-semibold text-indigo-800">Need Help?</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Our customer service team is available to assist you with any questions about returns
            or refunds.
          </p>
          <div className="space-y-2">
            <p className="text-gray-600">
              <strong>Email:</strong> support@chatbotguru.com
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> 1-800-CHATBOT (1-800-242-8268)
            </p>
            <p className="text-gray-600">
              <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM IST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
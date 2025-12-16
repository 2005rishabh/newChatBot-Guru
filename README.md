# ChatBot Guru E-Commerce Platform

A modern e-commerce application featuring an intelligent AI chatbot assistant ("Guru"), secure payments, and a seamless shopping experience. Built with React (Vite), Node.js, and Google's Gemini AI.

## 🚀 Features

- **AI Chatbot Assistant**: Integrated "Guru" chatbot using Google's Gemini AI to answer customer queries and provide assistance.
- **E-Commerce Functionality**:
    - Product browsing and details.
    - Shopping cart management.
    - Secure checkout process integrated with **Stripe**.
- **User Authentication**: Secure Login and Signup functionality.
- **Responsive Design**: Beautiful, mobile-first UI built with **Tailwind CSS**.
- **Modern Tech Stack**: Fast and efficient performance using Vite and React.

## 🛠️ Technology Stack

### Frontend
- **Framework**: React 18 (Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **AI Integration**: Google Generative AI SDK (@google/generative-ai)

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Payments**: Stripe API
- **Utilities**: cors, dotenv

## 📂 Project Structure

```
newChatBot-Guru/
├── backend/                # Node.js backend server
│   ├── server.js           # Express server with Stripe integration
│   └── package.json        # Backend dependencies
├── src/                    # Frontend source code
│   ├── components/         # Reusable UI components (Navbar, Chatbot, etc.)
│   ├── context/            # specific React Contexts (Auth, Cart)
│   ├── pages/              # Application pages (Home, Product, Checkout, etc.)
│   └── App.tsx             # Main application component
├── .env                    # Environment variables (GitIgnored)
└── package.json            # Frontend dependencies
```

## ⚙️ Setup & Installation

Follow these steps to set up the project locally.

### 1. Clone the Repository
```bash
git clone <repository-url>
cd newChatBot-Guru
```

### 2. Install Dependencies

**Frontend:**
```bash
npm install
```

**Backend:**
```bash
cd backend
npm install
cd ..
```

### 3. Environment Configuration

Create a `.env` file in the **root** directory and/or **backend** directory as needed.

**Backend (`backend/.env`):**
```env
STRIPE_SECRET_KEY=your_stripe_secret_key
```

**Frontend (`.env`):**
```env
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

### 4. Run the Application

You need to run both the frontend and backend servers.

**Start the Backend:**
Open a terminal and run:
```bash
cd backend
npm start
```
*Server runs on: `http://localhost:5000`*

**Start the Frontend:**
Open a new terminal window and run:
```bash
npm run dev
```
*Client runs on: `http://localhost:5173`*

## 💳 Payment Integration

The application uses **Stripe** for processing payments.
- Ensure your Stripe keys are correctly set in the `.env` file.
- The backend handles checkout session creation.
- A "Demo Mode" is available if a placeholder key is detected.

## 🤖 AI Chatbot ("Guru")

The chatbot is powered by **Google Gemini**. It helps users with:
- Product recommendations.
- Answering general queries.
- Navigating the site.

## 📦 Building for Production

To create a production-ready build for the frontend:

```bash
npm run build
```
This will generate a `dist` folder containing the optimized assets.

---
*Created by Rishabh Singh*

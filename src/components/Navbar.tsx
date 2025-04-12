import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, MessageCircle, Search } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const { items } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/?search=' + encodeURIComponent(searchQuery.trim()));
    }
  };

  return (
    <nav className="bg-primary text-text-light shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex-shrink-0">
              <span className="text-xl font-bold text-text-light">ChatBot Guru</span>
            </Link>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-[300px] px-4 py-2 pl-10 pr-4 rounded-lg bg-primary-light border border-primary-dark text-text-light placeholder-text-light/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-text-light/50" />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-2.5 text-text-light/50 hover:text-text-light"
                  >
                    ×
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className="flex items-center space-x-6">
            {user ? (
              <>
                <span className="text-text-light/80">{user.email}</span>
                <button
                  onClick={logout}
                  className="text-text-light/80 hover:text-text-light transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-text-light/80 hover:text-text-light transition-colors flex items-center"
                >
                  <User className="h-5 w-5 mr-1" />
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-text-light/80 hover:text-text-light transition-colors"
                >
                  Signup
                </Link>
              </>
            )}
            
            <Link
              to="/cart"
              className="text-text-light/80 hover:text-text-light transition-colors flex items-center"
            >
              <ShoppingCart className="h-5 w-5 mr-1" />
              <span className="bg-accent text-text-light rounded-full px-2 py-1 text-xs">
                {items.length}
              </span>
            </Link>
            
            <button
              className="text-text-light/80 hover:text-text-light transition-colors"
              onClick={() => {/* TODO: Open chatbot */}}
            >
              <MessageCircle className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full px-4 py-2 pl-10 pr-4 rounded-lg bg-primary-light border border-primary-dark text-text-light placeholder-text-light/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-text-light/50" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-text-light/50 hover:text-text-light"
                >
                  ×
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};
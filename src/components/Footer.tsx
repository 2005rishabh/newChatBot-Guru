import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Info, MapPin, Clock, Calendar, RefreshCw } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-text-light mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Info className="h-5 w-5 mr-2" />
              About Us
            </h3>
            <p className="text-text-light/80 leading-relaxed">
              ChatBot Guru is an innovative e-commerce platform developed by passionate
              second-year students. Our mission is to revolutionize online shopping
              with AI-powered assistance, making tech purchases simpler and more
              intuitive for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-text-light/80 hover:text-text-light transition-colors flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-text-light/80 hover:text-text-light transition-colors flex items-center">
                  <Info className="h-4 w-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-text-light/80 hover:text-text-light transition-colors flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/return-policy" className="text-text-light/80 hover:text-text-light transition-colors flex items-center">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              Contact Us
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-text-light/80 mb-2">Development Team:</p>
                <div className="space-y-2">
                  <p className="text-text-light/80 flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    Rishabh Singh - rishabh.singh@example.com
                  </p>
                  <p className="text-text-light/80 flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    Yash Kumar Choudhary - yash.choudhary@example.com
                  </p>
                  <p className="text-text-light/80 flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    Shivam Jha - shivam.jha@example.com
                  </p>
                </div>
              </div>
              <div className="flex items-center text-text-light/80">
                <Clock className="h-4 w-4 mr-2" />
                <span>Year: Second</span>
              </div>
              <div className="flex items-center text-text-light/80">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Computer Science Department</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light mt-12 pt-8 text-center">
          <p className="text-text-light/80">
            © {new Date().getFullYear()} ChatBot Guru. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/b80749a9-45b1-4142-8ce2-6da05cf1832f.png" 
                alt="KCL Chemicals Logo" 
                className="h-12 w-auto mr-3 filter brightness-0 invert"
              />
              <div>
                <h3 className="text-xl font-bold">KCL Chemicals</h3>
                <p className="text-sm text-gray-300">Kumar Chemical Industries</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Trusted supplier of industrial and specialty chemicals across India for over 30 years. 
              We provide quality chemicals with excellent technical support and supply chain management.
            </p>
            <div className="text-sm text-gray-300">
              <p>📍 19A Paddapukur Road, Kolkata - 700020</p>
              <p>📞 +91 9331052183 / 9339071662</p>
              <p>📧 kumarchemicalindustries@gmail.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product Categories</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Industrial Chemicals</li>
              <li>Specialty Chemicals</li>
              <li>Photography & X-Ray</li>
              <li>Agro Chemicals</li>
              <li>Water Treatment</li>
              <li>Food Processing</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Kumar Chemical Industries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

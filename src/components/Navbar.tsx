
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ServicesDropdown from './ServicesDropdown';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleContactUs = () => {
    // Redirect to another website - you can change this URL
    window.open('https://example.com/contact', '_blank');
  };

  return (
  <nav className="bg-[#FFFFFF] text-[#D4AF37] shadow-md border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Services */}
          <div className="flex items-center space-x-8">
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-amber-700 font-medium transition-colors duration-200"
              >
                <span>SERVICES</span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <ServicesDropdown isOpen={isServicesOpen} onClose={() => setIsServicesOpen(false)} />
            </div>
          </div>

          {/* Center - Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-800 tracking-wide">REVENUEGEAR</span>
            </div>
          </div>

          {/* Right side - Contact Us */}
          <div className="flex items-center">
            <button
              onClick={handleContactUs}
              className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

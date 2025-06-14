import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import ServicesDropdown from './ServicesDropdown';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleContactUs = () => {
    window.open('https://example.com/contact', '_blank');
  };

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 backdrop-blur-sm border-b border-amber-200/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left - SERVICES */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsServicesOpen((prev) => !prev)}
              aria-expanded={isServicesOpen}
              className="flex items-center gap-1 text-amber-800 hover:text-amber-600 font-semibold focus:outline-none transition duration-300 group"
            >
              <span className="text-sm md:text-base tracking-wide relative">
                SERVICES
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </span>
              <ChevronDown
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  isServicesOpen ? 'rotate-180 text-amber-600' : ''
                }`}
              />
            </button>
            <ServicesDropdown isOpen={isServicesOpen} onClose={() => setIsServicesOpen(false)} />
          </div>

          {/* Center - Logo */}
          <div className="text-center">
            <span className="text-xl md:text-2xl font-extrabold tracking-wide bg-gradient-to-r from-amber-700 via-yellow-600 to-orange-600 bg-clip-text text-transparent drop-shadow-sm">
              REVENUEGEAR
            </span>
          </div>

          {/* Right - Contact Button */}
          <div className="text-right">
            <button
              onClick={handleContactUs}
              className="bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 hover:from-amber-600 hover:via-yellow-600 hover:to-orange-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 border border-amber-400/30"
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
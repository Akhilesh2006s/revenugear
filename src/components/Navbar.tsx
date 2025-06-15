import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import ServicesDropdown from './ServicesDropdown';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleContactUs = () => {
    window.open('https://revlabs.tech/#contact', '_blank');
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
    <nav className="bg-white border-b border-amber-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left - SERVICES */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsServicesOpen((prev) => !prev)}
              aria-expanded={isServicesOpen}
              className="flex items-center gap-1 text-gray-700 hover:text-amber-600 font-medium focus:outline-none transition duration-200"
            >
              <span className="text-sm md:text-base tracking-wide">ABOUT US</span>
              <ChevronDown
                className={`w-4 h-4 transform transition-transform duration-200 ${
                  isServicesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <ServicesDropdown isOpen={isServicesOpen} onClose={() => setIsServicesOpen(false)} />
          </div>

          {/* Center - Logo */}
          <div className="text-center">
            <span className="text-xl md:text-2xl font-bold tracking-wide text-amber-600">
              REVENUEGEAR
            </span>
          </div>

          {/* Right - Contact Button */}
          <div className="text-right">
            <button
              onClick={handleContactUs}
              className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-lg font-medium text-sm md:text-base transition duration-200"
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


import { useEffect, useRef } from 'react';

interface ServicesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const ServicesDropdown = ({ isOpen, onClose }: ServicesDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const services = [
    { name: 'AI Development', description: 'Custom AI solutions' },
    { name: 'Machine Learning', description: 'ML model development' },
    { name: 'Data Analytics', description: 'Business intelligence' },
    { name: 'Consulting', description: 'Strategic guidance' },
  ];

  return (
    <div
      ref={dropdownRef}
      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-amber-100 z-50 overflow-hidden"
    >
      <div className="py-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="px-4 py-3 hover:bg-amber-50 cursor-pointer transition-colors duration-150"
          >
            <div className="font-medium text-gray-800">{service.name}</div>
            <div className="text-sm text-gray-600 mt-1">{service.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesDropdown;

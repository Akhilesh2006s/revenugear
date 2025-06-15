import { useEffect, useRef } from 'react';
import {
  Globe,
  AlertCircle,
  Tag,
  Phone,
  HeartPulse,
  BarChart3,
} from 'lucide-react';

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
    {
      name: 'International & Indian Language Support',
      description: 'Understands customer calls in any language with 95%+ accuracy',
      icon: <Globe className="w-6 h-6 text-blue-500" />,
    },
    {
      name: 'Detects All Revenue Leaks',
      description: 'Churn signals, repeat complaints, missed follow-ups, and overcharging patterns',
      icon: <AlertCircle className="w-6 h-6 text-rose-500" />,
    },
    {
      name: 'Automatic Complaint Classification',
      description: 'AI-powered tagging and categorization with zero manual work required',
      icon: <Tag className="w-6 h-6 text-purple-500" />,
    },
    {
      name: '100% Call Review',
      description: 'Analyzes every call including maintenance reminders and post-service calls',
      icon: <Phone className="w-6 h-6 text-green-500" />,
    },
    {
      name: 'Customer Sentiment Score',
      description: 'Real-time detection of frustration and happiness from voice tone',
      icon: <HeartPulse className="w-6 h-6 text-orange-500" />,
    },
    {
      name: 'Voice of Customer Dashboard',
      description: 'Track team performance, feedback trends, and customer satisfaction',
      icon: <BarChart3 className="w-6 h-6 text-cyan-500" />,
    },
  ];

  return (
    <div
      ref={dropdownRef}
      className="absolute top-full left-0 mt-3 w-[340px] bg-white rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden"
    >
      <div className="py-2 space-y-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex gap-3 px-4 py-3 hover:bg-amber-50 cursor-pointer transition-all duration-150"
          >
            <div className="flex-shrink-0">{service.icon}</div>
            <div>
              <div className="font-semibold text-gray-800 text-sm">{service.name}</div>
              <div className="text-sm text-gray-600 mt-0.5">{service.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesDropdown;

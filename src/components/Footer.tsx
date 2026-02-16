import { Link } from 'react-router-dom';
import { Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2B2B2B] text-[#F5EBDD] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-3xl font-bold tracking-tighter text-[#A67B5B] mb-2">PRMSH</h3>
            <p className="text-sm text-gray-400">
              Premium thrift, timeless style.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4 text-[#A67B5B] uppercase tracking-wider">Navigate</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-[#A67B5B] transition-colors duration-200">Home</Link>
              <Link to="/buy" className="hover:text-[#A67B5B] transition-colors duration-200">Shop Collection</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4 text-[#A67B5B] uppercase tracking-wider">Connect</h4>
            <div className="flex space-x-6 justify-center md:justify-start">
              <a href="#" className="hover:text-[#A67B5B] transition-colors duration-200 transform hover:scale-110">
                <Instagram size={28} />
              </a>
              <a
                href="https://wa.me/260000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#A67B5B] transition-colors duration-200 transform hover:scale-110"
              >
                <MessageCircle size={28} />
              </a>
            </div>
            <p className="mt-8 text-xs text-gray-500">
              &copy; {new Date().getFullYear()} PRMSH Thrift Store.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

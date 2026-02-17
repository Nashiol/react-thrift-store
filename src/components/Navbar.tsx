import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-bg-off-white/80 backdrop-blur-md shadow-sm border-b border-light-brown/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-primary-brown">
              PRMSH THRIFT STORE
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-text-dark hover:text-primary-brown transition-colors duration-200 font-medium">
              Home
            </Link>
            <Link to="/buy" className="text-text-dark hover:text-primary-brown transition-colors duration-200 font-medium">
              Buy
            </Link>
            <Link to="/buy" className="bg-primary-brown text-white px-4 py-2 rounded-md hover:bg-[#5a3620] transition-colors duration-200 flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              <ShoppingBag size={18} />
              Shop Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-dark hover:text-primary-brown focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-bg-off-white border-t border-light-brown/20 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-text-dark hover:text-primary-brown font-medium text-lg"
            >
              Home
            </Link>
            <Link
              to="/buy"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-text-dark hover:text-primary-brown font-medium text-lg"
            >
              Buy
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

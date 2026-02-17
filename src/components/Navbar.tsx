import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-bg-off-white/95 backdrop-blur-md shadow-sm border-b border-light-brown/20' 
        : 'bg-bg-off-white/80 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-primary-brown hover:opacity-80 transition-opacity duration-200">
              PRMSH THRIFT STORE
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link 
              to="/" 
              className="relative text-text-dark hover:text-primary-brown transition-colors duration-200 font-medium group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-brown transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link 
              to="/buy" 
              className="relative text-text-dark hover:text-primary-brown transition-colors duration-200 font-medium group"
            >
              Buy
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-brown transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link 
              to="/buy" 
              className="bg-primary-brown text-white px-4 py-2 rounded-md hover:bg-[#5a3620] transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:scale-95"
            >
              <ShoppingBag size={18} />
              Shop Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-dark hover:text-primary-brown focus:outline-none p-2 transition-transform duration-200"
            >
              <div className="transition-transform duration-300">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-bg-off-white border-t border-light-brown/20 px-4 py-4 flex flex-col items-center gap-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-text-dark hover:text-primary-brown font-medium text-lg transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/buy"
            onClick={() => setIsOpen(false)}
            className="text-text-dark hover:text-primary-brown font-medium text-lg transition-colors duration-200"
          >
            Buy
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

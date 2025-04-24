
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img 
              src="https://www.shopprop.com/assets/logo/main-logo.png" 
              alt="ShopProp Logo" 
              className="h-8 md:h-10"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-[#1A659E] transition-colors">
              Home
            </Link>
            <Link to="/properties" className="text-gray-600 hover:text-[#1A659E] transition-colors">
              Properties
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-[#1A659E] transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

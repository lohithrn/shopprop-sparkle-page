
import { Link } from "react-router-dom";
import { 
  Star, 
  HandCoins,
  BadgeDollarSign,
  Tools,
  TrendingUp,
  Phone,
  LogIn
} from "lucide-react";

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
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/premium" className="text-gray-600 hover:text-[#1A659E] transition-colors flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span>Premium Service</span>
            </Link>
            <Link to="/rebates" className="text-gray-600 hover:text-[#1A659E] transition-colors flex items-center gap-2">
              <HandCoins className="h-4 w-4" />
              <span>Big Buyer Rebates</span>
            </Link>
            <Link to="/fees" className="text-gray-600 hover:text-[#1A659E] transition-colors flex items-center gap-2">
              <BadgeDollarSign className="h-4 w-4" />
              <span>Low Selling Fees</span>
            </Link>
            <Link to="/tools" className="text-gray-600 hover:text-[#1A659E] transition-colors flex items-center gap-2">
              <Tools className="h-4 w-4" />
              <span>Tools</span>
            </Link>
            <Link to="/results" className="text-gray-600 hover:text-[#1A659E] transition-colors flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              <span>Top Results</span>
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-[#1A659E] transition-colors flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>Contact Us</span>
            </Link>
            <Link to="/login" className="text-gray-600 hover:text-[#1A659E] transition-colors flex items-center gap-2">
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

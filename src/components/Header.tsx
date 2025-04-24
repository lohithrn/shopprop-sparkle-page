
import { Link } from "react-router-dom";
import { 
  Star, 
  HandCoins,
  BadgeDollarSign,
  Wrench,
  TrendingUp,
  Phone,
  LogIn,
  Menu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/premium" className="text-gray-600 hover:text-[#1A659E] transition-colors flex items-center gap-2 text-xs font-bold">
              <Star className="h-3 w-3" />
              <span>Premium Service</span>
            </Link>
            <Link to="/rebates" className="text-gray-600 hover:text-[#1A659E] transition-colors flex items-center gap-2 text-xs font-bold">
              <HandCoins className="h-3 w-3" />
              <span>Big Buyer Rebates</span>
            </Link>
            <Link to="/fees" className="text-gray-600 hover:text-[#1A659E] transition-colors flex items-center gap-2 text-xs font-bold">
              <BadgeDollarSign className="h-3 w-3" />
              <span>Low Selling Fees</span>
            </Link>
            <Link to="/tools" className="text-gray-600 hover:text-[#1A659E] transition-colors flex items-center gap-2 text-xs font-bold">
              <Wrench className="h-3 w-3" />
              <span>Tools</span>
            </Link>
            <Link to="/results" className="text-gray-600 hover:text-[#1A659E] transition-colors flex items-center gap-2 text-xs font-bold">
              <TrendingUp className="h-3 w-3" />
              <span>Top Results</span>
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-[#1A659E] transition-colors flex items-center gap-2 text-xs font-bold">
              <Phone className="h-3 w-3" />
              <span>Contact Us</span>
            </Link>
            <Link to="/login" className="text-gray-600 hover:text-[#1A659E] transition-colors flex items-center gap-2 text-xs font-bold">
              <LogIn className="h-3 w-3" />
              <span>Login</span>
            </Link>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-600">
                  <Menu className="h-6 w-6" />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <nav className="px-4 py-6 flex flex-col space-y-4">
                  <Link to="/premium" className="text-gray-600 hover:text-[#1A659E] transition-colors flex items-center gap-2 text-sm font-bold">
                    <Star className="h-4 w-4" />
                    <span>Premium Service</span>
                  </Link>
                  <Link to="/rebates" className="text-gray-600 hover:text-[#1A659E] transition-colors flex items-center gap-2 text-sm font-bold">
                    <HandCoins className="h-4 w-4" />
                    <span>Big Buyer Rebates</span>
                  </Link>
                  <Link to="/fees" className="text-gray-600 hover:text-[#1A659E] transition-colors flex items-center gap-2 text-sm font-bold">
                    <BadgeDollarSign className="h-4 w-4" />
                    <span>Low Selling Fees</span>
                  </Link>
                  <Link to="/tools" className="text-gray-600 hover:text-[#1A659E] transition-colors flex items-center gap-2 text-sm font-bold">
                    <Wrench className="h-4 w-4" />
                    <span>Tools</span>
                  </Link>
                  <Link to="/results" className="text-gray-600 hover:text-[#1A659E] transition-colors flex items-center gap-2 text-sm font-bold">
                    <TrendingUp className="h-4 w-4" />
                    <span>Top Results</span>
                  </Link>
                  <Link to="/contact" className="text-gray-600 hover:text-[#1A659E] transition-colors flex items-center gap-2 text-sm font-bold">
                    <Phone className="h-4 w-4" />
                    <span>Contact Us</span>
                  </Link>
                  <Link to="/login" className="text-gray-600 hover:text-[#1A659E] transition-colors flex items-center gap-2 text-sm font-bold">
                    <LogIn className="h-4 w-4" />
                    <span>Login</span>
                  </Link>
                </nav>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

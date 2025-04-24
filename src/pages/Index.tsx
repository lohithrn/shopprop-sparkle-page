
import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Home, Wallet, BarChart4, Tool, Award, Phone } from "lucide-react";

const Index = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [showConfetti, setShowConfetti] = useState(true);
  
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    
    // Stop confetti after 5 seconds
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    
    return () => {
      window.removeEventListener("resize", updateDimensions);
      clearTimeout(timer);
    };
  }, []);
  
  const handleExternalLink = () => {
    window.open("https://shopprop.com", "_blank");
  };

  const menuItems = [
    { name: "Premium Service", icon: <Award className="h-5 w-5" /> },
    { name: "Big Buyer Rebates", icon: <Wallet className="h-5 w-5" /> },
    { name: "Low Selling Fees", icon: <BarChart4 className="h-5 w-5" /> },
    { name: "Tools", icon: <Tool className="h-5 w-5" /> },
    { name: "Top Results", icon: <Award className="h-5 w-5" /> },
    { name: "Contact Us", icon: <Phone className="h-5 w-5" /> }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white">
      {showConfetti && (
        <Confetti
          width={dimensions.width}
          height={dimensions.height}
          recycle={false}
          numberOfPieces={200}
          colors={['#FF6B35', '#1A659E', '#7851A9', '#FF9F1C']}
        />
      )}
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        {/* Overlay content */}
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto text-center backdrop-blur-sm p-8 rounded-lg bg-black/40">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Real Estate, Flipped.</h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-200">
              1 Platform. 2 Powerful Choices:
            </p>
            <p className="text-lg mb-2 text-gray-300">
              Premium: Full-Service + Big Buyer Rebates + Lowest Seller Fees.
            </p>
            <p className="text-lg mb-8 text-gray-300">
              Freemium: $0 Commission + Licensed Support.
            </p>
            
            {/* Search area */}
            <div className="relative mb-8">
              <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-gray-600">
                <Search className="h-5 w-5 text-gray-400 mr-2" />
                <input 
                  type="text" 
                  placeholder="Search for properties..." 
                  className="bg-transparent border-none outline-none flex-1 text-white placeholder-gray-400"
                />
                <Button variant="default" className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Search
                </Button>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Button variant="default" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full px-8 py-6 text-lg">
                Start Buying
              </Button>
              <Button variant="default" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full px-8 py-6 text-lg">
                Start Selling
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <Card className="bg-transparent border border-gray-700 backdrop-blur-md" onClick={handleExternalLink}>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-gray-300">Seller's Savings</h3>
                <p className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">$58,505</p>
              </CardContent>
            </Card>
            
            <Card className="bg-transparent border border-gray-700 backdrop-blur-md" onClick={handleExternalLink}>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-gray-300">Buyer's Rebate</h3>
                <p className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">$26,005</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Menu Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <Card key={index} className="bg-transparent border border-gray-800 hover:border-gray-600 backdrop-blur-md transition-all">
                <CardContent className="p-6 flex items-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-medium">{item.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

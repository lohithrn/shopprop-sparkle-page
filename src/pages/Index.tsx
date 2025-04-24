import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  Layers, 
  Award, 
  BadgeDollarSign, 
  Check, 
  Star, 
  Wallet,
  BarChart4,
  Wrench,
  Phone
} from "lucide-react";

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
    { name: "Tools", icon: <Wrench className="h-5 w-5" /> },
    { name: "Top Results", icon: <Award className="h-5 w-5" /> },
    { name: "Contact Us", icon: <Phone className="h-5 w-5" /> }
  ];

  return (
    <div className="relative min-h-screen bg-white text-gray-800">
      {showConfetti && (
        <Confetti
          width={dimensions.width}
          height={dimensions.height}
          recycle={false}
          numberOfPieces={200}
          colors={['#FF6B35', '#1A659E', '#7851A9', '#FF9F1C']}
        />
      )}
      
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-[#1A659E]/10 to-white/90 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://www.shopprop.com/assets/images/home-page/home-image_1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto text-center backdrop-blur-sm p-8 rounded-lg bg-white/80">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#1A659E]">Real Estate, Flipped.</h1>
            
            <div className="flex items-center justify-center gap-2 mb-6">
              <Layers className="h-6 w-6 text-[#1A659E]" />
              <p className="text-xl md:text-2xl text-gray-700">
                1 Platform. 2 Powerful Choices:
              </p>
            </div>
            
            <Card className="mb-4 bg-gradient-to-r from-[#1A659E]/5 to-[#1A659E]/10 border-[#1A659E]/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                  <div className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-[#1A659E]" />
                    <h3 className="text-xl font-semibold text-[#1A659E]">Premium</h3>
                  </div>
                  <div className="flex flex-wrap justify-center items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Check className="h-5 w-5 text-[#1A659E]/80" />
                      <span className="text-gray-700">Full-Service</span>
                    </span>
                    <span className="text-[#1A659E]/40">+</span>
                    <span className="flex items-center gap-1">
                      <Star className="h-5 w-5 text-[#1A659E]/80" />
                      <span className="text-gray-700">Big Buyer Rebates</span>
                    </span>
                    <span className="text-[#1A659E]/40">+</span>
                    <span className="flex items-center gap-1">
                      <BadgeDollarSign className="h-5 w-5 text-[#1A659E]/80" />
                      <span className="text-gray-700">Lowest Seller Fees</span>
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mb-8 bg-gradient-to-r from-[#1A659E]/5 to-[#1A659E]/10 border-[#1A659E]/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                  <div className="flex items-center gap-2">
                    <BadgeDollarSign className="h-6 w-6 text-[#1A659E]" />
                    <h3 className="text-xl font-semibold text-[#1A659E]">Freemium</h3>
                  </div>
                  <div className="flex flex-wrap justify-center items-center gap-3">
                    <span className="flex items-center gap-1">
                      <BadgeDollarSign className="h-5 w-5 text-[#1A659E]/80" />
                      <span className="text-gray-700">$0 Commission</span>
                    </span>
                    <span className="text-[#1A659E]/40">+</span>
                    <span className="flex items-center gap-1">
                      <Check className="h-5 w-5 text-[#1A659E]/80" />
                      <span className="text-gray-700">Licensed Support</span>
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="relative mb-8">
              <div className="flex items-center bg-white/90 backdrop-blur-md rounded-full px-4 py-2 border border-[#1A659E]/20 shadow-lg">
                <Search className="h-5 w-5 text-[#1A659E] mr-2" />
                <input 
                  type="text" 
                  placeholder="Search for properties..." 
                  className="bg-transparent border-none outline-none flex-1 text-gray-700 placeholder-gray-400"
                />
                <Button variant="default" className="rounded-full bg-gradient-to-r from-[#1A659E] to-[#1A659E]/80 hover:from-[#1A659E]/90 hover:to-[#1A659E]/70">
                  Search
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Button variant="default" className="bg-gradient-to-r from-[#1A659E] to-[#1A659E]/80 hover:from-[#1A659E]/90 hover:to-[#1A659E]/70 rounded-full px-8 py-6 text-lg">
                Start Buying
              </Button>
              <Button variant="default" className="bg-gradient-to-r from-[#1A659E]/90 to-[#1A659E]/70 hover:from-[#1A659E] hover:to-[#1A659E]/80 rounded-full px-8 py-6 text-lg">
                Start Selling
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-b from-white to-[#1A659E]/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <Card className="bg-white/80 border border-[#1A659E]/20 shadow-lg backdrop-blur-md hover:shadow-xl transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-[#1A659E]">Seller's Savings</h3>
                <p className="text-4xl font-bold bg-gradient-to-r from-[#1A659E] to-[#1A659E]/70 bg-clip-text text-transparent">$58,505</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 border border-[#1A659E]/20 shadow-lg backdrop-blur-md hover:shadow-xl transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-[#1A659E]">Buyer's Rebate</h3>
                <p className="text-4xl font-bold bg-gradient-to-r from-[#1A659E] to-[#1A659E]/70 bg-clip-text text-transparent">$26,005</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-[#1A659E]">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <Card key={index} className="bg-white/80 border border-[#1A659E]/20 hover:border-[#1A659E]/30 shadow-lg hover:shadow-xl backdrop-blur-md transition-all">
                <CardContent className="p-6 flex items-center">
                  <div className="bg-gradient-to-r from-[#1A659E] to-[#1A659E]/80 p-3 rounded-full mr-4 text-white">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-medium text-[#1A659E]">{item.name}</h3>
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

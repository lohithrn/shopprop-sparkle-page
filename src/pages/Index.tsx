import { useState, useEffect } from "react";
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
    <div className="relative min-h-screen bg-white">
      {/* Hero Section with Diagonal Design */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A659E] to-[#2A95E5] transform -skew-y-6 origin-top-left z-0" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Real Estate{" "}
                <span className="bg-clip-text text-transparent bg-[radial-gradient(circle_at_center,_#FFFFFF_0%,_#1EAEDB_100%)]">
                  Commission
                </span>{" "}
                Reimagined.
              </h1>
              
              {/* Search Bar */}
              <div className="mt-8">
                <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20">
                  <Search className="h-4 w-4 sm:h-5 sm:w-5 text-white/70 ml-4" />
                  <input 
                    type="text" 
                    placeholder="Search properties..." 
                    className="bg-transparent border-none outline-none flex-1 px-4 text-sm sm:text-base text-white placeholder-white/70"
                  />
                  <Button className="rounded-full bg-white text-[#1A659E] hover:bg-white/90 text-sm sm:text-base">
                    Search
                  </Button>
                </div>
              </div>

              {/* Platform Description */}
              <div className="max-w-2xl mt-4">
                <p className="text-xs sm:text-sm md:text-base text-[#E2F0FF]/90">
                  One platform. Two powerful choices designed for your success in the modern real estate market.
                </p>
              </div>
            </div>

            <div className="hidden md:block">
              <img 
                src="/lovable-uploads/1e43e983-c56e-4f84-9d10-c03b5bd71f42.png" 
                alt="Happy homeowners and real estate agents" 
                className="rounded-lg shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-[#1A659E]/5 to-[#1A659E]/10 border-0">
              <CardContent className="p-8">
                <h3 className="text-lg sm:text-xl font-medium text-[#1A659E] mb-2">Average Seller's Savings</h3>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A659E]">$58,505</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-[#1A659E]/5 to-[#1A659E]/10 border-0">
              <CardContent className="p-8">
                <h3 className="text-lg sm:text-xl font-medium text-[#1A659E] mb-2">Average Buyer's Rebate</h3>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A659E]">$26,005</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-[#1A659E]/5 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-[#1A659E]">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {menuItems.map((item, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300 border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#1A659E] p-2 sm:p-3 rounded-lg text-white">
                      {item.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-medium text-[#1A659E]">{item.name}</h3>
                  </div>
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

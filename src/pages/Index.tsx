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
  Phone,
  ShieldCheck,
  ShoppingCart,
  HandCoins,
  UserPlus
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
        <div className="relative z-10 container mx-auto px-4 h-full py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="text-white">
              <h1 className="text-[min(10vw,5.5rem)] md:text-center lg:text-[min(5.5vw,5.5rem)] font-bold mb-6 leading-tight md:leading-none whitespace-normal md:whitespace-nowrap">
                Real Estate{" "}
                <span className="bg-clip-text text-transparent bg-[radial-gradient(circle_at_center,_#FFFFFF_0%,_#1EAEDB_100%)]">
                  Commission
                </span>{" "}
                Reimagined.
              </h1>

              {/* Search Bar */}
              <div className="mb-4 flex justify-center">
                <div className="w-full max-w-xl flex items-center bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20">
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
              <div className="max-w-2xl mb-8 text-center">
                <p className="text-xs sm:text-sm md:text-base text-[#E2F0FF]/90">
                  One platform. Two powerful choices designed for your success in the modern real estate market.
                </p>
              </div>

              {/* Pricing Plans */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Free Plan */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="h-5 w-5 text-white" />
                    <h3 className="text-lg font-semibold">Freemium</h3>
                  </div>
                  <p className="text-2xl font-bold mb-3">Free <span className="text-sm font-normal">forever</span></p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4" />
                      <span className="text-sm">Basic property listings</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4" />
                      <span className="text-sm">Standard support</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-white text-[#1A659E] hover:bg-white/90">
                    Get Started
                  </Button>
                </div>

                {/* Premium Plan */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 relative">
                  <div className="absolute -top-2 right-2 bg-white text-[#1A659E] px-2 py-0.5 rounded-full text-xs font-medium">
                    Popular
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <BadgeDollarSign className="h-5 w-5 text-white" />
                    <h3 className="text-lg font-semibold">Premium</h3>
                  </div>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4" />
                      <span className="text-sm">Full-Service Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4" />
                      <span className="text-sm">Big Buyer Rebates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4" />
                      <span className="text-sm">Lowest Seller Fees</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-[#1A659E] text-white border border-white hover:bg-[#1A659E]/90">
                    Get Premium
                  </Button>
                </div>
              </div>
            </div>

            <div className="hidden md:block relative">
              <img 
                src="/lovable-uploads/1e43e983-c56e-4f84-9d10-c03b5bd71f42.png" 
                alt="Happy homeowners and real estate agents" 
                className="rounded-lg shadow-xl w-full object-cover"
              />
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
                <Button className="bg-white text-[#1A659E] hover:bg-gray-100 flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" /> Start Buying
                </Button>
                <Button className="bg-[#1A659E] text-white hover:bg-[#1A659E]/90 flex items-center gap-2">
                  <HandCoins className="h-5 w-5" /> Start Selling
                </Button>
                <Button className="bg-white border border-[#1A659E] text-[#1A659E] hover:bg-gray-50 flex items-center gap-2">
                  <UserPlus className="h-5 w-5" /> Join
                </Button>
              </div>
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

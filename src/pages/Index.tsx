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
          <div className="max-w-4xl mx-auto text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight truncate">
              Real Estate, Reimagined.
            </h1>
            
            <div className="max-w-2xl">
              <p className="text-xl md:text-2xl mb-8 text-[#E2F0FF]/90">
                One platform. Two powerful choices designed for your success in the modern real estate market.
              </p>
            </div>

            {/* Search Bar */}
            <div className="mt-8">
              <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20">
                <Search className="h-5 w-5 text-white/70 ml-4" />
                <input 
                  type="text" 
                  placeholder="Search properties..." 
                  className="bg-transparent border-none outline-none flex-1 px-4 text-white placeholder-white/70"
                />
                <Button className="rounded-full bg-white text-[#1A659E] hover:bg-white/90">
                  Search
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {/* Premium Card */}
              <Card className="bg-white/10 backdrop-blur-lg border-0 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <Award className="h-8 w-8 text-[#E2F0FF]" />
                    <h3 className="text-2xl font-bold text-white">Premium</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-[#E2F0FF]" />
                        <span>Full-Service Support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-[#E2F0FF]" />
                        <span>Big Buyer Rebates</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <BadgeDollarSign className="h-5 w-5 text-[#E2F0FF]" />
                        <span>Lowest Seller Fees</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Freemium Card */}
              <Card className="bg-white/10 backdrop-blur-lg border-0 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <BadgeDollarSign className="h-8 w-8 text-[#E2F0FF]" />
                    <h3 className="text-2xl font-bold text-white">Freemium</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-[#E2F0FF]" />
                        <span>$0 Commission</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-[#E2F0FF]" />
                        <span>Licensed Support</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
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
                <h3 className="text-xl font-medium text-[#1A659E] mb-2">Average Seller's Savings</h3>
                <p className="text-4xl font-bold text-[#1A659E]">$58,505</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-[#1A659E]/5 to-[#1A659E]/10 border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-[#1A659E] mb-2">Average Buyer's Rebate</h3>
                <p className="text-4xl font-bold text-[#1A659E]">$26,005</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-[#1A659E]/5 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1A659E]">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {menuItems.map((item, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300 border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#1A659E] p-3 rounded-lg text-white">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-medium text-[#1A659E]">{item.name}</h3>
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

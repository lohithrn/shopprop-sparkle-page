import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  ShoppingCart,
  HandCoins,
  Phone,
  Star,
  ShieldCheck,
  BadgeDollarSign
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import Header from "@/components/Header";

const Index = () => {
  const isMobile = useIsMobile();
  const handleExternalLink = () => {
    window.open("https://shopprop.com", "_blank");
  };

  return (
    <>
      <Header />
      <div className="relative min-h-screen bg-[#1A659E] overflow-hidden pt-16">
        <div className="relative h-full min-h-screen">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A659E] to-[#2A95E5] transform -skew-y-6 origin-top-left z-0" />
          <div className="relative z-10 container mx-auto px-4 py-8 h-full flex flex-col">
            <div className="pt-8 md:pt-16 flex items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-center max-w-4xl text-white">
                Real Estate{" "}
                <span className="bg-clip-text text-transparent bg-[radial-gradient(circle_at_center,_#FFFFFF_0%,_#1EAEDB_100%)]">
                  Commission
                </span>{" "}
                Reimagined.
              </h1>
            </div>

            <div className="mt-8 md:mt-16 flex flex-col items-center justify-center gap-6">
              <div className="w-full flex justify-center px-4">
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

              <p className="text-[0.65rem] sm:text-xs md:text-sm text-white/90 text-center max-w-2xl px-4">
                One platform. Two powerful choices designed for your success in the modern real estate market.
              </p>
            </div>

            <div className="mt-8 md:mt-16 flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/2 flex flex-col">
                <div className="relative aspect-[4/3] md:aspect-auto md:h-[400px] rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/1e43e983-c56e-4f84-9d10-c03b5bd71f42.png" 
                    alt="Happy homeowners and real estate agents" 
                    className="absolute inset-0 w-full h-full object-cover shadow-xl"
                  />
                </div>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                  <Button 
                    className="bg-[radial-gradient(circle_at_center,_#1A659E_0%,_#2A95E5_100%)] 
                               text-white 
                               hover:bg-[radial-gradient(circle_at_center,_#1A659E_10%,_#2A95E5_90%)] 
                               flex items-center gap-2 px-4 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base
                               shadow-[0_4px_6px_rgba(126,105,171,0.5)] 
                               hover:shadow-[0_6px_8px_rgba(126,105,171,0.7)]
                               transition-all duration-300
                               w-full sm:w-auto"
                  >
                    <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6 mr-2" /> Start Buying
                  </Button>
                  <Button 
                    className="bg-[radial-gradient(circle_at_center,_#1EAEDB_0%,_#0FA0CE_100%)] 
                               text-white 
                               hover:bg-[radial-gradient(circle_at_center,_#1EAEDB_10%,_#0FA0CE_90%)] 
                               flex items-center gap-2 px-4 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base
                               shadow-[0_4px_6px_rgba(126,105,171,0.5)] 
                               hover:shadow-[0_6px_8px_rgba(126,105,171,0.7)]
                               transition-all duration-300
                               w-full sm:w-auto"
                  >
                    <HandCoins className="h-5 w-5 sm:h-6 sm:w-6 mr-2" /> Start Selling
                  </Button>
                </div>
              </div>

              <div className="w-full md:w-1/2 flex flex-col mt-8 md:mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Star className="h-5 w-5 text-white" />
                        <h3 className="text-lg font-semibold text-white">Freemium</h3>
                      </div>
                      <p className="text-xl sm:text-2xl font-bold mb-3 text-white">Free <span className="text-sm font-normal">forever</span></p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-center gap-2 text-white">
                          <ShieldCheck className="h-4 w-4 text-white" />
                          <span className="text-sm text-white">Basic property listings</span>
                        </li>
                        <li className="flex items-center gap-2 text-white">
                          <ShieldCheck className="h-4 w-4 text-white" />
                          <span className="text-sm text-white">Standard support</span>
                        </li>
                      </ul>
                    </div>
                    <Button className="w-full bg-white text-[#1A659E] hover:bg-white/90">
                      Get Started
                    </Button>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 relative flex flex-col justify-between h-full">
                    <div>
                      <div className="absolute -top-2 right-2 bg-white text-[#1A659E] px-2 py-0.5 rounded-full text-xs font-medium">
                        Popular
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <BadgeDollarSign className="h-5 w-5 text-white" />
                        <h3 className="text-lg font-semibold text-white">Premium</h3>
                      </div>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-center gap-2 text-white">
                          <ShieldCheck className="h-4 w-4 text-white" />
                          <span className="text-sm text-white">Full-Service Support</span>
                        </li>
                        <li className="flex items-center gap-2 text-white">
                          <ShieldCheck className="h-4 w-4 text-white" />
                          <span className="text-sm text-white">Big Buyer Rebates</span>
                        </li>
                        <li className="flex items-center gap-2 text-white">
                          <ShieldCheck className="h-4 w-4 text-white" />
                          <span className="text-sm text-white">Lowest Seller Fees</span>
                        </li>
                        <li className="flex items-center gap-2 text-white">
                          <ShieldCheck className="h-4 w-4 text-white" />
                          <span className="text-sm text-white">Pay Low Commission</span>
                        </li>
                      </ul>
                    </div>
                    <Button className="w-full bg-[#1A659E] text-white border border-white hover:bg-[#1A659E]/90">
                      Savings Calculator
                    </Button>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-md rounded-full py-3 px-4 sm:py-4 sm:px-8 flex items-center gap-2 sm:gap-4 shadow-lg border border-white/20 w-full max-w-sm mx-auto">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    <div className="text-lg sm:text-2xl font-bold text-white truncate">+1 888-821-0556</div>
                  </div>
                  <p className="mt-4 text-white/80 text-sm">Talk to our real estate specialists</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

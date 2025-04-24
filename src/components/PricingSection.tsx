
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeDollarSign, ShieldCheck, Star } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-[#1A659E]">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Freemium Plan */}
          <Card className="relative border-2 border-[#1A659E]/20">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 rounded-full bg-[#1A659E]/5">
                <Star className="h-6 w-6 text-[#1A659E]" />
              </div>
              <CardTitle className="text-2xl font-bold text-[#1A659E]">Basic</CardTitle>
              <p className="text-3xl font-bold mt-4">
                Free
                <span className="text-base font-normal text-gray-600 ml-1">forever</span>
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-[#1A659E]" />
                  <span>Basic property listings</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-[#1A659E]" />
                  <span>Standard support</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-[#1A659E]" />
                  <span>Limited search results</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#1A659E]/10 text-[#1A659E] hover:bg-[#1A659E]/20">
                Get Started
              </Button>
            </CardFooter>
          </Card>

          {/* Premium Plan */}
          <Card className="relative border-2 border-[#1A659E]">
            <div className="absolute -top-3 right-4 bg-[#1A659E] text-white px-3 py-1 rounded-full text-sm">
              Popular
            </div>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 rounded-full bg-[#1A659E]">
                <BadgeDollarSign className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-[#1A659E]">Premium</CardTitle>
              <p className="text-3xl font-bold mt-4">
                $99
                <span className="text-base font-normal text-gray-600 ml-1">/month</span>
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-[#1A659E]" />
                  <span>Unlimited property listings</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-[#1A659E]" />
                  <span>Priority support 24/7</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-[#1A659E]" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-[#1A659E]" />
                  <span>Featured listings</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-[#1A659E]" />
                  <span>Commission rebates</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#1A659E] hover:bg-[#1A659E]/90">
                Get Premium
              </Button>
            </CardFooter>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;

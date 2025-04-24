
import { BadgeDollarSign } from "lucide-react";

const SavingsHighlight = () => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A659E] via-[#2A95E5] to-[#1EAEDB] z-0" />
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 pt-6 pb-16">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            They Get It! Potential Savings on a $1M Property
          </h2>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex-1 text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center justify-center gap-2">
                  <BadgeDollarSign className="h-5 w-5" />
                  Seller's Savings
                </h3>
                <div className="text-4xl md:text-5xl font-bold text-white">
                  $58,505
                </div>
              </div>
            </div>

            <div className="flex-1 text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center justify-center gap-2">
                  <BadgeDollarSign className="h-5 w-5" />
                  Buyer's Rebate
                </h3>
                <div className="text-4xl md:text-5xl font-bold text-white">
                  $26,005
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsHighlight;


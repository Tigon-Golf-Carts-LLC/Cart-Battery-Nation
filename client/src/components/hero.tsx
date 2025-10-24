import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Search, CheckCircle, Battery, Truck, Zap, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative text-white py-8 sm:py-12 md:py-16 lg:py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero-background.jpg)'
        }}
      />
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-evbd-orange">
              Buy Electric Vehicle Batteries <span className="text-evbd-green">Direct</span> & <span className="text-evbd-green">Save</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-blue-100 leading-relaxed">
              EV Battery Direct - Shop premium Electric Vehicle Batteries for Golf Carts, LSV, NEV & MSV. 
              Order from 96+ professional-grade battery configurations. Buy now with expert support!
            </p>
            <div className="flex flex-col gap-3 sm:gap-4">
              <Link href="/battery-selector">
                <Button 
                  size="lg" 
                  className="bg-evbd-orange text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg hover:bg-orange-600 w-full"
                  data-testid="button-shop-batteries"
                >
                  <Search className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-white" />
                  Shop Electric Vehicle Batteries
                </Button>
              </Link>
              <a 
                href="tel:1-844-888-7732"
                className="bg-white text-evbd-blue px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg hover:bg-gray-100 transition-colors flex items-center justify-center border-2 border-white w-full"
                data-testid="link-call-now"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-evbd-blue" />
                <span className="hidden sm:inline">Buy Now - Call </span>1-844-888-7732
              </a>
            </div>
            <div className="mt-4 sm:mt-6 flex items-center text-blue-100 text-xs sm:text-sm md:text-base">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0 text-white" />
              <span className="leading-tight">Free Shipping on Orders Over $500 • 10,000+ Satisfied Customers</span>
            </div>
          </div>
          <div className="lg:text-right mt-8 lg:mt-0">
            <div className="bg-white/10 p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-sm text-center">
              <div className="bg-white/20 p-6 sm:p-8 md:p-12 rounded-xl">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6">
                  <div className="bg-evbd-blue/20 p-3 sm:p-4 rounded-lg">
                    <Battery className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-evbd-blue mx-auto mb-2" />
                    <div className="text-white font-semibold text-xs sm:text-sm md:text-base">Golf Cart</div>
                  </div>
                  <div className="bg-evbd-blue/20 p-3 sm:p-4 rounded-lg">
                    <Truck className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-evbd-blue mx-auto mb-2" />
                    <div className="text-white font-semibold text-xs sm:text-sm md:text-base">LSV/NEV</div>
                  </div>
                  <div className="bg-evbd-blue/20 p-3 sm:p-4 rounded-lg">
                    <Zap className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-evbd-blue mx-auto mb-2" />
                    <div className="text-white font-semibold text-xs sm:text-sm md:text-base">Lithium</div>
                  </div>
                  <div className="bg-evbd-blue/20 p-3 sm:p-4 rounded-lg">
                    <Shield className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-evbd-blue mx-auto mb-2" />
                    <div className="text-white font-semibold text-xs sm:text-sm md:text-base">AGM/Gel</div>
                  </div>
                </div>
              </div>
              <div className="mt-3 sm:mt-4 text-center">
                <div className="text-evbd-orange font-semibold text-sm sm:text-base md:text-lg">96+ EV Battery Models - Order Today!</div>
                <div className="text-blue-100 text-xs sm:text-sm">6V • 8V • 12V | Flooded • AGM • Gel • Lithium</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

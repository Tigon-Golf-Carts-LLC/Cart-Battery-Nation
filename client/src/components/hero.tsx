import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Search, CheckCircle, Battery, Truck, Zap, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative text-white py-16 lg:py-24 overflow-hidden">
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-evbd-orange">
              Buy Electric Vehicle Batteries <span className="text-evbd-green">Direct</span> & <span className="text-evbd-green">Save</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              EV Battery Direct - Shop premium Electric Vehicle Batteries for Golf Carts, LSV, NEV & MSV. 
              Order from 96+ professional-grade battery configurations. Buy now with expert support!
            </p>
            <div className="flex flex-col gap-4">
              <Link href="/battery-selector">
                <Button 
                  size="lg" 
                  className="bg-evbd-orange text-white px-8 py-4 text-lg hover:bg-orange-600 w-full"
                >
                  <Search className="h-5 w-5 mr-2 text-white" />
                  Shop Electric Vehicle Batteries
                </Button>
              </Link>
              <a 
                href="tel:1-844-888-7732"
                className="bg-white text-evbd-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center border-2 border-white w-full"
              >
                <Phone className="h-5 w-5 mr-2 text-evbd-blue" />
                Buy Now - Call 1-844-888-7732
              </a>
            </div>
            <div className="mt-6 flex items-center text-blue-100">
              <CheckCircle className="h-5 w-5 mr-2 text-white" />
              <span>Free Shipping on Orders Over $500 • 10,000+ Satisfied Customers</span>
            </div>
          </div>
          <div className="lg:text-right">
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm text-center">
              <div className="bg-white/20 p-12 rounded-xl">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="bg-evbd-blue/20 p-4 rounded-lg">
                    <Battery className="h-12 w-12 text-evbd-blue mx-auto mb-2" />
                    <div className="text-white font-semibold">Golf Cart</div>
                  </div>
                  <div className="bg-evbd-blue/20 p-4 rounded-lg">
                    <Truck className="h-12 w-12 text-evbd-blue mx-auto mb-2" />
                    <div className="text-white font-semibold">LSV/NEV</div>
                  </div>
                  <div className="bg-evbd-blue/20 p-4 rounded-lg">
                    <Zap className="h-12 w-12 text-evbd-blue mx-auto mb-2" />
                    <div className="text-white font-semibold">Lithium</div>
                  </div>
                  <div className="bg-evbd-blue/20 p-4 rounded-lg">
                    <Shield className="h-12 w-12 text-evbd-blue mx-auto mb-2" />
                    <div className="text-white font-semibold">AGM/Gel</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <div className="text-evbd-orange font-semibold">96+ EV Battery Models - Order Today!</div>
                <div className="text-blue-100 text-sm">6V • 8V • 12V | Flooded • AGM • Gel • Lithium</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

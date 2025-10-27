import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Menu, Phone, Battery } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import ShoppingCartComponent from "./shopping-cart";

export default function Header() {
  const [location] = useLocation();
  const { openCart, itemCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Products", href: "/products" },
    { name: "Battery Guide", href: "/battery-guide" },
    { name: "Battery Selector", href: "/battery-selector" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-evbd-blue text-white py-2">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-center items-center text-xs sm:text-sm">
            <span className="hidden sm:inline mr-2">Expert Cart Battery Support:</span>
            <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-white flex-shrink-0" />
            <a 
              href="tel:1-844-888-7732" 
              className="font-semibold hover:text-evbd-orange transition-colors whitespace-nowrap"
            >
              1-844-888-7732
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center py-2 sm:py-3 md:py-4">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <img 
                  src="/cbn-logo.png" 
                  alt="Cart Battery Nation" 
                  className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span className={`text-gray-700 hover:text-evbd-blue font-medium transition-colors cursor-pointer ${
                    location === item.href ? "text-evbd-blue" : ""
                  }`}>
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Header CTA & Cart */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <a 
                href="tel:1-844-888-7732" 
                className="hidden lg:flex bg-evbd-orange text-white px-3 md:px-4 py-2 rounded-lg text-sm md:text-base font-semibold hover:bg-orange-600 transition-colors items-center"
              >
                <Phone className="h-4 w-4 mr-2 text-white" />
                1-844-888-7732
              </a>
              
              <Button
                variant="ghost"
                onClick={openCart}
                className="relative p-2 text-evbd-blue hover:text-evbd-blue"
              >
                <ShoppingCart className="h-6 w-6 text-evbd-blue" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs bg-evbd-orange">
                    {itemCount}
                  </Badge>
                )}
              </Button>
              
              {/* Mobile menu button */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" className="md:hidden p-2">
                    <Menu className="h-6 w-6 text-evbd-blue" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex flex-col space-y-4 mt-8">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <span 
                          className="block px-3 py-2 text-lg font-medium text-gray-700 hover:text-evbd-blue cursor-pointer"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </span>
                      </Link>
                    ))}
                    <div className="border-t pt-4">
                      <a 
                        href="tel:1-844-888-7732" 
                        className="flex items-center justify-center bg-evbd-orange text-white px-4 py-3 rounded-lg font-semibold"
                      >
                        <Phone className="h-4 w-4 mr-2 text-white" />
                        Call Expert: 1-844-888-7732
                      </a>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <ShoppingCartComponent />
    </>
  );
}

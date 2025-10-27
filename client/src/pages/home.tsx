import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import ProductCard from "@/components/product-card";
import BatterySelectorQuiz from "@/components/battery-selector-quiz";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Settings, Shield, Truck, GraduationCap, Wrench, Star, CheckCircle } from "lucide-react";
import { type Product } from "@shared/schema";
import { useDocumentHead } from "@/hooks/use-document-head";

export default function Home() {
  // Set SEO metadata
  useDocumentHead({
    title: "Buy Cart Batteries Direct | Golf Cart, LSV, NEV & MSV Batteries",
    description: "Shop Cart Batteries Direct from Cart Battery Nation! Order premium Golf Cart Batteries, LSV, NEV & MSV solutions. 96+ battery configurations. Buy now & save! Call 1-844-888-7732.",
    ogImage: "/hero-background.jpg",
    ogImageWidth: 1200,
    ogImageHeight: 630
  });

  const { data: products = [] } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  // Get featured products (first 4 from each category)
  const featuredProducts = products.slice(0, 4);

  const categories = [
    {
      name: "Golf Cart Batteries",
      slug: "golf-cart",
      description: "Buy premium Golf Cart Batteries for reliable performance. Shop 6V, 8V & 12V configurations. Order direct and save!",
      image: "/attached_assets/TIGON BATTERIES TRANS BG_1755534409586.png",
      icon: "🏌️",
      count: 24
    },
    {
      name: "LSV Batteries",
      slug: "lsv",
      description: "Shop Low Speed Vehicle (LSV) Batteries for neighborhood transportation. Buy direct from Cart Battery Nation!",
      image: "/attached_assets/TIGON BATTERIES TRANS BG_1755534409586.png",
      icon: "🚗",
      count: 24
    },
    {
      name: "NEV Batteries",
      slug: "nev",
      description: "Purchase Neighborhood Electric Vehicle (NEV) Batteries meeting DOT regulations. Order street-legal EV batteries now!",
      image: "/attached_assets/TIGON BATTERIES TRANS BG_1755534409586.png",
      icon: "🏠",
      count: 24
    },
    {
      name: "MSV Batteries",
      slug: "msv",
      description: "Buy Medium Speed Vehicle (MSV) Batteries for enhanced performance. Shop extended range EV batteries direct!",
      image: "/attached_assets/TIGON BATTERIES TRANS BG_1755534409586.png",
      icon: "⚡",
      count: 24
    }
  ];

  const benefits = [
    {
      icon: Settings,
      title: "96+ Battery Configurations",
      description: "Shop our complete lineup of Cart Batteries. Buy every voltage, capacity and technology for your Golf Cart.",
      color: "evbd-blue"
    },
    {
      icon: Phone,
      title: "Expert Phone Support",
      description: "Talk directly to Cart Battery Nation specialists. Get personalized buying advice for your Golf Cart or cart battery needs.",
      color: "evbd-blue"
    },
    {
      icon: Truck,
      title: "Fast Nationwide Shipping",
      description: "Quick delivery of Cart Batteries across the country. Order today and get your Golf Cart batteries fast!",
      color: "evbd-blue"
    },
    {
      icon: Shield,
      title: "Industry-Leading Warranty",
      description: "Comprehensive warranty coverage on all Cart Battery Nation Golf Cart Batteries and cart battery solutions.",
      color: "evbd-blue"
    },
    {
      icon: GraduationCap,
      title: "Educational Resources",
      description: "Comprehensive buying guides on Cart Batteries, voltage systems, maintenance from Cart Battery Nation experts.",
      color: "evbd-blue"
    },
    {
      icon: Wrench,
      title: "Professional Installation",
      description: "Expert installation services ensure optimal performance when you buy cart batteries from Cart Battery Nation.",
      color: "evbd-blue"
    }
  ];

  const testimonials = [
    {
      rating: 5,
      text: "Bought 6V-225 Golf Cart Batteries from Cart Battery Nation - best purchase ever! Running strong for 3 years. Excellent customer support when I called 1-844-888-7732 to order.",
      author: "John Smith",
      title: "Golf Course Manager, Texas",
      initials: "JS"
    },
    {
      rating: 5,
      text: "Outstanding LSV Batteries! Purchased direct and saved hundreds. Perfect for our neighborhood carts. Call 1-844-888-7732 to buy yours today!",
      author: "Maria Rodriguez",
      title: "Fleet Manager, California",
      initials: "MR"
    },
    {
      rating: 5,
      text: "Ordered lithium Golf Cart Batteries from Cart Battery Nation - incredible value! Extended range and fast charging. Buy now, you won't regret it!",
      author: "Bob Kim",
      title: "Golf Enthusiast, Florida",
      initials: "BK"
    }
  ];

  const educationalContent = [
    {
      title: "Golf Cart Battery Buying Guide 2025",
      description: "Shop smart! Everything you need to know before you buy Golf Cart Batteries: voltage configurations, pricing, and installation from Cart Battery Nation.",
      readTime: "5 min read",
      category: "BUYING GUIDE",
      image: "/attached_assets/evbd-logo.png"
    },
    {
      title: "Best Cart Battery Technologies",
      description: "Compare & buy: Flooded Lead-Acid, AGM, Gel and Lithium technologies. Cart Battery Nation explains which to purchase for your needs.",
      readTime: "8 min read",
      category: "TECHNICAL",
      image: "/attached_assets/evbd-logo.png"
    },
    {
      title: "Which Cart Battery Should You Buy?",
      description: "Purchase the right battery for Golf Carts, LSV, NEV & MSV applications. Cart Battery Nation shopping guide for each vehicle type.",
      readTime: "6 min read",
      category: "SHOPPING",
      image: "/attached_assets/evbd-logo.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <Hero />

      {/* Product Categories Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-evbd-orange mb-3 sm:mb-4">
              Shop Cart Batteries Direct & Save
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Buy Golf Cart Batteries and specialized LSV, NEV & MSV solutions direct. Cart Battery Nation offers the complete lineup at the best prices!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {categories.map((category) => (
              <Card key={category.slug} className="card-hover overflow-hidden border-2 border-transparent hover:border-evbd-blue">
                <img 
                  src={category.image}
                  alt={`${category.name} - Buy from Cart Battery Nation`}
                  className="w-full h-36 sm:h-40 md:h-48 object-contain bg-gray-50" 
                />
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <span className="text-xl sm:text-2xl mr-2 sm:mr-3">{category.icon}</span>
                    <h3 className="text-lg sm:text-xl font-bold text-evbd-orange">{category.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{category.description}</p>
                  <div className="flex justify-between items-center gap-2">
                    <Link href={`/products/${category.slug}`}>
                      <span className="text-evbd-blue font-semibold hover:underline cursor-pointer text-sm sm:text-base">
                        Shop All →
                      </span>
                    </Link>
                    <Badge className="bg-evbd-green text-white text-xs sm:text-sm">
                      {category.count} Models
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <a href="tel:1-844-888-7732">
              <Button size="lg" className="bg-evbd-orange text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg hover:bg-orange-600 w-full sm:w-auto" data-testid="button-ready-to-buy">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                <span className="hidden sm:inline">Ready to Buy? Call Cart Battery Nation: </span>1-844-888-7732
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Battery Selector Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-evbd-orange mb-3 sm:mb-4">
              Shop Smart - Find Your Perfect Cart Battery
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Our Battery Selector Quiz helps you buy the optimal battery from our complete lineup of 96+ Golf Cart, LSV, NEV & MSV battery configurations. Purchase with confidence!
            </p>
          </div>

          <BatterySelectorQuiz />
        </div>
      </section>

      {/* Why Choose Cart Battery Nation Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-evbd-orange mb-3 sm:mb-4">
              Why Buy Cart Batteries from Cart Battery Nation?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Over 10,000 customers order from Cart Battery Nation for reliable Golf Cart, LSV, NEV & MSV power solutions. Shop with confidence - here's why we're the industry leader.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`bg-${benefit.color}/10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6`}>
                    <Icon className={`text-${benefit.color} h-6 w-6 sm:h-8 sm:w-8`} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-evbd-orange mb-3 sm:mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base px-2">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <a href="tel:1-844-888-7732">
              <Button size="lg" className="bg-evbd-blue text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg hover:bg-blue-700 w-full sm:w-auto" data-testid="button-order-now">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                <span className="hidden sm:inline">Order Now & Experience Direct Savings: </span>Call 1-844-888-7732
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-evbd-orange mb-3 sm:mb-4">
              Best-Selling Cart Batteries - Order Today!
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Shop our top-selling Golf Cart Batteries and electric vehicle solutions. Buy the batteries trusted by thousands nationwide!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                showBestSeller={index === 0}
              />
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="bg-evbd-blue text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg hover:bg-blue-700 w-full sm:w-auto" data-testid="button-shop-all">
                <Settings className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Shop All 96+ Battery Models
              </Button>
            </Link>
            <a href="tel:1-844-888-7732">
              <Button size="lg" className="bg-evbd-orange text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg hover:bg-orange-600 w-full sm:w-auto" data-testid="button-ready-buy-2">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                <span className="hidden sm:inline">Ready to Buy? Call </span>1-844-888-7732
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Educational Content Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-evbd-orange mb-3 sm:mb-4">
              Cart Battery Nation Buying Guides & Resources
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Learn everything before you buy! Cart Batteries buying guides, power systems, and battery maintenance from Cart Battery Nation experts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {educationalContent.map((article, index) => (
              <Card key={index} className="card-hover overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-36 sm:h-40 md:h-48 object-contain bg-gray-50" 
                />
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <Badge 
                      className={`text-white mr-2 text-xs ${
                        article.category === 'BUYING GUIDE' ? 'bg-evbd-green' :
                        article.category === 'TECHNICAL' ? 'bg-evbd-blue' :
                        'bg-evbd-orange'
                      }`}
                    >
                      {article.category}
                    </Badge>
                    <span className="text-gray-500 text-xs sm:text-sm">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-evbd-orange mb-2 sm:mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{article.description}</p>
                  <Link href="/battery-guide">
                    <span className="text-evbd-blue font-semibold hover:underline flex items-center cursor-pointer text-sm sm:text-base">
                      Read Buying Guide <span className="ml-2">→</span>
                    </span>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <a href="tel:1-844-888-7732">
              <Button size="lg" className="bg-evbd-orange text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg hover:bg-orange-600 w-full sm:w-auto" data-testid="button-questions">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                <span className="hidden sm:inline">Questions Before You Buy? Call Cart Battery Nation: </span>1-844-888-7732
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-evbd-orange mb-3 sm:mb-4">
              Customers Love Buying from Cart Battery Nation
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Over 10,000 satisfied customers purchased Cart Batteries from Cart Battery Nation for their Golf Cart, LSV, NEV & MSV needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-4 sm:p-5 md:p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="text-yellow-400 flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-500 text-xs sm:text-sm ml-2">5.0/5</span>
                  </div>
                  <blockquote className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-evbd-blue rounded-full flex items-center justify-center text-white font-semibold mr-3 text-sm sm:text-base">
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.author}</div>
                      <div className="text-gray-600 text-xs sm:text-sm">{testimonial.title}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <Card className="max-w-2xl mx-auto p-4 sm:p-6 md:p-8">
              <CardContent className="p-0 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-evbd-orange mb-2">10,000+</div>
                <div className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Satisfied Customers</div>
                <div className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base px-2">Purchased Cart Batteries from Cart Battery Nation for Golf Cart, LSV, NEV & MSV solutions nationwide</div>
                <a href="tel:1-844-888-7732">
                  <Button className="bg-evbd-blue text-white px-8 py-3 hover:bg-blue-700">
                    <Phone className="h-4 w-4 mr-2" />
                    Start Your Order Today: 1-844-888-7732
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            Ready to Buy Cart Batteries Direct?
          </h2>
          <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
            Order Golf Cart Batteries, LSV, NEV & MSV solutions now! Our battery specialists are standing by to help you purchase from our complete lineup of 96+ configurations. Shop direct and save!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a 
              href="tel:1-844-888-7732"
              className="bg-evbd-orange text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-orange-600 transition-colors flex items-center"
            >
              <Phone className="h-6 w-6 mr-3" />
              <div>
                <div>Order Now - Call Direct</div>
                <div className="text-lg font-normal">1-844-888-7732</div>
              </div>
            </a>
            
            <div className="text-gray-600">
              <div className="text-lg font-semibold">Monday - Saturday</div>
              <div>8AM - 5PM EST</div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-evbd-orange">96+</div>
              <div className="text-gray-600">Cart Battery Models</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-evbd-orange">10,000+</div>
              <div className="text-gray-600">Customers Bought Direct</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-evbd-orange">24/7</div>
              <div className="text-gray-600">Online Shopping</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-evbd-orange">Fast</div>
              <div className="text-gray-600">Nationwide Delivery</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

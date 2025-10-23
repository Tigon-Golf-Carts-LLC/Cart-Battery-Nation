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
    title: "Buy Electric Vehicle Batteries Direct | Golf Cart, LSV, NEV & MSV Batteries",
    description: "Shop Electric Vehicle Batteries Direct! Order premium Golf Cart Batteries, LSV, NEV & MSV solutions. 96+ battery configurations. Buy now & save! Call 1-844-888-7732.",
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
      image: "/attached_assets/evbd-logo.png",
      icon: "🏌️",
      count: 24
    },
    {
      name: "LSV Batteries",
      slug: "lsv",
      description: "Shop Low Speed Vehicle (LSV) Batteries for neighborhood transportation. Buy direct from EV Battery Direct!",
      image: "/attached_assets/evbd-logo.png",
      icon: "🚗",
      count: 24
    },
    {
      name: "NEV Batteries",
      slug: "nev",
      description: "Purchase Neighborhood Electric Vehicle (NEV) Batteries meeting DOT regulations. Order street-legal EV batteries now!",
      image: "/attached_assets/evbd-logo.png",
      icon: "🏠",
      count: 24
    },
    {
      name: "MSV Batteries",
      slug: "msv",
      description: "Buy Medium Speed Vehicle (MSV) Batteries for enhanced performance. Shop extended range EV batteries direct!",
      image: "/attached_assets/evbd-logo.png",
      icon: "⚡",
      count: 24
    }
  ];

  const benefits = [
    {
      icon: Settings,
      title: "96+ Battery Configurations",
      description: "Shop our complete lineup of Electric Vehicle Batteries. Buy every voltage, capacity and technology for your Golf Cart or EV.",
      color: "evbd-blue"
    },
    {
      icon: Phone,
      title: "Expert Phone Support",
      description: "Talk directly to EV Battery Direct specialists. Get personalized buying advice for your Golf Cart or electric vehicle battery needs.",
      color: "evbd-green"
    },
    {
      icon: Truck,
      title: "Fast Nationwide Shipping",
      description: "Quick delivery of Electric Vehicle Batteries across the country. Order today and get your Golf Cart batteries fast!",
      color: "evbd-orange"
    },
    {
      icon: Shield,
      title: "Industry-Leading Warranty",
      description: "Comprehensive warranty coverage on all EV Battery Direct Golf Cart Batteries and electric vehicle battery solutions.",
      color: "evbd-blue"
    },
    {
      icon: GraduationCap,
      title: "Educational Resources",
      description: "Comprehensive buying guides on Electric Vehicle Batteries, voltage systems, maintenance from EV Battery Direct experts.",
      color: "evbd-green"
    },
    {
      icon: Wrench,
      title: "Professional Installation",
      description: "Expert installation services ensure optimal performance when you buy electric vehicle batteries from EV Battery Direct.",
      color: "evbd-orange"
    }
  ];

  const testimonials = [
    {
      rating: 5,
      text: "Bought 6V-225 Golf Cart Batteries from EV Battery Direct - best purchase ever! Running strong for 3 years. Excellent customer support when I called 1-844-888-7732 to order.",
      author: "John Smith",
      title: "Golf Course Manager, Texas",
      initials: "JS"
    },
    {
      rating: 5,
      text: "Outstanding LSV Batteries! Purchased direct and saved hundreds. Perfect for our neighborhood electric vehicles. Call 1-844-888-7732 to buy yours today!",
      author: "Maria Rodriguez",
      title: "Fleet Manager, California",
      initials: "MR"
    },
    {
      rating: 5,
      text: "Ordered lithium Golf Cart Batteries from EV Battery Direct - incredible value! Extended range and fast charging. Buy now, you won't regret it!",
      author: "Bob Kim",
      title: "Golf Enthusiast, Florida",
      initials: "BK"
    }
  ];

  const educationalContent = [
    {
      title: "Golf Cart Battery Buying Guide 2025",
      description: "Shop smart! Everything you need to know before you buy Golf Cart Batteries: voltage configurations, pricing, and installation from EV Battery Direct.",
      readTime: "5 min read",
      category: "BUYING GUIDE",
      image: "/attached_assets/evbd-logo.png"
    },
    {
      title: "Best Electric Vehicle Battery Technologies",
      description: "Compare & buy: Flooded Lead-Acid, AGM, Gel and Lithium technologies. EV Battery Direct explains which to purchase for your needs.",
      readTime: "8 min read",
      category: "TECHNICAL",
      image: "/attached_assets/evbd-logo.png"
    },
    {
      title: "Which EV Battery Should You Buy?",
      description: "Purchase the right battery for Golf Carts, LSV, NEV & MSV applications. EV Battery Direct shopping guide for each vehicle type.",
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Shop Electric Vehicle Batteries Direct & Save
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Buy Golf Cart Batteries and specialized LSV, NEV & MSV solutions direct. EV Battery Direct offers the complete lineup at the best prices!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Card key={category.slug} className="card-hover overflow-hidden border-2 border-transparent hover:border-evbd-blue">
                <img 
                  src={category.image}
                  alt={`${category.name} - Buy from EV Battery Direct`}
                  className="w-full h-48 object-contain bg-gray-50" 
                />
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{category.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex justify-between items-center">
                    <Link href={`/products/${category.slug}`}>
                      <span className="text-evbd-blue font-semibold hover:underline cursor-pointer">
                        Shop All {category.name} →
                      </span>
                    </Link>
                    <Badge className="bg-evbd-green text-white">
                      {category.count} Models
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="tel:1-844-888-7732">
              <Button size="lg" className="bg-evbd-orange text-white px-8 py-4 text-lg hover:bg-orange-600">
                <Phone className="h-5 w-5 mr-2" />
                Ready to Buy? Call EV Battery Direct: 1-844-888-7732
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Battery Selector Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Shop Smart - Find Your Perfect EV Battery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Battery Selector Quiz helps you buy the optimal battery from our complete lineup of 96+ Golf Cart, LSV, NEV & MSV battery configurations. Purchase with confidence!
            </p>
          </div>

          <BatterySelectorQuiz />
        </div>
      </section>

      {/* Why Choose TIGON Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Buy Electric Vehicle Batteries from EV Battery Direct?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Over 10,000 customers order from EV Battery Direct for reliable Golf Cart, LSV, NEV & MSV power solutions. Shop with confidence - here's why we're the industry leader.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`bg-${benefit.color}/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Icon className={`text-${benefit.color} h-8 w-8`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <a href="tel:1-844-888-7732">
              <Button size="lg" className="bg-evbd-blue text-white px-8 py-4 text-lg hover:bg-blue-700">
                <Phone className="h-5 w-5 mr-2" />
                Order Now & Experience Direct Savings: Call 1-844-888-7732
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Best-Selling Electric Vehicle Batteries - Order Today!
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Shop our top-selling Golf Cart Batteries and electric vehicle solutions. Buy the batteries trusted by thousands nationwide!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                showBestSeller={index === 0}
              />
            ))}
          </div>

          <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="bg-evbd-blue text-white px-8 py-4 text-lg hover:bg-blue-700">
                <Settings className="h-5 w-5 mr-2" />
                Shop All 96+ Battery Models
              </Button>
            </Link>
            <a href="tel:1-844-888-7732">
              <Button size="lg" className="bg-evbd-orange text-white px-8 py-4 text-lg hover:bg-orange-600">
                <Phone className="h-5 w-5 mr-2" />
                Ready to Buy? Call 1-844-888-7732
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Educational Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              EV Battery Direct Buying Guides & Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn everything before you buy! Electric Vehicle Batteries buying guides, power systems, and battery maintenance from EV Battery Direct experts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationalContent.map((article, index) => (
              <Card key={index} className="card-hover overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-contain bg-gray-50" 
                />
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Badge 
                      className={`text-white mr-2 ${
                        article.category === 'BUYING GUIDE' ? 'bg-evbd-green' :
                        article.category === 'TECHNICAL' ? 'bg-evbd-blue' :
                        'bg-evbd-orange'
                      }`}
                    >
                      {article.category}
                    </Badge>
                    <span className="text-gray-500 text-sm">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <Link href="/battery-guide">
                    <span className="text-evbd-blue font-semibold hover:underline flex items-center cursor-pointer">
                      Read Buying Guide <span className="ml-2">→</span>
                    </span>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="tel:1-844-888-7732">
              <Button size="lg" className="bg-evbd-orange text-white px-8 py-4 text-lg hover:bg-orange-600">
                <Phone className="h-5 w-5 mr-2" />
                Questions Before You Buy? Call EV Battery Direct: 1-844-888-7732
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Customers Love Buying from EV Battery Direct
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Over 10,000 satisfied customers purchased Electric Vehicle Batteries from EV Battery Direct for their Golf Cart, LSV, NEV & MSV needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm ml-2">5.0/5</span>
                  </div>
                  <blockquote className="text-gray-700 mb-4">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-evbd-blue rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-gray-600 text-sm">{testimonial.title}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto p-8">
              <CardContent className="p-0 text-center">
                <div className="text-4xl font-bold text-evbd-blue mb-2">10,000+</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Satisfied Customers</div>
                <div className="text-gray-600 mb-6">Purchased Electric Vehicle Batteries from EV Battery Direct for Golf Cart, LSV, NEV & MSV solutions nationwide</div>
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
            Ready to Buy Electric Vehicle Batteries Direct?
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
              <div className="text-2xl font-bold text-evbd-green">96+</div>
              <div className="text-gray-600">EV Battery Models</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-evbd-green">10,000+</div>
              <div className="text-gray-600">Customers Bought Direct</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-evbd-green">24/7</div>
              <div className="text-gray-600">Online Shopping</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-evbd-green">Fast</div>
              <div className="text-gray-600">Nationwide Delivery</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

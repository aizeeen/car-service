import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, TrendingUp, Shield, Truck, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { featuredCars } from '@/data/cars';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Luxury car" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Premium Car Import & Export Solutions
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Connecting you with luxury and performance vehicles from around the world. Seamless importing and exporting with GlobalAuto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link to="/cars">Browse Cars</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose GlobalAuto</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              With years of experience and a global network, we provide the most reliable car import and export services in the industry.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Globe className="h-10 w-10 text-primary" />,
                title: "Global Network",
                description: "Access to vehicles from markets worldwide with established partnerships in major automotive hubs."
              },
              {
                icon: <Shield className="h-10 w-10 text-primary" />,
                title: "Secure Transactions",
                description: "Fully insured and secure payment processes to protect your investment at every step."
              },
              {
                icon: <Truck className="h-10 w-10 text-primary" />,
                title: "Door-to-Door Delivery",
                description: "Complete logistics solutions from purchase to delivery at your specified location."
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-primary" />,
                title: "Quality Assurance",
                description: "Thorough inspection and verification of all vehicles before purchase and shipping."
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-primary" />,
                title: "Market Expertise",
                description: "In-depth knowledge of international markets to secure the best vehicles at competitive prices."
              },
              {
                icon: <ArrowRight className="h-10 w-10 text-primary" />,
                title: "Streamlined Process",
                description: "Simplified importing and exporting with expert handling of documentation and customs."
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Vehicles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our selection of premium vehicles available for import and export.
            </p>
          </motion.div>

          <Tabs defaultValue="import" className="mb-12">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="import">Available for Import</TabsTrigger>
                <TabsTrigger value="export">Available for Export</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="import">
              <Carousel className="w-full">
                <CarouselContent>
                  {featuredCars.filter(car => car.type === 'import').map((car, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                      <Card className="overflow-hidden h-full">
                        <div className="aspect-video relative overflow-hidden">
                          <img 
                            src={car.image} 
                            alt={car.name} 
                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                          />
                          <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                            {car.condition}
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-semibold">{car.name}</h3>
                            <p className="font-bold text-primary">${car.price.toLocaleString()}</p>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">{car.location}</p>
                          <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                            <div className="flex items-center gap-1">
                              <span className="text-muted-foreground">Year:</span> {car.year}
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="text-muted-foreground">Mileage:</span> {car.mileage}
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="text-muted-foreground">Engine:</span> {car.engine}
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="text-muted-foreground">Transmission:</span> {car.transmission}
                            </div>
                          </div>
                          <Button asChild className="w-full">
                            <Link to={`/cars/${car.id}`}>View Details</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-1" />
                <CarouselNext className="right-1" />
              </Carousel>
            </TabsContent>
            
            <TabsContent value="export">
              <Carousel className="w-full">
                <CarouselContent>
                  {featuredCars.filter(car => car.type === 'export').map((car, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                      <Card className="overflow-hidden h-full">
                        <div className="aspect-video relative overflow-hidden">
                          <img 
                            src={car.image} 
                            alt={car.name} 
                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                          />
                          <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                            {car.condition}
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-semibold">{car.name}</h3>
                            <p className="font-bold text-primary">${car.price.toLocaleString()}</p>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">{car.location}</p>
                          <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                            <div className="flex items-center gap-1">
                              <span className="text-muted-foreground">Year:</span> {car.year}
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="text-muted-foreground">Mileage:</span> {car.mileage}
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="text-muted-foreground">Engine:</span> {car.engine}
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="text-muted-foreground">Transmission:</span> {car.transmission}
                            </div>
                          </div>
                          <Button asChild className="w-full">
                            <Link to={`/cars/${car.id}`}>View Details</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-1" />
                <CarouselNext className="right-1" />
              </Carousel>
            </TabsContent>
          </Tabs>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/cars">View All Cars <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Import or Export Your Dream Car?</h2>
            <p className="text-lg mb-8 text-primary-foreground/80">
              Our team of experts is ready to assist you with all your automotive needs. Get in touch today for a personalized quote.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Contact Us Now</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
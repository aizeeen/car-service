import { motion } from 'framer-motion';
import { ArrowRight, Car, Ship, FileCheck, Search, DollarSign, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ServicesPage = () => {
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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive car import and export solutions tailored to your needs. From sourcing to delivery, we handle every step of the process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            <motion.div variants={fadeIn} className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Car Import Services</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We specialize in importing premium and luxury vehicles from markets around the world. Our comprehensive import services ensure a smooth and hassle-free experience.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Vehicle sourcing from global markets",
                  "Thorough inspection and verification",
                  "Complete documentation handling",
                  "Customs clearance and compliance",
                  "Shipping and logistics coordination",
                  "Door-to-door delivery"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-fit">
                <Link to="/contact">Request Import Service</Link>
              </Button>
            </motion.div>
            <motion.div variants={fadeIn} className="relative">
              <img 
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80" 
                alt="Car Import" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            <motion.div variants={fadeIn} className="relative order-1 md:order-none">
              <img 
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Car Export" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div variants={fadeIn} className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Car Export Services</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Looking to export vehicles to international markets? Our export services provide end-to-end solutions for individuals and businesses.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Market analysis and buyer matching",
                  "Competitive pricing strategy",
                  "Export documentation preparation",
                  "Regulatory compliance management",
                  "Secure payment processing",
                  "International shipping arrangements"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-fit">
                <Link to="/contact">Request Export Service</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've streamlined the import/export process to make it as simple and efficient as possible for our clients.
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
                icon: <Search className="h-10 w-10 text-primary" />,
                title: "1. Consultation & Search",
                description: "We begin with a detailed consultation to understand your requirements, followed by a comprehensive search for suitable vehicles."
              },
              {
                icon: <Car className="h-10 w-10 text-primary" />,
                title: "2. Vehicle Inspection",
                description: "Once potential vehicles are identified, our team conducts thorough inspections to ensure quality and condition meet our standards."
              },
              {
                icon: <DollarSign className="h-10 w-10 text-primary" />,
                title: "3. Purchase & Payment",
                description: "We handle the negotiation and purchase process, with secure payment options to protect your investment."
              },
              {
                icon: <FileCheck className="h-10 w-10 text-primary" />,
                title: "4. Documentation",
                description: "Our experts manage all necessary documentation, ensuring compliance with regulations in both origin and destination countries."
              },
              {
                icon: <Ship className="h-10 w-10 text-primary" />,
                title: "5. Shipping & Logistics",
                description: "We coordinate the shipping process, including insurance, tracking, and customs clearance at both ends."
              },
              {
                icon: <ShieldCheck className="h-10 w-10 text-primary" />,
                title: "6. Delivery & Support",
                description: "Finally, we arrange delivery to your specified location and provide ongoing support for any post-delivery needs."
              }
            ].map((step, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-4">{step.icon}</div>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{step.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our car import and export services.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "How long does the import process typically take?",
                  answer: "The import process duration varies depending on the source country, destination, and specific requirements. Generally, it takes between 4-12 weeks from initial consultation to delivery. Factors affecting the timeline include vehicle availability, shipping schedules, customs processing, and any required modifications for compliance."
                },
                {
                  question: "What documentation is required for importing a car?",
                  answer: "Required documentation typically includes the original title, purchase invoice, bill of lading, import declaration forms, customs clearance documents, and compliance certificates. Additional documents may be required depending on the origin and destination countries. Our team handles all documentation to ensure a smooth process."
                },
                {
                  question: "Are there any restrictions on the types of vehicles that can be imported?",
                  answer: "Yes, import restrictions vary by country and may include age limits, emission standards, safety requirements, and left-hand vs. right-hand drive specifications. Some countries also have restrictions on modified vehicles. We provide detailed guidance on these restrictions during the consultation phase."
                },
                {
                  question: "How are import duties and taxes calculated?",
                  answer: "Import duties and taxes are typically calculated based on the vehicle's value, age, engine size, and emission levels. Each country has its own formula and rates. We provide comprehensive cost estimates including all duties and taxes before proceeding with any import to avoid surprises."
                },
                {
                  question: "Do you provide insurance during shipping?",
                  answer: "Yes, we offer comprehensive insurance coverage for all vehicles during the shipping process. This covers potential damage during loading, transit, and unloading. The insurance cost is typically 1-2% of the declared vehicle value and is included in our service package."
                },
                {
                  question: "Can you help with vehicle registration after import?",
                  answer: "Yes, we offer post-import services including assistance with local registration, inspection coordination, and any required modifications to meet local regulations. Our goal is to provide end-to-end service until the vehicle is fully registered and ready for use."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 text-primary-foreground/80">
              Contact our team today to discuss your car import or export needs. We're here to make the process smooth and hassle-free.
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

export default ServicesPage;
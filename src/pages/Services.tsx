import { Building, Presentation, CheckCircle, Home, Building2, Factory, ChartBar, FileSearch, Eye, Wrench, Shield, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const constructionServices = [
    {
      icon: Home,
      title: "Residential Construction",
      description: "Custom homes, apartments, and residential complexes built to the highest standards",
      features: ["Custom Home Design", "Apartment Complexes", "Villa Projects", "Residential Renovations"]
    },
    {
      icon: Building2,
      title: "Commercial Construction", 
      description: "Office buildings, retail spaces, and commercial complexes for modern business needs",
      features: ["Office Buildings", "Retail Centers", "Shopping Complexes", "Corporate Campuses"]
    },
    {
      icon: Factory,
      title: "Industrial Construction",
      description: "Manufacturing facilities, warehouses, and industrial infrastructure projects",
      features: ["Manufacturing Plants", "Warehouses", "Industrial Parks", "Infrastructure Projects"]
    }
  ];

  const consultancyServices = [
    {
      icon: ChartBar,
      title: "Project Management",
      description: "End-to-end project management ensuring timely delivery and quality outcomes",
      features: ["Project Planning", "Resource Management", "Timeline Coordination", "Quality Control"]
    },
    {
      icon: FileSearch,
      title: "Feasibility Studies",
      description: "Comprehensive analysis to determine project viability and potential returns",
      features: ["Market Analysis", "Cost Assessment", "Risk Evaluation", "ROI Projections"]
    },
    {
      icon: Eye,
      title: "Site Supervision",
      description: "Professional oversight ensuring projects meet specifications and standards",
      features: ["Quality Inspections", "Progress Monitoring", "Safety Compliance", "Technical Guidance"]
    }
  ];

  const additionalServices = [
    {
      icon: Wrench,
      title: "Maintenance Services",
      description: "Ongoing maintenance and support for completed projects",
      features: ["Preventive Maintenance", "Repair Services", "Facility Management", "Emergency Support"]
    },
    {
      icon: Shield,
      title: "Safety Consulting",
      description: "Comprehensive safety planning and implementation for construction sites",
      features: ["Safety Audits", "Training Programs", "Compliance Monitoring", "Risk Assessment"]
    },
    {
      icon: Clock,
      title: "Emergency Services",
      description: "24/7 emergency response for critical construction and infrastructure issues",
      features: ["Emergency Repairs", "Disaster Response", "Urgent Consultations", "Crisis Management"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive construction and consultancy solutions designed to bring your vision to life. 
            From initial planning to final execution, we provide expert services across all project phases.
          </p>
        </div>
      </section>

      {/* Construction Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Building className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Construction Services</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete construction solutions from residential homes to large-scale industrial projects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {constructionServices.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-corporate transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-corporate rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-center">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultancy Services */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Presentation className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Consultancy Services</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert guidance and strategic planning to ensure your project's success from concept to completion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {consultancyServices.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-corporate transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-corporate rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-center">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <CheckCircle className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Additional Services</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support services to ensure the long-term success and safety of your projects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-corporate transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-corporate rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-center">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-gradient-corporate text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              A systematic approach ensuring quality delivery at every stage
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Consultation</h3>
              <p className="text-blue-100 text-sm">Initial discussion and requirement analysis</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Planning</h3>
              <p className="text-blue-100 text-sm">Detailed project planning and design</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Execution</h3>
              <p className="text-blue-100 text-sm">Professional implementation with quality control</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Delivery</h3>
              <p className="text-blue-100 text-sm">Project completion and ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and receive a customized quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Request a Quote
            </Button>
            <Button size="lg" variant="outline">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
import { ArrowRight, Building2, Users, Trophy, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-construction.jpg";
import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectIndustrial from "@/assets/project-industrial.jpg";
import { Building, Presentation, CheckCircle } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Building,
      title: "Construction Services",
      description: "Complete construction solutions from residential to commercial projects",
      features: ["Residential Construction", "Commercial Buildings", "Industrial Projects", "Infrastructure Development"]
    },
    {
      icon: Presentation,
      title: "Consultancy Services", 
      description: "Expert guidance and strategic planning for your construction needs",
      features: ["Project Management", "Feasibility Studies", "Site Supervision", "Technical Consultancy"]
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Rigorous quality control ensuring exceptional standards",
      features: ["Quality Inspections", "Material Testing", "Safety Compliance", "Progress Monitoring"]
    }
  ];

  const projects = [
    {
      title: "Pinnacle Residency",
      location: "Mumbai, Maharashtra",
      completionDate: "March 2024",
      category: "Residential",
      description: "Luxury residential complex with modern amenities and sustainable design features.",
      image: projectResidential
    },
    {
      title: "Corporate Hub",
      location: "Bangalore, Karnataka", 
      completionDate: "January 2024",
      category: "Commercial",
      description: "State-of-the-art office complex designed for modern business requirements.",
      image: projectCommercial
    },
    {
      title: "Industrial Complex",
      location: "Chennai, Tamil Nadu",
      completionDate: "November 2023", 
      category: "Industrial",
      description: "Large-scale manufacturing facility with advanced infrastructure capabilities.",
      image: projectIndustrial
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "100+", label: "Expert Team" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20 mb-6">
              🏗️ Building Tomorrow's Landmarks
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Shaping Urban Skylines with 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500"> Precision and Expertise</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Trusted partners for construction excellence and strategic consultancy across India
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="group">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="glass" className="text-white border-white/30">
              Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-subtle relative">
        <div className="absolute inset-0 bg-gradient-glow opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-card rounded-2xl p-6 shadow-corporate hover:shadow-float transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-corporate-blue-dark bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                  <div className="text-muted-foreground font-semibold text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Urban Pinnacle</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 15 years of experience in the construction and consultancy industry, 
              Urban Pinnacle has established itself as a trusted partner for delivering 
              exceptional projects. We combine innovative design, superior craftsmanship, 
              and strategic planning to create structures that stand the test of time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center bg-gradient-card border-0 shadow-corporate hover:shadow-float hover:-translate-y-2 transition-all duration-300 group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Our skilled professionals bring decades of combined experience to every project.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-card border-0 shadow-corporate hover:shadow-float hover:-translate-y-2 transition-all duration-300 group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">Client-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We prioritize clear communication and collaboration throughout every project.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-card border-0 shadow-corporate hover:shadow-float hover:-translate-y-2 transition-all duration-300 group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">Quality Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Rigorous quality standards ensure every project meets the highest expectations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive construction and consultancy services designed to bring your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Recent Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing our latest completed projects across various sectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          <div className="text-center">
            <Button variant="glass" size="lg" className="group">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-corporate text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss how we can bring your construction and consultancy needs to life with our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 group">
              <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Call Now
            </Button>
            <Button size="lg" variant="glass" className="text-white border-white/30 hover:bg-white/10 group">
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Send Message
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

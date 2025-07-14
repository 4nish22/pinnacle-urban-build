import { useState } from "react";
import { Filter, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/ProjectCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectIndustrial from "@/assets/project-industrial.jpg";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Residential", "Commercial", "Industrial", "Consultancy"];

  const projects = [
    {
      title: "Pinnacle Residency",
      location: "Mumbai, Maharashtra",
      completionDate: "March 2024",
      category: "Residential",
      description: "Luxury residential complex with modern amenities and sustainable design features.",
      image: projectResidential,
      details: "350 units, 15 floors, green building certified"
    },
    {
      title: "Corporate Hub",
      location: "Bangalore, Karnataka", 
      completionDate: "January 2024",
      category: "Commercial",
      description: "State-of-the-art office complex designed for modern business requirements.",
      image: projectCommercial,
      details: "2.5 million sq ft, LEED certified, 30 floors"
    },
    {
      title: "Industrial Complex",
      location: "Chennai, Tamil Nadu",
      completionDate: "November 2023", 
      category: "Industrial",
      description: "Large-scale manufacturing facility with advanced infrastructure capabilities.",
      image: projectIndustrial,
      details: "50 acre complex, automated systems, eco-friendly design"
    },
    {
      title: "Skyline Towers",
      location: "Delhi, NCR",
      completionDate: "September 2023",
      category: "Residential",
      description: "Twin tower residential project with premium amenities and city views.",
      image: projectResidential,
      details: "500 units, 25 floors each, premium location"
    },
    {
      title: "Tech Park",
      location: "Hyderabad, Telangana",
      completionDate: "July 2023",
      category: "Commercial",
      description: "Modern technology park housing multiple IT companies.",
      image: projectCommercial,
      details: "3 million sq ft, smart building features, 40% green space"
    },
    {
      title: "Metro Station Development",
      location: "Pune, Maharashtra",
      completionDate: "May 2023",
      category: "Consultancy",
      description: "Strategic consultancy for metro station construction and integration.",
      image: projectIndustrial,
      details: "5 stations, integrated transport hub, public infrastructure"
    },
    {
      title: "Garden Homes",
      location: "Gurgaon, Haryana",
      completionDate: "March 2023",
      category: "Residential", 
      description: "Eco-friendly residential community with extensive green spaces.",
      image: projectResidential,
      details: "200 villas, 60% green cover, solar powered"
    },
    {
      title: "Manufacturing Hub",
      location: "Gujarat, India",
      completionDate: "December 2022",
      category: "Industrial",
      description: "State-of-the-art manufacturing facility for automotive components.",
      image: projectIndustrial,
      details: "100 acre facility, Industry 4.0 ready, zero discharge"
    },
    {
      title: "Shopping Complex",
      location: "Kolkata, West Bengal",
      completionDate: "October 2022",
      category: "Commercial",
      description: "Multi-level shopping and entertainment complex in prime location.",
      image: projectCommercial,
      details: "1.2 million sq ft, 300 stores, entertainment zone"
    }
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-30" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-white border border-white/30 mb-6">
              🏗️ Our Portfolio
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">Our Projects</h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Explore our portfolio of successfully completed projects across residential, commercial, 
            and industrial sectors. Each project represents our commitment to quality and innovation.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-corporate text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50M+</div>
              <div className="text-blue-100">Sq Ft Constructed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Cities Covered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">99%</div>
              <div className="text-blue-100">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">Filter by Category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-200"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">
              {selectedCategory === "All" ? "All Projects" : `${selectedCategory} Projects`}
            </h2>
            <p className="text-muted-foreground">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="group">
                <ProjectCard {...project} />
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm text-muted-foreground">{project.details}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No projects found in the {selectedCategory} category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Categories Overview */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Project Categories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We specialize in diverse project types, bringing expertise to every sector
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-card rounded-lg shadow-soft hover:shadow-corporate transition-shadow">
              <div className="w-16 h-16 bg-gradient-corporate rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <h3 className="font-semibold mb-2">Residential</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Luxury homes, apartments, and residential complexes
              </p>
              <p className="text-lg font-bold text-primary">
                {projects.filter(p => p.category === "Residential").length} Projects
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg shadow-soft hover:shadow-corporate transition-shadow">
              <div className="w-16 h-16 bg-gradient-corporate rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <h3 className="font-semibold mb-2">Commercial</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Office buildings, retail spaces, and business complexes
              </p>
              <p className="text-lg font-bold text-primary">
                {projects.filter(p => p.category === "Commercial").length} Projects
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg shadow-soft hover:shadow-corporate transition-shadow">
              <div className="w-16 h-16 bg-gradient-corporate rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <h3 className="font-semibold mb-2">Industrial</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Manufacturing facilities and industrial infrastructure
              </p>
              <p className="text-lg font-bold text-primary">
                {projects.filter(p => p.category === "Industrial").length} Projects
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg shadow-soft hover:shadow-corporate transition-shadow">
              <div className="w-16 h-16 bg-gradient-corporate rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <h3 className="font-semibold mb-2">Consultancy</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Strategic planning and project management services
              </p>
              <p className="text-lg font-bold text-primary">
                {projects.filter(p => p.category === "Consultancy").length} Projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Project Today</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to bring your vision to life? Contact us to discuss your project requirements
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Discuss Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
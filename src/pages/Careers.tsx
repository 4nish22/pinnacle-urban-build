import { useState } from "react";
import { Users, Briefcase, GraduationCap, Heart, Upload, CheckCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Careers = () => {
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    coverLetter: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted Successfully!",
      description: "We'll review your application and get back to you soon.",
    });
    setApplicationData({ name: "", email: "", phone: "", position: "", experience: "", coverLetter: "" });
  };

  const benefits = [
    {
      icon: Briefcase,
      title: "Competitive Compensation",
      description: "Industry-leading salaries with performance-based bonuses and annual reviews"
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Continuous training programs, certifications, and skill development opportunities"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, wellness programs, and work-life balance"
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Collaborative environment with team outings, events, and recognition programs"
    }
  ];

  const openPositions = [
    {
      title: "Senior Project Manager",
      department: "Construction",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "5-8 years",
      description: "Lead large-scale construction projects from planning to execution with a focus on quality and timely delivery."
    },
    {
      title: "Structural Engineer",
      department: "Engineering",
      location: "Bangalore, Karnataka",
      type: "Full-time", 
      experience: "3-5 years",
      description: "Design and analyze structural systems for commercial and residential projects using advanced engineering software."
    },
    {
      title: "Architecture Designer",
      department: "Design",
      location: "Delhi, NCR",
      type: "Full-time",
      experience: "2-4 years",
      description: "Create innovative architectural designs and collaborate with engineering teams to bring concepts to life."
    },
    {
      title: "Site Supervisor",
      department: "Operations",
      location: "Chennai, Tamil Nadu",
      type: "Full-time",
      experience: "4-6 years",
      description: "Oversee daily construction activities, ensure safety compliance, and maintain quality standards on-site."
    },
    {
      title: "Business Development Executive",
      department: "Sales",
      location: "Hyderabad, Telangana",
      type: "Full-time",
      experience: "2-3 years",
      description: "Identify new business opportunities, build client relationships, and drive revenue growth in assigned territories."
    },
    {
      title: "Quality Control Engineer",
      department: "Quality Assurance",
      location: "Pune, Maharashtra",
      type: "Full-time",
      experience: "3-5 years",
      description: "Implement quality control processes, conduct inspections, and ensure projects meet industry standards."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-30" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-white border border-white/30 mb-6">
              🚀 Join Our Team
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">Join Our Team</h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Build your career with Urban Pinnacle. We're looking for passionate professionals 
            who share our commitment to excellence and innovation in construction and consultancy.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Urban Pinnacle?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in investing in our people because they are the foundation of our success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center bg-gradient-card border-0 shadow-corporate hover:shadow-float hover:-translate-y-2 transition-all duration-300 group">
                <CardHeader>
                  <div className="relative mx-auto w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                    <benefit.icon className="w-10 h-10 text-white" />
                    <div className="absolute inset-0 bg-gradient-glow rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 bg-gradient-corporate text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Culture</h2>
              <div className="space-y-4 text-blue-100">
                <p className="text-lg">
                  At Urban Pinnacle, we foster a culture of innovation, collaboration, and continuous growth. 
                  Our team members are empowered to take ownership of their work and contribute to meaningful projects.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span>Innovation-driven environment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span>Collaborative team approach</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span>Professional development opportunities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span>Work-life balance priority</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-8 text-center">
              <Users className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Join 100+ Professionals</h3>
              <p className="text-blue-100">
                Become part of a diverse team that's shaping the future of construction and consultancy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Open Positions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore exciting career opportunities across various departments and locations
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-corporate transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold">{position.title}</h3>
                        <Badge variant="secondary">{position.department}</Badge>
                        <Badge variant="outline">{position.type}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">{position.description}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{position.experience} experience</span>
                        </div>
                      </div>
                    </div>
                    <div className="lg:text-right">
                      <Button>Apply Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Apply for a Position</h2>
              <p className="text-lg text-muted-foreground">
                Submit your application and join our team of construction professionals
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Job Application Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={applicationData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={applicationData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={applicationData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="position" className="block text-sm font-medium mb-2">
                        Position Applied For *
                      </label>
                      <Input
                        id="position"
                        name="position"
                        value={applicationData.position}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter position title"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium mb-2">
                      Years of Experience *
                    </label>
                    <Input
                      id="experience"
                      name="experience"
                      value={applicationData.experience}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. 5 years"
                    />
                  </div>

                  <div>
                    <label htmlFor="coverLetter" className="block text-sm font-medium mb-2">
                      Cover Letter *
                    </label>
                    <Textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={applicationData.coverLetter}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Resume/CV *
                    </label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">
                        Click to upload your resume or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        PDF, DOC, DOCX (Max 5MB)
                      </p>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
import { Users, Target, Eye, Award, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const team = [
    {
      name: "Rajesh Kumar",
      position: "CEO & Founder",
      experience: "20+ years",
      specialty: "Strategic Planning"
    },
    {
      name: "Priya Sharma",
      position: "Chief Engineer",
      experience: "15+ years", 
      specialty: "Structural Engineering"
    },
    {
      name: "Amit Patel",
      position: "Project Manager",
      experience: "12+ years",
      specialty: "Project Execution"
    },
    {
      name: "Sneha Reddy",
      position: "Design Head",
      experience: "10+ years",
      specialty: "Architectural Design"
    }
  ];

  const milestones = [
    { year: "2008", event: "Company Founded", description: "Urban Pinnacle established with a vision for excellence" },
    { year: "2012", event: "First Major Project", description: "Completed first large-scale commercial complex" },
    { year: "2015", event: "Consultancy Division", description: "Expanded services to include strategic consultancy" },
    { year: "2018", event: "500+ Projects", description: "Achieved milestone of 500 completed projects" },
    { year: "2020", event: "Digital Transformation", description: "Implemented cutting-edge project management systems" },
    { year: "2024", event: "Industry Recognition", description: "Received multiple awards for construction excellence" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Urban Pinnacle</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over 15 years, Urban Pinnacle Construction and Consultancy has been at the forefront 
            of transforming architectural visions into reality, delivering excellence through innovation, 
            expertise, and unwavering commitment to quality.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-corporate border-0">
              <CardHeader>
                <Target className="w-16 h-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver exceptional construction and consultancy services that exceed client 
                  expectations while contributing to sustainable urban development and community growth.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-corporate border-0">
              <CardHeader>
                <Eye className="w-16 h-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and innovative construction company, shaping skylines 
                  and communities across India while setting new standards for quality and excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-corporate border-0">
              <CardHeader>
                <Award className="w-16 h-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Integrity, Innovation, Quality, Safety, and Client Satisfaction drive everything we do. 
                  These core values guide our decisions and shape our company culture.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-gradient-corporate text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Track Record</h2>
            <p className="text-xl text-blue-100">Numbers that speak to our experience and success</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Expert Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals who lead Urban Pinnacle with vision, expertise, and dedication
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-corporate transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-corporate rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.position}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">{member.experience}</p>
                  <p className="text-sm">{member.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones that have shaped Urban Pinnacle into the company we are today
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-primary rounded-full" />
                    {index < milestones.length - 1 && <div className="w-0.5 h-16 bg-border mt-2" />}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                      <h3 className="text-lg font-semibold">{milestone.event}</h3>
                    </div>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Headquarters</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Located in the heart of the business district, our modern headquarters 
                serves as the central hub for all our operations across India.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Corporate Office</p>
                    <p className="text-muted-foreground">
                      Business Park, Sector 21<br />
                      Gurugram, Haryana 122016
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-8 text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Interactive map coming soon</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
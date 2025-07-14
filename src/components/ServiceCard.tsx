import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => {
  return (
    <Card className="h-full bg-gradient-card border-0 shadow-corporate hover:shadow-float hover:-translate-y-2 transition-all duration-300 group backdrop-blur-sm">
      <CardHeader className="text-center pb-4">
        <div className="relative mx-auto w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
          <Icon className="w-10 h-10 text-white" />
          <div className="absolute inset-0 bg-gradient-glow rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-muted-foreground mb-6 text-center leading-relaxed">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm font-medium">
              <div className="w-2 h-2 bg-gradient-hero rounded-full mr-3 flex-shrink-0 shadow-sm" />
              <span className="text-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
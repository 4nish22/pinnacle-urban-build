import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

interface ProjectCardProps {
  title: string;
  location: string;
  completionDate: string;
  category: string;
  description: string;
  image: string;
}

const ProjectCard = ({ title, location, completionDate, category, description, image }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden bg-gradient-card border-0 shadow-corporate hover:shadow-float hover:-translate-y-2 transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <Badge className="absolute top-4 left-4 bg-gradient-hero text-white border-0 shadow-soft font-semibold px-3 py-1">
          {category}
        </Badge>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-6 line-clamp-2 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2 font-medium">
            <MapPin size={14} className="text-primary" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <Calendar size={14} className="text-primary" />
            <span>{completionDate}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
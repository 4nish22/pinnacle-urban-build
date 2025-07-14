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
    <Card className="overflow-hidden hover:shadow-corporate transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
          {category}
        </Badge>
      </div>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin size={12} />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={12} />
            <span>{completionDate}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
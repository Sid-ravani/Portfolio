import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HARDCODED_PROJECTS = [
  {
    id: 1,
    title: "Wooden Toy Assembly",
    description: "A complete mechanical design of interactive wooden toys with moving parts.",
    fullDescription: "This project involved the design and modeling of various wooden toys using SolidWorks. Each component was carefully toleranced for manufacturing. The assembly includes multiple interactive mechanisms to engage children while ensuring safety and durability.",
    imageUrl: "https://images.unsplash.com/photo-1537462713205-e5126c884606?w=800&q=80",
    tech: ["SolidWorks", "CAD Modeling", "Tolerancing"],
    link: "#"
  },
  {
    id: 2,
    title: "Performance Tire Rim",
    description: "Advanced modeling of a lightweight, high-strength aluminum tire rim.",
    fullDescription: "Designed for both aesthetics and performance, this tire rim was modeled using Fusion 360. The design focuses on optimizing the weight-to-strength ratio using generative design principles and finite element analysis (FEA) to ensure structural integrity under load.",
    imageUrl: "https://images.unsplash.com/photo-1581092921461-eab62e97a782?w=800&q=80",
    tech: ["Fusion 360", "FEA", "Generative Design"],
    link: "#"
  },
  {
    id: 3,
    title: "Robotic Arm Control System",
    description: "Embedded system design for a 6-axis robotic arm with precise motion control.",
    fullDescription: "Implemented a complete control system for a robotic arm using Embedded C and Arduino. The project included inverse kinematics calculations for precise positioning and a custom Python GUI for remote operation and monitoring.",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    tech: ["Embedded C", "Python", "Kinematics"],
    link: "#"
  }
];

export default function ProjectDetail() {
  const params = useParams();
  const id = parseInt(params.id || "");
  const project = HARDCODED_PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Link href="/projects">
          <Button variant="outline">Back to Projects</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/projects">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full aspect-video object-cover rounded-2xl shadow-xl mb-12"
          />

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map(t => (
              <span key={t} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {t}
              </span>
            ))}
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {project.fullDescription}
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Button size="lg" asChild className="gap-2">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project Files <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

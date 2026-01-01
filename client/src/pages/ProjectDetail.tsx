import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const HARDCODED_PROJECTS = [
  {
    id: 1,
    title: "Wooden Toy Assembly",
    description: "A complete mechanical design of interactive wooden toys with moving parts.",
    fullDescription: "This project involved the design and modeling of various wooden toys using SolidWorks. Each component was carefully toleranced for manufacturing. The assembly includes multiple interactive mechanisms to engage children while ensuring safety and durability.",
    images: [
      "https://images.unsplash.com/photo-1537462713205-e5126c884606?w=800&q=80",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&q=80",
      "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=800&q=80"
    ],
    tech: ["SolidWorks", "CAD Modeling", "Tolerancing"],
    link: "#"
  },
  {
    id: 2,
    title: "Performance Tire Rim",
    description: "Advanced modeling of a lightweight, high-strength aluminum tire rim.",
    fullDescription: "Designed for both aesthetics and performance, this tire rim was modeled using Fusion 360. The design focuses on optimizing the weight-to-strength ratio using generative design principles and finite element analysis (FEA) to ensure structural integrity under load.",
    images: [
      "https://images.unsplash.com/photo-1581092921461-eab62e97a782?w=800&q=80",
      "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=800&q=80",
      "https://images.unsplash.com/photo-1486497395442-885e219f8651?w=800&q=80"
    ],
    tech: ["Fusion 360", "FEA", "Generative Design"],
    link: "#"
  },
  {
    id: 3,
    title: "Robotic Arm Control System",
    description: "Embedded system design for a 6-axis robotic arm with precise motion control.",
    fullDescription: "Implemented a complete control system for a robotic arm using Embedded C and Arduino. The project included inverse kinematics calculations for precise positioning and a custom Python GUI for remote operation and monitoring.",
    images: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      "https://images.unsplash.com/photo-1518314916301-715d7a63527b?w=800&q=80"
    ],
    tech: ["Embedded C", "Python", "Kinematics"],
    link: "#"
  }
];

export default function ProjectDetail() {
  const params = useParams();
  const id = parseInt(params.id || "");
  const project = HARDCODED_PROJECTS.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(project?.images[0] || "");

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
          <div className="space-y-4 mb-12">
            <div className="aspect-video relative overflow-hidden rounded-2xl shadow-xl">
              <img 
                src={activeImage} 
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {project.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === img ? "border-primary scale-95" : "border-transparent hover:border-primary/50"
                  }`}
                >
                  <img src={img} alt={`${project.title} ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

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

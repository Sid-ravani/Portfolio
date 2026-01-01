import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const HARDCODED_PROJECTS = [
  {
    id: 1,
    title: "MDF Mechanical Lock Box",
    description: "The mechanical lock box works on a Gear-Driven Iris mechanism.",
    fullDescription: "This project involves designing and fabricating a mechanical lock box made from MDF material, specifically aimed for kids as a fun and educational product. The lock box uses an Iris mechanism - where multiple leaves slide radially to open and close the lid in a smooth circular motion. The mechanical lock box works on a Gear-Driven Iris mechanism. The key plays a crucial role in this system — the gear remains locked and cannot rotate unless the key is inserted. When the correct key is inserted into the gear, it allows rotation, causing the iris leaves to move simultaneously and open the box. ",
    images: [
      "/lockbox_design.png",
      "/lockbox.gif"
    ],
    tech: ["SolidWorks", "CAD Modeling","Laser cutting"],
    link: "#"
  },
  {
    id: 2,
    title: "Engine Piston Keychain for Car Enthusiasts",
    description: "Interactive MDF keychain with a motor-inspired design",
    fullDescription: "Interactive MDF keychain with a motor-inspired design, laser-cut to resemble a car piston. When the gears are turned, the piston mimics the motion of a real engine, making it a unique piece for automotive enthusiasts. Perfect for those who love cars and mechanical engineering.",
    images: [
      "/keychain.gif",
      "/keychain_design.png"
    ],
    tech: ["SolidWorks", "CAD Modeling", "Laser Cutting"],
    link: "#"
  },
  {
    id: 3,
    title: "Zoetrope Walking Animation Model",
    description: "Intermittent motion model powered by a Geneva wheel mechanism.",
    fullDescription: "This project showcases a mechanical animation model powered by a Geneva wheel mechanism. By using a Geneva wheel the zoetrope can be rotated in steps (frame by frame). The intermittent motion allows the animation to be viewable with the naked eye due to the persistence of vision, without the need for strobes or cameras.",
    images: [
      "/zoetrope_design.png",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80"
    ],
    tech: ["SolidWorks", "CAD Modeling", "Laser Cutting"],
    link: "#"
  },
  {
    id: 4,
    title: "Sample Project",
    description: "Embedded system design for a 6-axis robotic arm with precise motion control.",
    fullDescription: "Implemented a complete control system for a robotic arm using Embedded C and Arduino. The project included inverse kinematics calculations for precise positioning and a custom Python GUI for remote operation and monitoring.",
    images: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
    ],
    tech: ["Embedded C", "Python", "Kinematics"],
    link: "#"
  },
];

export default function ProjectDetail() {
  const params = useParams();
  const id = parseInt(params.id || "");
  const project = HARDCODED_PROJECTS.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(project?.images?.[0] || "");

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
            <div className="aspect-video relative overflow-hidden rounded-2xl shadow-xl bg-muted">
              <img 
                src={activeImage} 
                alt={project.title}
                className="w-full h-full object-contain transition-all duration-500"
              />
            </div>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {project.images?.map((img, idx) => (
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

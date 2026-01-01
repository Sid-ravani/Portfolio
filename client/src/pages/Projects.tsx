import { motion } from "framer-motion";
import { HARDCODED_PROJECTS } from "./ProjectDetail";
import { ProjectCard } from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Featured Projects</h1>
          <p className="text-xl text-muted-foreground">
            A collection of my engineering projects, designs, and prototypes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {HARDCODED_PROJECTS.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={{
                ...project,
                imageUrl: project.images[0]
              } as any} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

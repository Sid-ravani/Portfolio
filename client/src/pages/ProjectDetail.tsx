import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PROJECTS } from "@/data/project.ts";



export default function ProjectDetail() {
  const params = useParams();
  const id = parseInt(params.id || "");
  const project = PROJECTS.find(p => p.id === id);
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

  // const project = HARDCODED_PROJECTS.find((p) => p.id === id);
//  console.log(project.fullDescription.split("\n\n"));

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/projects">
          <Button
            variant="ghost"
            className="mb-8 gap-2 px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
          >
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
                    activeImage === img
                      ? "border-black scale-95"
                      : "border-transparent hover:border-black/50"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${project.title} ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-black/10 text-black rounded-full text-sm font-medium"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="text-xl text-muted-foreground leading-relaxed mb-8 space-y-6">
              {project.fullDescription.map((para, idx) => (
                <p
                  key={idx}
                  className="text-xl text-muted-foreground leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

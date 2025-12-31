import { motion } from "framer-motion";
import { ArrowRight, Cpu, Settings, PenTool } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Home() {
  const skills = [
    { icon: Settings, label: "Mechanical Design", desc: "CAD modeling & simulation" },
    { icon: Cpu, label: "Systems Engineering", desc: "Complex system integration" },
    { icon: PenTool, label: "Prototyping", desc: "Rapid fabrication & testing" },
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 tech-grid opacity-30" />
        <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Siddharth Ravani
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                A Mechanical Engineering student with a huge interest in mechanical design and modeling. I'm always learning on the job, and spend my free time on side projects that earn me new skills. I am always working to better myself as an engineer and person. I work a lot with CAD tools like SolidWorks, Fusion 360 and AutoCAD to design things like Wodden Toys, Tire rim, and even full assemblies.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/projects">
                  <Button size="lg" className="h-12 px-8 text-base">
                    View My Work <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <skill.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">{skill.label}</h3>
                <p className="text-muted-foreground">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                {/* HTML comment for Unsplash: engineer working on blueprint */}
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000&auto=format&fit=crop"
                  alt="Engineering Workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold mb-6">About Me</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  With a solid foundation in mechanical principles and a keen eye for detail, I dedicate my work to creating robust and efficient mechanical systems.
                </p>
                <p>
                  My experience spans from CAD design and thermal analysis to rapid prototyping and manufacturing support. I believe in the power of engineering to solve real-world challenges and improve lives.
                </p>
                <p>
                  When I'm not designing in SolidWorks or AutoCAD, you can find me tinkering with 3D printers or exploring the latest developments in robotics.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

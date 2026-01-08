import { motion } from "framer-motion";
import { ArrowRight, Settings, Factory, Code2, Mail, Phone, FileText } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export default function Home() {
  const skills = [
    { icon: Settings, label: "Mechanical Design", desc: "SolidWorks, Autodesk Fusion, AutoCAD" },
    { icon: Code2, label: "Programming", desc: "Embedded C, C++, Python" },
    { icon: Factory, label: "Manufacturing", desc: "3D printing, Laser Cutting" },
    //{ icon: Code2, label: "Programming", desc: "Embedded C, C++, Python" },
  ];

  const words = [
    {
      text: "Addicted",
    },
    {
      text: "to",
    },
    {
      text: "Bettering",
    },
    {
      text: "Myself",
      //className: "text-blue-500 dark:text-blue-500",
    },
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
              <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Siddharth Ravani
              </h1>
              <div className="flex pb-2">
                <TypewriterEffect words={words} />
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/projects">
                  <Button
                    size="lg"
                    className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 font-bold"
                  >
                    View My Work <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <a href="/resume.pdf" download="Siddharth_Ravani_Resume.pdf">
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 font-bold"
                  >
                    <FileText className="w-4 h-4" /> Download Resume
                  </Button>
                </a>
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
                className="bg-card p-8 rounded-2xl border border-border/50 shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center mb-6 text-black">
                  <skill.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">
                  {skill.label}
                </h3>
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
                <img
                  src="/Sid-ravani.png"
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
              <h2 className="font-display text-3xl font-bold mb-6">
                💬 About Me
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
                <p>
                  Hey, I’m Siddharth Ravani — a mechanical engineering student
                  who tends to overthink how things are designed, built, and why
                  they work the way they do. This space exists because that
                  habit never really switched off, and writing things down felt
                  better than keeping it all in my head.
                </p>
                <p>
                  Following that curiosity led me straight into design. Using
                  SolidWorks and Autodesk Fusion 360, I spend most of my time
                  turning rough concepts into models, refining details, testing
                  what works, and occasionally wondering why something almost
                  worked.
                </p>
                <p>
                  That cycle of trial, error, and small wins has shaped more
                  than just my technical skills. Every project teaches me
                  something new. I’m still learning, still adjusting, and
                  constantly working to better myself as an engineer (and
                  person) along the way.
                </p>
              </div>

              <div className="space-y-4 border-t pt-8">
                <h3 className="font-display font-bold text-xl mb-4">
                  Get in touch!
                </h3>
                <div className="flex flex-col gap-3">
                  <a
                    href="mailto:sidd.ravani@gmail.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-black transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-black" />
                    </div>
                    sidd.ravani@gmail.com
                  </a>
                  <a
                    href="tel:+919361099087"
                    className="flex items-center gap-3 text-muted-foreground hover:text-black transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-black" />
                    </div>
                    +91 9361099087
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

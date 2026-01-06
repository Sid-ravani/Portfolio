import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="font-display font-semibold text-lg">Siddharth Ravani</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Building the future, one project at a time.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/Sid-ravani" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-black"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sid-ravani" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-black"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:sidd.ravani@gmail.com" 
              className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-black"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/20 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Siddharth Ravani. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

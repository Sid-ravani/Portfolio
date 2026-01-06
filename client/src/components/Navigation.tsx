import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { LogIn, LogOut, Settings, Wrench } from "lucide-react";

export function Navigation() {
  const [location] = useLocation();
  const { user, logout } = useAuth();

  const links = [
    { href: "/", label: "About" },
    { href: "/projects", label: "Projects" },
  ];

  const linkedinUrl = "https://www.linkedin.com/in/sid-ravani";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center">
            <Wrench className="w-7 h-7 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xl hidden sm:inline-block tracking-tight">
            Sid.ravani
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-bold transition-colors hover:text-black relative px-2 py-1",
                location === link.href ? "text-black" : "text-muted-foreground"
              )}
            >
              {link.label}
              {location === link.href && (
                <span className="absolute inset-x-0 -bottom-[1.2rem] h-[2px] bg-black rounded-full" />
              )}
            </Link>
          ))}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] rounded-full"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </header>
  );
}

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Navbar() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav 
      className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <motion.span 
          className="text-xl font-bold"
          whileHover={{ scale: 1.05 }}
        >
          Chaitanya
        </motion.span>

        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => scrollToSection("about")}>About</Button>
          <Button variant="ghost" onClick={() => scrollToSection("education")}>Education</Button>
          <Button variant="ghost" onClick={() => scrollToSection("skills")}>Skills</Button>
          <Button variant="ghost" onClick={() => scrollToSection("projects")}>Projects</Button>
          <Button variant="ghost" onClick={() => scrollToSection("contact")}>Contact</Button>
          <ModeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
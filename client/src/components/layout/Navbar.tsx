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
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            CT
          </motion.div>
          <motion.span 
            className="text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Chaitanya
          </motion.span>
        </motion.div>

        <div className="flex items-center gap-4">
          {[
            { text: "About", id: "about" },
            { text: "Education", id: "education" },
            { text: "Skills", id: "skills" },
            { text: "Projects", id: "projects" },
            { text: "Contact", id: "contact" }
          ].map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="relative overflow-hidden group"
              >
                <span className="relative z-10">{item.text}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </Button>
            </motion.div>
          ))}
          <ModeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
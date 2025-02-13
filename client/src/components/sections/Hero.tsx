import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useState, useRef } from "react";

export function Hero() {
  const [resumeFile, setResumeFile] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setResumeFile(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResumeClick = () => {
    if (resumeFile) {
      window.open(resumeFile);
    } else {
      fileInputRef.current?.click();
    }
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center bg-gradient-to-b from-background via-background/50 to-primary/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-space-grotesk text-primary"
        >
          👋 Hey there!
        </motion.h2>

        <motion.h1 
          className="text-4xl md:text-6xl font-bold font-space-grotesk bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          whileHover={{ scale: 1.02 }}
        >
          Chaitanya Thombare
        </motion.h1>

        <div className="text-xl md:text-2xl text-muted-foreground font-poppins h-32">
          <Typewriter
            options={{
              strings: [
                "I'm a Machine Learning enthusiast exploring AI.",
                "I build smart solutions with AI & ML.",
                "Tech explorer, AI developer, and freelancer."
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
              cursor: "|",
              wrapperClassName: "text-gradient-animated",
            }}
          />
        </div>

        <div className="flex gap-4 pt-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              onClick={scrollToProjects}
            >
              View Projects
              <motion.span
                className="ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              ref={fileInputRef}
              onChange={handleResumeUpload}
            />
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2"
              onClick={handleResumeClick}
            >
              {resumeFile ? "View Resume" : "Upload Resume"}
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
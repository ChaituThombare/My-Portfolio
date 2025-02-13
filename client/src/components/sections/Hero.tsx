import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.02 }}
        >
          Chaitanya Thombare
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Machine Learning Enthusiast | AI Developer | Tech Explorer | Freelancer
        </motion.p>

        <div className="flex gap-4 pt-4">
          <Button size="lg" className="group">
            View Projects
            <motion.span
              className="ml-2"
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </Button>
          <Button size="lg" variant="outline">
            Download Resume
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

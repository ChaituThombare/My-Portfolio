import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

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
            <Button size="lg" className="group bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
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
            <Button size="lg" variant="outline" className="border-2">
              Download Resume
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
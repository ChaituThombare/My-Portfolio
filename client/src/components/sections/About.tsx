import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="space-y-8 max-w-full overflow-x-hidden"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl font-bold text-center font-space-grotesk 
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
            bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            variants={itemVariants}
          >
            <Card className="backdrop-blur-sm bg-background/60">
              <CardContent className="p-6">
                <motion.p 
                  variants={itemVariants}
                  className="text-lg leading-relaxed font-poppins"
                >
                  I'm a Computer Science Engineering student with a deep passion for Machine Learning, 
                  Artificial Intelligence, and emerging technologies. My journey in tech is driven by 
                  curiosity and a desire to create meaningful solutions.
                </motion.p>
                <motion.p 
                  variants={itemVariants}
                  className="text-lg leading-relaxed mt-4 font-poppins"
                >
                  When I'm not coding, I like to explore new technologies, listen to music, and enjoy gaming. 
                  My diverse interests help me maintain a creative and balanced approach to problem-solving.
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="flex flex-col items-center gap-4"
            variants={itemVariants}
          >
            <motion.div 
              className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary"
              animate={{
                borderColor: ["#4f46e5", "#7c3aed", "#2563eb"]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <motion.div
                className="absolute inset-2 rounded-full bg-background flex items-center justify-center"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-6xl">🤖</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
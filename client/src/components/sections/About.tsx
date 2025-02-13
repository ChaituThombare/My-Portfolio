import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold text-center 
          bg-gradient-to-r from-primary via-purple-500 to-blue-500 
          bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-sm bg-background/60">
              <CardContent className="p-6">
                <p className="text-lg leading-relaxed">
                  I'm a Computer Science Engineering student with a deep passion for Machine Learning, 
                  Artificial Intelligence, and emerging technologies. My journey in tech is driven by 
                  curiosity and a desire to create meaningful solutions.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  When I'm not coding, I like to explore new technologies, listen to music, and enjoy gaming. 
                  My diverse interests help me maintain a creative and balanced approach to problem-solving.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-primary to-purple-500"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
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
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
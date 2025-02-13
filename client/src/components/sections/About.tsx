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
        <h2 className="text-3xl font-bold text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <p className="text-lg leading-relaxed">
                  I'm a Computer Science Engineering student with a deep passion for Machine Learning, 
                  Artificial Intelligence, and emerging technologies. My journey in tech is driven by 
                  curiosity and a desire to create meaningful solutions.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  When I'm not coding, you might find me exploring new technologies or crafting 
                  sarcastic jokes about engineering! 😆
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
            <div className="w-64 h-64 rounded-full bg-gradient-to-r from-primary/20 to-purple-400/20 flex items-center justify-center">
              <div className="w-60 h-60 rounded-full bg-background flex items-center justify-center border-2 border-primary">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

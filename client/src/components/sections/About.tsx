import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ImageViewer } from "@/components/ui/image-viewer";

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
          className="text-4xl md:text-5xl font-bold text-center font-space-grotesk 
            dark:bg-gradient-to-r dark:from-rose-600 dark:via-purple-600 dark:to-blue-600
            bg-gradient-to-r from-[#020024] via-[#f7a44b] to-[#a0ff20]
            bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div variants={itemVariants}>
            <Card className="backdrop-blur-sm bg-background/60">
              <CardContent className="p-6">
                <motion.p variants={itemVariants} className="text-lg leading-relaxed font-poppins mb-4">
                  I'm a <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent font-semibold">Computer Science Engineering student</span> with 
                  a deep passion for <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent font-semibold">Machine Learning, 
                  Artificial Intelligence, and emerging technologies</span>. My journey is driven by curiosity and a desire 
                  to create impactful solutions.
                </motion.p>
                <motion.div variants={itemVariants} className="space-y-4">
                  <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">What I Do</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>I work on <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent font-medium">AI & ML projects</span> solving real-world problems</li>
                    <li>I'm skilled in <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-medium">Python, TensorFlow/Keras, and NumPy</span></li>
                    <li>I am always exploring new technologies to expand my expertise</li>
                  </ul>
                </motion.div>
                <motion.div variants={itemVariants} className="mt-6">
                  <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">Interests</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>🎧 Music that resonates deeply</li>
                    <li>🎮 Gaming for fun & problem-solving</li>
                    <li>🚀 Tech exploration to stay ahead</li>
                  </ul>
                </motion.div>
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
              <ImageViewer
                src="/Chaitanya.jpg"
                alt="Chaitanya Thombare"
                className="w-full h-full object-cover"
                fullSrc="/Chaitanya.jpg"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
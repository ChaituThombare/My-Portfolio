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
          className="text-4xl md:text-5xl font-bold text-center font-space-grotesk 
            bg-gradient-to-r from-rose-600 via-purple-600 to-blue-600 
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
                  a deep passion for <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent font-semibold">Machine Learning, Artificial Intelligence, 
                  and emerging technologies</span>. My journey in tech is driven by curiosity and a desire 
                  to create meaningful solutions.
                </motion.p>
                <motion.div variants={itemVariants} className="space-y-4">
                  <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">What I Do</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>I specialize in <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent font-medium">Machine Learning & AI</span>, working on projects that solve real-world problems.</li>
                    <li>I have experience with <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-medium">Python, TensorFlow/Keras, NumPy, and AI-driven development</span>.</li>
                    <li>I am continuously exploring new technologies and expanding my skill set.</li>
                  </ul>
                </motion.div>
                <motion.div variants={itemVariants} className="mt-6">
                  <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">Interests & Hobbies</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Exploring new technologies to stay updated with industry trends</li>
                    <li>Listening to music, especially deep and impactful tracks</li>
                    <li>Gaming as a way to unwind and sharpen problem-solving skills</li>
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
              <motion.img
                src="/Chaitanya.jpg"
                alt="Chaitanya Thombare"
                className="w-full h-full object-cover"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
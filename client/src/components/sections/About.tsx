import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

export function About() {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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
        className="space-y-8"
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
              className="relative w-64 h-64 rounded-full overflow-hidden"
              animate={{
                rotateZ: [0, 360],
                borderColor: ["#4f46e5", "#7c3aed", "#2563eb"]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                border: "4px solid"
              }}
            >
              {image ? (
                <motion.img
                  src={image}
                  alt="Profile"
                  className="absolute inset-2 rounded-full object-cover"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />
              ) : (
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
              )}
            </motion.div>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleImageUpload}
            />
            <motion.div variants={itemVariants}>
              <Button
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                className="mt-4"
              >
                {image ? "Change Photo" : "Upload Photo"}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
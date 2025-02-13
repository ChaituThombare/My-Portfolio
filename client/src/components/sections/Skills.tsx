import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { SiPython, SiCplusplus, SiTensorflow, 
         SiKeras, SiNumpy, SiPandas, SiMysql, SiMongodb, 
         SiGit } from "react-icons/si";

const skills = [
  { category: "Programming Languages", items: [
    { name: "Python", icon: SiPython },
    { name: "C++", icon: SiCplusplus },
  ]},
  { category: "Machine Learning & AI", items: [
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "Keras", icon: SiKeras },
    { name: "NumPy", icon: SiNumpy },
    { name: "Pandas", icon: SiPandas },
  ]},
  { category: "Databases", items: [
    { name: "MySQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
  ]},
  { category: "Tools", items: [
    { name: "Git/GitHub", icon: SiGit },
  ]},
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8 max-w-full overflow-x-hidden"
      >
        <motion.h2 
          className="text-3xl font-bold text-center 
            bg-gradient-to-r from-primary via-purple-500 to-blue-500 
            bg-clip-text text-transparent animate-gradient"
        >
          Skills & Tech Stack
        </motion.h2>

        <div className="grid gap-6">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1
              }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {category.items.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                        className="flex items-center gap-2 p-2"
                      >
                        <skill.icon className="w-6 h-6 text-primary" />
                        <span>{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
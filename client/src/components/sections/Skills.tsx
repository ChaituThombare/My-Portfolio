import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { SiPython, SiCplusplus, SiTensorflow,
         SiKeras, SiNumpy, SiPandas, SiMysql, SiMongodb,
         SiGit, SiC, SiScikitlearn, SiSqlite } from "react-icons/si";
import { DiJava } from "react-icons/di";

const skills = [
  { category: "Programming Languages", items: [
    { name: "Python", icon: SiPython },
    { name: "C++", icon: SiCplusplus },
    { name: "C", icon: SiC },
    { name: "Java", icon: DiJava },
  ]},
  { category: "Machine Learning & AI", items: [
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "Keras", icon: SiKeras },
    { name: "NumPy", icon: SiNumpy },
    { name: "Pandas", icon: SiPandas },
    { name: "scikit-learn", icon: SiScikitlearn },
  ]},
  { category: "Databases", items: [
    { name: "MySQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "SQLite", icon: SiSqlite },
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
        className="space-y-8 max-w-full overflow-hidden"
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center font-space-grotesk
            bg-gradient-to-r from-[#020024] via-[#f7a44b] to-[#a0ff20]
            bg-clip-text text-transparent"
        >
          Skills & Tech Stack
        </motion.h2>

        <div className="grid gap-6 overflow-hidden">
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
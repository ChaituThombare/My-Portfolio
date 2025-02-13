import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { SiPython, SiCplusplus, SiJavascript, SiTensorflow, 
         SiKeras, SiNumpy, SiPandas, SiMysql, SiFirebase, SiMongodb, 
         SiReact, SiFlask, SiExpress, SiTailwindcss, SiGit, SiOpenjdk } from "react-icons/si";

const skills = [
  { category: "Programming Languages", items: [
    { name: "Python", icon: SiPython },
    { name: "C++", icon: SiCplusplus },
    { name: "Java", icon: SiOpenjdk },
    { name: "JavaScript", icon: SiJavascript },
  ]},
  { category: "Machine Learning & AI", items: [
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "Keras", icon: SiKeras },
    { name: "NumPy", icon: SiNumpy },
    { name: "Pandas", icon: SiPandas },
  ]},
  { category: "Databases", items: [
    { name: "MySQL", icon: SiMysql },
    { name: "Firebase", icon: SiFirebase },
    { name: "MongoDB", icon: SiMongodb },
  ]},
  { category: "Web Development", items: [
    { name: "React.js", icon: SiReact },
    { name: "Flask", icon: SiFlask },
    { name: "Express.js", icon: SiExpress },
    { name: "Tailwind CSS", icon: SiTailwindcss },
  ]},
  { category: "Tools", items: [
    { name: "Git/GitHub", icon: SiGit },
  ]},
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold text-center">Skills & Tech Stack</h2>

        <div className="grid gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {category.items.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05 }}
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
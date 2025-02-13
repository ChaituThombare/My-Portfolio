import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export function Experience() {
  const experiences = [
    {
      title: "Oasis Infobyte Internship",
      description: "Gained hands-on experience in software development and problem-solving, working on practical applications and projects."
    }
  ];

  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <motion.h2 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center font-space-grotesk 
            bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
            bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>

        <div className="grid gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-space-grotesk">{exp.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground font-poppins">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Disease Prediction using ML Models",
    description: "Machine learning project for predicting diseases using various ML algorithms and health diagnostics data.",
    tags: ["Machine Learning", "Python", "Healthcare"],
    github: "https://github.com/ChaituThombare/Disease-Prediction-using-Machine-Learning-Models"
  },
  {
    title: "SVM Mini Project",
    description: "Implementation of Support Vector Machine (SVM) algorithm for classification tasks.",
    tags: ["Machine Learning", "Python", "SVM"],
    github: "https://github.com/ChaituThombare/SVM-mini-project"
  },
  {
    title: "Number Guess Game",
    description: "Interactive number guessing game implementation showcasing programming logic and user interaction.",
    tags: ["Python", "Game Development"],
    github: "https://github.com/ChaituThombare/Number-Guess-Game"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <motion.h2 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-4xl md:text-5xl font-bold text-center font-space-grotesk 
            bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 
            bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ 
                scale: 0.8,
                x: index % 2 === 0 ? -100 : 100,
                opacity: 0 
              }}
              whileInView={{ 
                scale: 1,
                x: 0,
                opacity: 1 
              }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                bounce: 0.4
              }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.1 }}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2"
                    >
                      <FaGithub className="w-5 h-5" />
                      View on GitHub
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
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
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
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
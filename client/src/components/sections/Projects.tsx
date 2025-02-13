import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Animal Deterrence Using IoT and ML",
    description: "Current 6th-semester project integrating AI-driven wildlife intrusion detection system.",
    tags: ["IoT", "Machine Learning", "Python"],
    github: "https://github.com/Chaitanya_09/animal-deterrence"
  },
  {
    title: "Disease Prediction Using ML",
    description: "Google Colab-based project for health diagnostics using machine learning algorithms.",
    tags: ["Machine Learning", "Python", "Healthcare"],
    github: "https://github.com/Chaitanya_09/disease-prediction"
  },
  {
    title: "Housing Data ML Model",
    description: "Regression-based price prediction system for real estate market analysis.",
    tags: ["Data Science", "Python", "Regression"],
    github: "https://github.com/Chaitanya_09/housing-prediction"
  },
  {
    title: "Emotion Detection App",
    description: "Flask-based real-time sentiment analysis application using computer vision.",
    tags: ["Flask", "OpenCV", "Deep Learning"],
    github: "https://github.com/Chaitanya_09/emotion-detection"
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

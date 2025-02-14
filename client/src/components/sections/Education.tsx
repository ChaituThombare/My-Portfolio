import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const educationData = [
  {
    period: "2022 - Present",
    institution: "Yeshwantrao Chavan College of Engineering (YCCE)",
    degree: "B.Tech",
    score: "CGPA: 8.778",
    type: "College",
    imageUrl: "/ycce-logo.png" // Placeholder for the image you'll provide
  },
  {
    period: "2020 - 2022",
    institution: "Pandit Bachraj Vyas Vidhyalay",
    degree: "12th Standard",
    score: "71%",
    type: "Higher Secondary",
    imageUrl: "/pbvv-logo.png" // Placeholder for the image you'll provide
  },
  {
    period: "2019 - 2020",
    institution: "Green City High School",
    degree: "10th Standard",
    score: "91%",
    type: "Secondary",
    imageUrl: "/gchs-logo.png" // Placeholder for the image you'll provide
  },
];

export function Education() {
  return (
    <section id="education" className="py-20">
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
            bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 
            bg-clip-text text-transparent"
        >
          Education
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line - made bolder and with gradient */}
          <div className="absolute left-0 md:left-1/2 transform -translate-x-px md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-600 via-emerald-600 to-teal-600" />

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 ${
                index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:translate-x-1/2"
              }`}
            >
              {/* Timeline dot - made larger and with border */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background" />

              <Card className={`${index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"} hover:shadow-lg transition-all duration-300`}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {/* Image placeholder - will be replaced with actual images */}
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                      <img
                        src={edu.imageUrl}
                        alt={edu.institution}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-space-grotesk font-bold">
                        {edu.institution}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground font-medium">{edu.period}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-bold text-lg text-primary">{edu.degree}</p>
                  <p className="text-primary font-semibold">{edu.score}</p>
                  <p className="text-sm text-muted-foreground">{edu.type}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
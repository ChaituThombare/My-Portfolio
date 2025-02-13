import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-20">
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
            dark:bg-gradient-to-r dark:from-violet-600 dark:via-indigo-600 dark:to-purple-600
            bg-gradient-to-r from-[#020024] via-[#f7a44b] to-[#a0ff20]
            bg-clip-text text-transparent"
        >
          Let's Connect
        </motion.h2>

        <div className="text-center max-w-2xl mx-auto">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Looking for collaboration opportunities or want to discuss a project?
            Feel free to reach out using the contact form below.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/ChaituThombare",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/chaitannya-thombare-438b92253",
    icon: FaLinkedin,
  },
  {
    name: "Email",
    url: "mailto:chaitannyathombare@gmail.com",
    icon: FaEnvelope,
  },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Get in Touch
            </h3>
            <p className="mt-2 text-muted-foreground">
              Feel free to reach out for collaborations, opportunities, or just to say hello!
            </p>
          </div>
          <div className="flex flex-col space-y-4 md:items-end">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
              >
                <social.icon className="w-5 h-5" />
                <span>{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Chaitanya Thombare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import React from 'react';

const Footer = () => {
  const logoUrl = "../../../public/lrbpixel.png"

  return (
    <footer className="py-12 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
             <img src={logoUrl} alt="lrb dev logo" className="h-12 mb-3 mx-auto md:mx-0 rounded-full invert dark:invert-0" />
            <p className="text-muted-foreground">Transformando ideias em realidade digital.</p>
            <div className="flex items-center gap-3 mt-4 justify-center md:justify-start text-muted-foreground">
              <Mail className="h-5 w-5"/> 
              <a href="mailto:lucas.r.bordignon@gmail.com" className="hover:text-foreground transition-colors">lucas.r.bordignon@gmail.com</a>
            </div>
             <div className="flex items-center gap-3 mt-2 justify-center md:justify-start text-muted-foreground">
              <Phone className="h-5 w-5"/> 
              <a href="tel:+5515991360221" className="hover:text-foreground transition-colors">(15) 9 9136-0221</a>
            </div>
          </div>
          <div className="flex space-x-6 text-muted-foreground">
            <motion.a href="https://github.com/lucasrbordignon" aria-label="Github Profile" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, color: 'hsl(var(--foreground))' }} whileTap={{ scale: 0.9 }}>
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/lucasrbordignon/" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, color: 'hsl(var(--foreground))' }} whileTap={{ scale: 0.9 }}>
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a href="https://www.instagram.com/lrbdev/" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, color: 'hsl(var(--foreground))' }} whileTap={{ scale: 0.9 }}>
              <Instagram className="h-6 w-6" />
            </motion.a>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} lrb dev. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  
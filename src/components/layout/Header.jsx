
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import React from 'react';

const Header = () => {
  const logoUrl = "../../../public/logo.png";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <motion.a 
          href="#início"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <img src={logoUrl} alt="lrb dev logo" className="h-10 mr-2 invert dark:invert-0" />
        </motion.a>
        <nav className="hidden md:flex space-x-8">
          {['Início', 'Serviços', 'Sobre', 'Contato'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace('ó', 'o').replace('ç', 'c')}`} // Ajusta href para IDs
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button asChild className="button-primary font-semibold">
            <a href="#contato">Contato</a>
          </Button>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
  

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import React from 'react';

const Hero = () => {
  return (
    <section id="início" className="pt-40 pb-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
              Transformando <span className="text-primary">ideias</span> em soluções digitais inovadoras
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
              Especialista em desenvolvimento de software, automação de processos e criação de experiências digitais impactantes que impulsionam o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="button-primary px-8 py-3 font-semibold text-base">
                <a href="#servicos">
                  Ver serviços <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="button-outline px-8 py-3 font-semibold text-base">
                 <a href="#contato">Fale comigo</a>
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md">
               <div className="absolute -z-10 w-full h-full bg-secondary top-4 left-4 rounded-lg transform opacity-50"></div>
               <img  className="w-full rounded-lg shadow-lg border border-border" alt="Desenvolvedor trabalhando em um ambiente moderno e escuro" src="https://i.pinimg.com/736x/d6/2f/76/d62f762d08ecb0456e9f46967ba34230.jpg" />
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="flex justify-center mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#servicos" aria-label="Scroll down">
            <ChevronDown className="h-10 w-10 text-muted-foreground hover:text-primary transition-colors animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
   
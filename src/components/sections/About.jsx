
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
             <img  className="rounded-lg shadow-lg w-full max-w-lg mx-auto border border-border" alt="Foto profissional do especialista em ambiente escuro" src="https://i.pinimg.com/736x/ca/0f/51/ca0f518b6a3e584da8b3c5d35d7a1f81.jpg" />
          </motion.div>
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Sobre <span className="text-primary">Mim</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Sou um desenvolvedor apaixonado por tecnologia e por criar soluções que resolvem problemas reais. Com experiência em desenvolvimento full-stack e automação, meu foco é entregar produtos digitais de alta qualidade que agreguem valor aos meus clientes.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Acredito na colaboração, na comunicação transparente e na busca constante por aprendizado para me manter atualizado com as últimas tendências do mercado.
            </p>
            <Button asChild className="button-primary font-semibold">
              <a href="#contato">Entre em Contato</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
    

import { motion } from 'framer-motion';
import { Code, Cpu, Globe, Layers } from 'lucide-react';
import React from 'react';

const ServiceCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div 
      className="service-card bg-secondary rounded-xl p-8 border border-border flex flex-col items-center text-center h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-6 border border-border">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground flex-grow">{description}</p>
    </motion.div>
  );
};

const Services = () => {
  const servicesData = [
    {
      icon: Cpu,
      title: "Automação de Processos",
      description: "Otimize fluxos de trabalho, reduza erros e aumente a eficiência automatizando tarefas manuais e repetitivas.",
      delay: 0.1
    },
    {
      icon: Code,
      title: "Softwares & Apps",
      description: "Desenvolvimento de soluções de software personalizadas e aplicativos móveis para atender às suas necessidades específicas.",
      delay: 0.2
    },
    {
      icon: Globe,
      title: "Landing Pages",
      description: "Criação de landing pages de alta conversão, visualmente atraentes e otimizadas para capturar leads e gerar resultados.",
      delay: 0.3
    },
    {
      icon: Layers,
      title: "Integrações",
      description: "Conecte diferentes sistemas e plataformas para garantir um fluxo de dados contínuo e eficiente entre suas ferramentas.",
      delay: 0.4
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Meus <span className="text-primary">Serviços</span>
        </motion.h2>
        <motion.p 
          className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Ofereço soluções digitais completas para impulsionar o crescimento e a eficiência do seu negócio.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
    
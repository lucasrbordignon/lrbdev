
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import React from 'react';

const PortfolioItem = ({ title, description, imageUrl, link, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Card className="overflow-hidden h-full flex flex-col service-card bg-secondary border-border">
        <div className="aspect-video overflow-hidden">
           <img  class="w-full h-full object-cover transition-transform duration-300 hover:scale-105" alt={title} src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
        </div>
        <CardHeader>
          <CardTitle className="text-foreground">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow flex items-end">
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-medium text-primary hover:underline inline-flex items-center"
            >
              Ver projeto <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Portfolio = () => {
  const portfolioData = [
    {
      title: "Sistema de Automação X",
      description: "Plataforma web para automatizar processos internos de RH, reduzindo o tempo de tarefas em 40%.",
      imageUrl: "Modern dashboard interface showing charts and data",
      link: "#",
      delay: 0.1
    },
    {
      title: "Aplicativo Mobile Y",
      description: "App iOS e Android para gerenciamento de finanças pessoais com interface intuitiva e segura.",
      imageUrl: "Smartphone screen displaying a clean finance app interface",
      link: "#",
      delay: 0.2
    },
    {
      title: "Landing Page Z",
      description: "Página de captura de leads para lançamento de produto, resultando em 25% de taxa de conversão.",
      imageUrl: "Screenshot of a compelling landing page design",
      link: "#",
      delay: 0.3
    },
     {
      title: "Integração API W",
      description: "Conexão entre sistema de e-commerce e ERP, otimizando a gestão de estoque e pedidos.",
      imageUrl: "Abstract graphic representing data flow and API connection",
      link: "#",
      delay: 0.4
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Meu <span className="text-primary">Portfólio</span>
        </motion.h2>
        <motion.p 
          className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Confira alguns dos projetos que desenvolvi e os resultados alcançados.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {portfolioData.map((item) => (
            <PortfolioItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
  
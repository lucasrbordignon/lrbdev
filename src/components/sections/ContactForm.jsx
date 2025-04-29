
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import React, { useRef, useState } from 'react';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_p6zz7l5', 'template_nn2wz0d', formRef.current, 'jJdkHurbglNOEOLSg',)
      .then(
        () => {
          toast({
            title: "Mensagem Enviada!",
            description: "Obrigado por entrar em contato. Responderei em breve.",
          });
        },
        (error) => {
          toast({
            title: "Falha ao Enviar Mensagem!",
            description: "Desculpe, tente novamente em alguns minutos.",
          });
        },
      ).finally(() => {
        setFormData({ user_name: '', user_email: '', message: '' }); 
      });
  };

  return (
    <section id="contato" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Entre em <span className="text-primary">Contato</span>
        </motion.h2>
        <motion.p 
          className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Tem alguma pergunta ou proposta? Preencha o formulário abaixo e retornarei o mais breve possível.
        </motion.p>
        
        <motion.form 
          onSubmit={handleSubmit} 
          className="max-w-xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          ref={formRef}
        >
          <div>
            <Label htmlFor="user_name" className="text-foreground">Nome</Label>
            <Input 
              type="text" 
              id="user_name" 
              name="user_name" 
              required 
              className="mt-2 bg-background border-border"
              value={formData.user_name}
              onChange={handleChange}
              placeholder="Seu nome completo"
            />
          </div>
          <div>
            <Label htmlFor="user_email" className="text-foreground">Email</Label>
            <Input 
              type="email" 
              id="user_email" 
              name="user_email" 
              required 
              className="mt-2 bg-background border-border"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="seu.email@exemplo.com"
            />
          </div>
          <div>
            <Label htmlFor="message" className="text-foreground">Mensagem</Label>
            <Textarea 
              id="message" 
              name="message" 
              required 
              rows={5} 
              className="mt-2 bg-background border-border"
              value={formData.message}
              onChange={handleChange}
              placeholder="Digite sua mensagem aqui..."
            />
          </div>
          <div className="text-center">
            <Button 
              type="submit" 
              size="lg" 
              className="button-primary font-semibold w-full sm:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : (
                <>
                  Enviar Mensagem <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
  
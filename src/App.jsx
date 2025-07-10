
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import About from '@/components/sections/About';
import ContactForm from '@/components/sections/ContactForm';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import { Toaster } from '@/components/ui/toaster';

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <Toaster />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <ContactForm /> 
      </main>
      <Footer />
    </div>
  );
};

export default App;
  

import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  CheckCircle2, 
  Star, 
  Clock, 
  Heart, 
  ShieldCheck, 
  MapPin, 
  Instagram, 
  X, 
  ChevronRight,
  Menu
} from 'lucide-react';

// --- DATA & CONFIG ---

const EXPERT = {
  name: "Géssica Michely",
  role: "Cirurgiã Dentista Geral",
  subRole: "Estética, saúde e confiança em cada atendimento",
  location: "Araguaína - Tocantins",
  address: "Rua Ademar Vicente Ferreira 1267 Dent center",
  whatsappLink: "https://api.whatsapp.com/send/?phone=5563992557108&text=Ol%C3%A1%21+Vim+pelo+Instagram+%EF%BF%BD%0AGostaria+de+agendar+uma+consulta.&type=phone_number&app_absent=0&utm_source=ig",
  instagramLink: "https://www.instagram.com/dra.gessica_michely/",
};

const IMAGES = {
  hero: "https://i.imgur.com/8mxS6ws.png", // Hero principal
  heroAlt1: "https://i.imgur.com/mHs22lz.png",
  heroAlt2: "https://i.imgur.com/I8kGAZP.png",
  expert: "https://i.imgur.com/w8NZ4xv.png",
  certificate: "https://i.imgur.com/C63Regs.png",
  results: [
    "https://i.imgur.com/oUbv120.png",
    "https://i.imgur.com/8RK55eP.png",
    "https://i.imgur.com/tWBmf3g.png",
    "https://i.imgur.com/RFqu37j.png",
    "https://i.imgur.com/X8KQAS7.png",
    "https://i.imgur.com/SFSjuDW.png",
    "https://i.imgur.com/r3JJUKJ.png",
    "https://i.imgur.com/iZUuFWA.png",
    "https://i.imgur.com/kpXiBju.png",
    "https://i.imgur.com/nUGIysF.png",
    "https://i.imgur.com/I68Efa4.png",
    "https://i.imgur.com/t8KwlNW.png",
    "https://i.imgur.com/PNoezK9.png",
    "https://i.imgur.com/2gYI54G.png",
    "https://i.imgur.com/sOBvSZs.png",
    "https://i.imgur.com/vSUYMWx.png",
    "https://i.imgur.com/XF8rmci.png",
    "https://i.imgur.com/qiR3uFl.png",
    "https://i.imgur.com/JhgnDaD.png",
  ]
};

// --- COMPONENTS ---

const WhatsAppButton = ({ 
  text = "Agendar consulta gratuita", 
  subtext = "", 
  className = "", 
  variant = "primary" 
}: { 
  text?: string; 
  subtext?: string; 
  className?: string; 
  variant?: "primary" | "secondary" | "outline" 
}) => {
  const baseStyles = "inline-flex flex-col items-center justify-center px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[280px]";
  
  const variants = {
    primary: "bg-green-600 hover:bg-green-500 text-white border border-transparent",
    secondary: "bg-gold-500 hover:bg-gold-400 text-white border border-transparent",
    outline: "bg-transparent border-2 border-green-600 text-green-700 hover:bg-green-50"
  };

  return (
    <a 
      href={EXPERT.whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <div className="flex items-center gap-2 text-lg">
        <MessageCircle className="w-6 h-6 fill-current" />
        <span>{text}</span>
      </div>
      {subtext && (
        <span className="text-xs opacity-90 mt-1 font-normal tracking-wide uppercase">
          {subtext}
        </span>
      )}
    </a>
  );
};

const Section = ({ children, className = "", id = "" }: { children: ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const FadeIn = ({ children, delay = 0 }: { children: ReactNode; delay?: number; key?: number | string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const Lightbox = ({ src, isOpen, onClose }: { src: string; isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
          >
            <X size={32} />
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            src={src}
            alt="Resultado ampliado"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- SECTIONS ---

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-stone-50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.hero} 
          alt="Dra. Géssica Michely" 
          className="w-full h-full object-cover object-top md:object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent md:bg-gradient-to-r md:from-stone-900/80 md:via-stone-900/40 md:to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-12 md:py-24">
        <div className="max-w-2xl text-white">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Atendimento em Araguaína - TO
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.1] mb-6">
              Olá, eu sou a <br/>
              <span className="font-semibold text-gold-300">Dra. Géssica Michely</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-stone-200 mb-8 max-w-lg font-light leading-relaxed">
              Cirurgiã Dentista dedicada a transformar sorrisos e devolver sua confiança através de um atendimento humano e estético.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col gap-3 items-start">
              <WhatsAppButton 
                text="Agendar 1ª Consulta Gratuita" 
                subtext="Resposta rápida • Sem compromisso"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <Section className="bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <div className="relative">
            <div className="absolute -inset-4 border border-gold-200 rounded-2xl transform rotate-3"></div>
            <img 
              src={IMAGES.expert} 
              alt="Dra. Géssica Michely no consultório" 
              className="relative rounded-xl shadow-2xl w-full object-cover aspect-[4/5]"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl max-w-[200px] hidden md:block">
              <img src={IMAGES.certificate} alt="Certificado" className="w-full rounded border border-stone-100" />
            </div>
          </div>
        </FadeIn>

        <div className="space-y-6">
          <FadeIn delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900">
              Mais que dentista, sua parceira na saúde bucal
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="prose prose-stone text-stone-600">
              <p className="text-lg leading-relaxed">
                Acredito que um sorriso bonito começa com saúde e bem-estar. Meu objetivo não é apenas tratar dentes, mas cuidar de pessoas, devolvendo a autoestima que você merece.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Com atendimento personalizado para adultos e crianças, utilizo as técnicas mais modernas em facetas de resina e clínica geral para garantir resultados naturais e duradouros.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <ul className="space-y-3 mt-6">
              {[
                "Atendimento humanizado e sem pressa",
                "Especialista em Facetas em Resina",
                "Ambiente acolhedor para crianças e adultos",
                "Foco total na sua segurança e conforto"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-stone-700">
                  <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};

const Results = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  // Show first 6 images initially to save space/bandwidth, maybe load more or just show best ones
  const displayImages = IMAGES.results.slice(0, 8); 

  return (
    <Section className="bg-stone-50">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">Resultados Reais</h2>
          <p className="text-stone-600">
            Transformações que vão além da estética. Veja alguns dos sorrisos que já ajudamos a renovar.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {displayImages.map((src, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div 
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-stone-200"
              onClick={() => setSelectedImage(src)}
            >
              <img 
                src={src} 
                alt={`Resultado ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 bg-white/90 p-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <Instagram className="w-5 h-5 text-stone-900" />
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.5}>
        <p className="text-center text-xs text-stone-400 mt-6 uppercase tracking-wider">
          * Resultados podem variar de pessoa para pessoa
        </p>
      </FadeIn>

      <Lightbox 
        src={selectedImage || ""} 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </Section>
  );
};

const Trust = () => {
  const cards = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-gold-600" />,
      title: "Avaliação Honesta",
      desc: "Transparência total sobre o que você realmente precisa, sem tratamentos desnecessários."
    },
    {
      icon: <Star className="w-8 h-8 text-gold-600" />,
      title: "Foco no Resultado",
      desc: "Técnicas modernas e materiais de alta qualidade para garantir durabilidade."
    },
    {
      icon: <Heart className="w-8 h-8 text-gold-600" />,
      title: "Cuidado Humano",
      desc: "Um ambiente onde você é ouvido e respeitado, livre de julgamentos."
    },
    {
      icon: <Clock className="w-8 h-8 text-gold-600" />,
      title: "Sem Esperas Longas",
      desc: "Respeito total ao seu tempo com agendamentos organizados."
    }
  ];

  return (
    <Section className="bg-white">
      <div className="text-center mb-16">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900">Por que confiar em mim?</h2>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:border-gold-200 transition-colors duration-300 h-full">
              <div className="mb-4 p-3 bg-white rounded-xl inline-block shadow-sm">
                {card.icon}
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-2">{card.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{card.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};

const IntermediateCTA = () => {
  return (
    <section className="py-20 bg-stone-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Ainda com dúvidas sobre o seu tratamento?
          </h2>
          <p className="text-stone-300 text-lg mb-8 max-w-2xl mx-auto">
            Não deixe para depois. A primeira consulta é o passo mais importante e eu fiz questão de torná-la gratuita para você.
          </p>
          <WhatsAppButton 
            variant="secondary" 
            text="Quero minha avaliação gratuita" 
            subtext="Falar diretamente no WhatsApp"
          />
        </FadeIn>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Toque no Botão",
      desc: "Clique em qualquer botão desta página para abrir meu WhatsApp pessoal."
    },
    {
      num: "02",
      title: "Agende seu Horário",
      desc: "Minha equipe vai encontrar o melhor horário para você, sem burocracia."
    },
    {
      num: "03",
      title: "Avaliação Gratuita",
      desc: "Venha ao consultório, tomaremos um café e planejaremos seu sorriso."
    }
  ];

  return (
    <Section className="bg-white">
      <div className="text-center mb-16">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900">Como funciona?</h2>
          <p className="text-stone-500 mt-2">3 passos simples para o seu novo sorriso</p>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative">
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-stone-100 -z-10"></div>
        
        {steps.map((step, i) => (
          <FadeIn key={i} delay={i * 0.2}>
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-stone-50 flex items-center justify-center text-3xl font-serif font-bold text-gold-500 shadow-lg mb-6 relative z-10">
                {step.num}
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-3">{step.title}</h3>
              <p className="text-stone-600 text-sm max-w-xs">{step.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};

const MoreProof = () => {
  // Using other images from the list for "bastidores" feel
  const backstageImages = [
    IMAGES.heroAlt1,
    IMAGES.heroAlt2,
    IMAGES.results[8], // Just picking some random ones that might look good
    IMAGES.results[12]
  ];

  return (
    <Section className="bg-stone-50 overflow-hidden">
       <div className="text-center mb-12">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900">Atendimento Personalizado</h2>
        </FadeIn>
      </div>
      
      <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar">
        {backstageImages.map((src, i) => (
          <div key={i} className="snap-center shrink-0 w-[80vw] md:w-[400px] aspect-[4/5] rounded-2xl overflow-hidden shadow-lg relative">
             <img src={src} alt="Bastidores" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-medium">Cuidado em cada detalhe</p>
             </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-24 px-4 bg-white text-center">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 leading-tight">
            Seu novo sorriso começa com uma conversa.
          </h2>
          <p className="text-xl text-stone-600 mb-10 font-light">
            Sem custos, sem compromisso. Apenas eu e você planejando o melhor para sua saúde e autoestima.
          </p>
          <WhatsAppButton 
            className="w-full sm:w-auto text-xl py-5 px-10"
            subtext="Vagas limitadas para este mês"
          />
        </FadeIn>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 px-4 border-t border-stone-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-serif text-white mb-2">{EXPERT.name}</h3>
          <p className="text-sm">{EXPERT.role}</p>
          <div className="mt-2 flex flex-col items-center md:items-start gap-1">
            <p className="text-sm flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-4 h-4" /> {EXPERT.location}
            </p>
            <p className="text-sm text-stone-500">
              {EXPERT.address}
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          <a 
            href={EXPERT.instagramLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-stone-800 hover:bg-stone-700 text-white transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href={EXPERT.whatsappLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-stone-800 hover:bg-stone-700 text-white transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="text-center text-xs mt-12 opacity-40">
        &copy; {new Date().getFullYear()} {EXPERT.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
};

// --- MAIN APP ---

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 selection:bg-gold-200 selection:text-stone-900">
      <Hero />
      <About />
      <Results />
      <Trust />
      <IntermediateCTA />
      <Process />
      <MoreProof />
      <FinalCTA />
      <Footer />
    </div>
  );
}

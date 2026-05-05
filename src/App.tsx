/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Dumbbell, 
  Apple, 
  Target, 
  ArrowRight, 
  CheckCircle2, 
  Instagram, 
  MessageCircle, 
  Menu,
  X,
  Zap,
  TrendingUp,
  Star
} from "lucide-react";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { name: "Inicio", href: "#" },
  { name: "Servicios", href: "#services" },
  { name: "Sobre Mí", href: "#about" },
  { name: "Planes", href: "#pricing" },
];

const SERVICES = [
  {
    icon: <Dumbbell className="w-6 h-6 text-brand" />,
    title: "Entrenamiento Personalizado",
    description: "Programas diseñados exclusivamente para tus objetivos, ya sea ganancia muscular, pérdida de grasa o rendimiento deportivo.",
    tag: "Presencial/Online"
  },
  {
    icon: <Apple className="w-6 h-6 text-brand" />,
    title: "Asesoría Nutricional",
    description: "Planes de alimentación flexibles y sostenibles que complementan tu entrenamiento sin restricciones extremas.",
    tag: "Salud Integral"
  },
  {
    icon: <Target className="w-6 h-6 text-brand" />,
    title: "Coaching de Hábitos",
    description: "Acompañamiento diario para transformar tu mentalidad y construir una disciplina inquebrantable.",
    tag: "Mentalidad"
  }
];

const PLANS = [
  {
    name: "Plan Básico",
    price: "250.000",
    period: "mensual",
    features: [
      "Rutina de entrenamiento",
      "Guía nutricional básica",
      "Soporte vía WhatsApp",
      "Acceso a app de fitness"
    ],
    recommended: false
  },
  {
    name: "Elite Performance",
    price: "450.000",
    period: "mensual",
    features: [
      "Entrenamiento 100% personalizado",
      "Plan nutricional detallado",
      "Check-ins semanales",
      "Soporte prioritario 24/7",
      "Ajustes mensuales según progreso"
    ],
    recommended: true
  },
  {
    name: "Asesoría Online",
    price: "150.000",
    period: "mensual",
    features: [
      "Rutina digital personalizada",
      "Videos explicativos",
      "Seguimiento de progreso",
      "Resolución de dudas semanal"
    ],
    recommended: false
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/595981000000"; // Placeholder for Paraguayan number

  return (
    <div className="min-h-screen bg-background selection:bg-brand selection:text-black">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-zinc-800 py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center">
              <Zap className="w-5 h-5 text-black fill-current" />
            </div>
            <span className="font-display font-bold text-xl tracking-tighter uppercase italic">Mica Fitness</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a key={link.name} href={link.href} className="text-sm font-medium hover:text-brand transition-colors uppercase tracking-widest leading-none">
                {link.name}
              </a>
            ))}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform"
            >
              Empezar Ahora
            </a>
          </div>

          <button className="md:hidden text-zinc-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-surface border-b border-zinc-800 p-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map(link => (
                <a key={link.name} href={link.href} className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </a>
              ))}
              <a 
                href={whatsappUrl}
                className="bg-brand text-black px-6 py-3 rounded-xl text-center font-bold"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1548691905-57c36cc8d93f?q=80&w=2600&auto=format&fit=crop" 
            alt="Fitness" 
            className="w-full h-full object-cover grayscale opacity-40 scale-110"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="w-12 h-px bg-brand" />
              <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs">Entrenamiento de Elite en Paraguay</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-display font-medium leading-[0.9] tracking-tighter uppercase mb-8"
            >
              Transforma su cuerpo. <br />
              <span className="text-brand italic">Domina tu mente.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 text-lg md:text-xl max-w-xl mb-10"
            >
              Coaching personalizado diseñado para personas que buscan resultados reales. 
              Sin excusas, solo progreso constante con la mejor metodología.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="#pricing"
                className="bg-brand text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all"
              >
                Ver Planes <ArrowRight size={18} />
              </a>
              <button className="border border-zinc-700 hover:bg-zinc-800 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors">
                Mi Metodología
              </button>
            </motion.div>
          </div>
        </div>

        {/* Floating tags like the reference */}
        <div className="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2 z-20 space-y-4">
          {[
            { icon: <TrendingUp size={14} />, label: "Hipertrofia" },
            { icon: <Zap size={14} />, label: "Pérdida de Grasa" },
            { icon: <Apple size={14} />, label: "Nutrición" },
            { icon: <Target size={14} />, label: "Disciplina" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="bg-surface/80 backdrop-blur-md border border-zinc-800 px-4 py-2 rounded-full flex items-center gap-3 w-fit"
            >
              <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                {item.icon}
              </div>
              <span className="text-xs font-bold uppercase tracking-wider">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats - Grid line style */}
      <section className="border-y border-zinc-800 grid grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Clientes Satisfechos", value: "200+" },
          { label: "Años de Experiencia", value: "8+" },
          { label: "Planes Personalizados", value: "500+" },
          { label: "Comunidad", value: "10k" },
        ].map((stat, i) => (
          <div key={i} className={`p-10 border-zinc-800 ${i !== 3 ? "lg:border-r" : ""} ${i === 1 ? "max-lg:border-none" : "max-lg:border-b"}`}>
            <span className="block text-4xl md:text-5xl font-display font-bold text-brand mb-2">{stat.value}</span>
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-surface rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2600&auto=format&fit=crop" 
                alt="Trainer" 
                className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 hover:grayscale-0 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand p-8 rounded-2xl text-black">
              <Star className="w-8 h-8 mb-4 fill-current" />
              <p className="font-display font-bold text-2xl leading-tight">Coach Certificada</p>
              <p className="text-xs uppercase tracking-widest font-bold opacity-70 italic">Asunción, Paraguay</p>
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-brand" />
              <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs">Sobre Mí</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-medium leading-none uppercase mb-8">
              Tu éxito es mi <br /> <span className="text-brand">Compromiso.</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Hola, soy Micaela. Ayudo a personas comprometidas a romper sus límites físicos y mentales. En mi trayectoria he comprobado que el entrenamiento no se trata solo de sudar, sino de estrategia y constancia. Mi enfoque combina ciencia del deporte con motivación real para que logres tu mejor versión, estés donde estés.
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2 text-glow" />
                <p className="text-sm uppercase tracking-wide font-medium">Especialista en Entrenamiento de Fuerza</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2 text-glow" />
                <p className="text-sm uppercase tracking-wide font-medium">Diplomada en Nutrición Deportiva Avanzada</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2 text-glow" />
                <p className="text-sm uppercase tracking-wide font-medium">Coach de CrossFit L2</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-surface/30 border-y border-zinc-800 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-8 h-px bg-brand" />
                <span className="text-brand font-bold uppercase tracking-[0.2em] text-xs">Servicios</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-medium leading-none uppercase">
                Expertos en <span className="text-brand italic text-glow">Resultados.</span>
              </h2>
            </div>
            <button className="text-zinc-400 hover:text-brand font-bold uppercase tracking-widest text-xs flex items-center gap-2 group transition-colors">
              Explorar Todos <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-surface border border-zinc-800 p-10 rounded-3xl group transition-all hover:border-brand/40"
              >
                <div className="mb-8">{service.icon}</div>
                <div className="mb-4">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">{service.tag}</span>
                  <h3 className="text-2xl font-display font-bold mt-1 group-hover:text-brand transition-colors uppercase italic">{service.title}</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-10">
                  {service.description}
                </p>
                <button className="w-full py-4 border border-zinc-800 rounded-xl font-bold uppercase tracking-widest text-[10px] group-hover:bg-brand group-hover:text-black transition-all">
                  Saber Más
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-medium uppercase mb-6 leading-none">
              Inversión en <br /> <span className="text-brand italic">Tu Futuro.</span>
            </h2>
            <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Sin contratos forzosos. Resultados garantizados.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PLANS.map((plan, i) => (
              <div 
                key={i}
                className={`relative p-1 rounded-[2rem] overflow-hidden transition-all duration-500 ${plan.recommended ? "bg-gradient-to-b from-brand to-transparent scale-105 z-10" : "bg-zinc-800/50"}`}
              >
                <div className="bg-surface h-full rounded-[1.95rem] p-10 flex flex-col">
                  {plan.recommended && (
                    <div className="absolute top-4 right-8">
                      <span className="bg-brand text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full italic">Recomendado</span>
                    </div>
                  )}
                  <h3 className="text-xl font-display font-bold uppercase mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-sm font-bold text-zinc-500 uppercase tracking-widest mr-1 italic italic">Gs.</span>
                    <span className="text-5xl font-display font-bold text-brand">{plan.price}</span>
                    <span className="text-zinc-500 text-xs font-bold lowercase">/{plan.period}</span>
                  </div>

                  <div className="space-y-4 mb-10 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-brand shrink-0" />
                        <span className="text-sm text-zinc-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a 
                    href={whatsappUrl}
                    className={`w-full py-5 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all text-center ${plan.recommended ? "bg-brand text-black hover:shadow-[0_0_30px_rgba(198,255,0,0.4)]" : "bg-zinc-800 text-white hover:bg-zinc-700"}`}
                  >
                    Elegir Plan
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto relative h-[500px] rounded-[3rem] overflow-hidden flex items-center px-10 md:px-20"
        >
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2600&auto=format&fit=crop" 
              alt="Ready" 
              className="w-full h-full object-cover grayscale opacity-30"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-display font-medium leading-none uppercase mb-8">
              ¿Listo para <br /> <span className="text-brand">Elevar tu Nivel?</span>
            </h2>
            <p className="text-zinc-300 text-lg mb-10 max-w-lg leading-relaxed">
              Únete a las decenas de personas en Paraguay que han transformado su relación con el ejercicio y la salud. Agenda tu primera asesoría gratuita.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={whatsappUrl}
                className="bg-brand text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest flex items-center gap-3 hover:scale-105 transition-all"
              >
                <MessageCircle size={20} /> Agendar Consulta Gratis
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-black fill-current" />
                </div>
                <span className="font-display font-bold text-2xl tracking-tighter uppercase italic">Mica Fitness</span>
              </div>
              <p className="text-zinc-500 max-w-sm mb-8 leading-relaxed uppercase text-xs font-bold tracking-widest italic opacity-70">
                Llevando el entrenamiento de alto rendimiento a todo Paraguay. Construyendo cuerpos fuertes y mentes imparables.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-zinc-800 rounded-full flex items-center justify-center hover:border-brand hover:text-brand transition-colors">
                  <Instagram size={20} />
                </a>
                <a href={whatsappUrl} className="w-10 h-10 border border-zinc-800 rounded-full flex items-center justify-center hover:border-brand hover:text-brand transition-colors">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-display font-bold uppercase tracking-widest text-xs mb-8 text-brand">Navegación</h4>
              <ul className="space-y-4">
                {NAV_LINKS.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-zinc-500 hover:text-zinc-100 transition-colors uppercase tracking-widest">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-display font-bold uppercase tracking-widest text-xs mb-8 text-brand">Contacto</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li className="uppercase tracking-widest">Asunción, Paraguay</li>
                <li className="uppercase tracking-widest flex items-center gap-2">
                   info@micafitness.py
                </li>
                <li className="uppercase tracking-widest">+595 981 000000</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-bold">
              © {new Date().getFullYear()} Mica Fitness. Todos los derechos reservados.
            </p>
            <div className="flex gap-8 text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-bold italic">
               <span className="text-brand italic opacity-70 tracking-widest">Mover el cuerpo, transformar la vida.</span>
            </div>
          </div>
          
          <div className="mt-20 overflow-hidden select-none pointer-events-none">
            <h1 className="text-[20vw] font-display font-bold text-zinc-900 leading-none uppercase tracking-tighter opacity-20 -mb-10 text-center">
              MICA FITNESS
            </h1>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp for mobile/desktop common in SA */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] z-50 hover:scale-110 transition-transform"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}

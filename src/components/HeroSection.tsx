import { motion } from 'framer-motion';
import heroImg from '@/assets/hero-hotel.jpg';

const HeroSection = () => {
  const scrollToRooms = () => {
    document.querySelector('#rooms')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Nilaara Inn" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient opacity-70" />
        <div className="absolute inset-0 bg-foreground/20" />
      </div>

      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-32 right-16 w-48 h-48 rounded-full bg-primary/10 blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-accent/10 blur-2xl animate-float" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary-foreground/80 text-lg font-medium tracking-widest uppercase mb-4"
        >
          Welcome to
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-primary-foreground mb-6 drop-shadow-lg"
        >
          Nilaara Inn
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-primary-foreground/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          Experience luxury and comfort in the heart of Tiruvannamalai. Your perfect retreat awaits.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToRooms}
          className="btn-gradient px-10 py-4 rounded-full text-lg font-semibold shimmer transition-all duration-300 glow-shadow hover:glow-shadow-lg"
        >
          Explore Rooms
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground/80" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

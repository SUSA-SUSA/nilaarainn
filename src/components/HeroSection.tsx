import { motion } from 'framer-motion';
import heroImg from '@/assets/hero-hotel.jpg';

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const HeroSection = () => {
  const title = 'Nilaara Inn';

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
          initial={{ opacity: 0, y: 20, letterSpacing: '0.1em' }}
          animate={{ opacity: 1, y: 0, letterSpacing: '0.35em' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-primary-foreground/80 text-lg font-medium uppercase mb-4"
        >
          Welcome to
        </motion.p>

        {/* Letter-by-letter title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-primary-foreground mb-6 drop-shadow-lg flex justify-center flex-wrap">
          {title.split('').map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className={char === ' ' ? 'w-4 md:w-6' : ''}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="w-24 h-[2px] btn-gradient mx-auto mb-6 origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-primary-foreground/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto italic font-serif"
        >
          Experience luxury and comfort in the heart of Tiruvannamalai. Your perfect retreat awaits.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          whileHover={{ scale: 1.05, y: -2 }}
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

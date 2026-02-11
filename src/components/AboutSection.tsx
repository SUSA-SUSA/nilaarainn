import { motion } from 'framer-motion';
import { MapPin, Star } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Discover</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">About Nilaara Inn</h2>
          <div className="w-20 h-1 btn-gradient mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass rounded-2xl p-8 md:p-12 glow-shadow"
        >
          <div className="flex items-center gap-2 mb-6">
            {[...Array(4)].map((_, i) => (
              <Star key={i} size={20} className="text-primary fill-primary" />
            ))}
            <span className="text-muted-foreground text-sm ml-2">Premium Boutique Hotel</span>
          </div>

          <p className="text-foreground/80 text-lg leading-relaxed mb-8">
            Nestled in the spiritual town of Tiruvannamalai, Nilaara Inn offers an exquisite blend of modern luxury and traditional warmth. Our 4 thoughtfully designed rooms provide the perfect sanctuary for travelers seeking comfort, elegance, and memorable experiences. Whether you're here for a spiritual journey or a peaceful getaway, we ensure every moment of your stay is extraordinary.
          </p>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50">
            <MapPin size={24} className="text-primary mt-1 shrink-0" />
            <div>
              <p className="font-semibold text-foreground">Our Location</p>
              <p className="text-muted-foreground">11/7, Anna Salai, Tiruvannamalai, Tamil Nadu – 606601</p>
              <a
                href="https://www.google.com/maps/place/63MF+PWV+Tiruvannamalai,+Tamil+Nadu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm mt-1 inline-block font-medium"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

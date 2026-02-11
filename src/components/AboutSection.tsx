import { motion, useInView } from 'framer-motion';
import { MapPin, Star, Hotel, Users, BedDouble, Phone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const AnimatedCounter = ({ target, suffix = '', label }: { target: number; suffix?: string; label: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-serif font-bold text-primary">
        {count}{suffix}
      </p>
      <p className="text-muted-foreground text-sm mt-1">{label}</p>
    </div>
  );
};

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

          <p className="text-foreground/80 text-lg leading-relaxed mb-4">
            Nestled in the spiritual town of Tiruvannamalai, Nilaara Inn offers an exquisite blend of modern luxury and traditional warmth. Our 4 thoughtfully designed rooms provide the perfect sanctuary for travelers seeking comfort, elegance, and memorable experiences.
          </p>
          <p className="text-foreground/80 text-base leading-relaxed mb-8">
            Whether you're here for a spiritual journey to the sacred Arunachaleswarar Temple, a peaceful getaway, or a family vacation, we ensure every moment of your stay is extraordinary. With premium amenities, warm hospitality, and a prime location on Anna Salai, Nilaara Inn is your home away from home.
          </p>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 py-6 border-y border-border">
            <AnimatedCounter target={4} label="Total Rooms" />
            <AnimatedCounter target={10} suffix="+" label="Max Guests" />
            <AnimatedCounter target={500} suffix="+" label="Happy Guests" />
            <AnimatedCounter target={100} suffix="%" label="Satisfaction" />
          </div>

          {/* Room Summary */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50">
              <BedDouble size={22} className="text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Suite Rooms (2)</p>
                <p className="text-muted-foreground text-sm">2 Queen Beds, 1 Single, 1 Sofa Bed · Up to 6 guests · ₹3,500/night</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50">
              <Hotel size={22} className="text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Deluxe Double Room (2)</p>
                <p className="text-muted-foreground text-sm">1 Queen Bed · Up to 4 guests · ₹2,500/night</p>
              </div>
            </div>
          </div>

          {/* Location & Contact */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50">
              <MapPin size={24} className="text-primary mt-1 shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Our Location</p>
                <p className="text-muted-foreground text-sm">11/7, Anna Salai, Tiruvannamalai, Tamil Nadu – 606601</p>
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
            <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50">
              <Phone size={24} className="text-primary mt-1 shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Contact Us</p>
                <p className="text-muted-foreground text-sm">+91 XXXXX XXXXX</p>
                <p className="text-muted-foreground text-sm">info@nilaara.in</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

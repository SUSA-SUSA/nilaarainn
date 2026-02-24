import { motion } from 'framer-motion';
import { Wifi, Snowflake, Car, Zap, ShieldCheck, Flame, Bath, Sparkles } from 'lucide-react';
import SectionHeader from './SectionHeader';

const amenities = [
  { icon: Wifi, label: 'Free WiFi', desc: 'High-speed internet' },
  { icon: Snowflake, label: 'Air Conditioning', desc: 'Climate controlled' },
  { icon: Car, label: 'Free Parking', desc: 'Secure car parking' },
  { icon: Zap, label: 'Power Backup', desc: '24/7 uninterrupted' },
  { icon: ShieldCheck, label: 'CCTV Security', desc: 'Round-the-clock' },
  { icon: Flame, label: 'Water Heater', desc: 'Hot water always' },
  { icon: Bath, label: 'Free Toiletries', desc: 'Brush, soap & paste' },
  { icon: Sparkles, label: 'Daily Housekeeping', desc: 'Clean & fresh' },
];

const AmenitiesSection = () => {
  return (
    <section id="amenities" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
          <SectionHeader subtitle="Services" title="Amenities" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {amenities.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass rounded-2xl p-6 text-center card-hover group cursor-default"
            >
              <div className="w-14 h-14 rounded-xl btn-gradient flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:animate-bounce-subtle group-hover:glow-shadow-lg">
                <item.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">{item.label}</h3>
              <p className="text-muted-foreground text-xs">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;

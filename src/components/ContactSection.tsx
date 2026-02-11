import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: '', phone: '', email: '', roomType: '', message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Booking Request Sent!',
      description: "We'll get back to you shortly. Thank you for choosing Nilaara Inn.",
    });
    setForm({ name: '', phone: '', email: '', roomType: '', message: '' });
  };

  const inputClass =
    "w-full bg-transparent border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus-glow transition-all duration-300";

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Reservations</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Book Your Stay</h2>
          <div className="w-20 h-1 btn-gradient mx-auto rounded-full" />
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-8 md:p-12 glow-shadow space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className={inputClass}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
              className={inputClass}
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className={inputClass}
          />
          <select
            value={form.roomType}
            onChange={e => setForm({ ...form, roomType: e.target.value })}
            required
            className={inputClass}
          >
            <option value="" disabled>Select Room Type</option>
            <option value="suite">Suite Room – ₹3,500/night</option>
            <option value="deluxe">Deluxe Double Room – ₹2,500/night</option>
          </select>
          <textarea
            placeholder="Your Message or Special Requests"
            rows={4}
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            className={inputClass + ' resize-none'}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full btn-gradient py-4 rounded-xl text-lg font-semibold shimmer flex items-center justify-center gap-3 transition-all duration-300 glow-shadow hover:glow-shadow-lg"
          >
            <Send size={20} />
            Book Now
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;

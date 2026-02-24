import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import logo from '@/assets/logo.png';

const HotelFooter = forwardRef<HTMLElement>((_, ref) => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer ref={ref} className="footer-gradient text-[hsl(var(--footer-foreground))] py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="Nilaara Inn" className="h-12 w-auto mb-4 brightness-110" />
            <p className="text-[hsl(var(--footer-foreground))]/70 text-sm leading-relaxed">
              Your premium boutique hotel in Tiruvannamalai. Experience luxury, comfort, and warm hospitality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {['Home', 'About', 'Rooms', 'Amenities', 'Gallery', 'Contact'].map(link => (
                <button
                  key={link}
                  onClick={() => scrollTo(`#${link.toLowerCase()}`)}
                  className="text-left text-sm text-[hsl(var(--footer-foreground))]/70 hover:text-[hsl(var(--footer-foreground))] transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>11/7, Anna Salai, Tiruvannamalai, Tamil Nadu – 606601</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="shrink-0" />
                <span>+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="shrink-0" />
                <span>info@nilaara.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social + Copyright */}
        <div className="border-t border-[hsl(var(--footer-foreground))]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[hsl(var(--footer-foreground))]/50">
            © {new Date().getFullYear()} Nilaara Inn. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -4, scale: 1.1 }}
                className="w-10 h-10 rounded-full border border-[hsl(var(--footer-foreground))]/20 flex items-center justify-center hover:border-[hsl(var(--footer-foreground))]/50 transition-colors"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
});

HotelFooter.displayName = 'HotelFooter';

export default HotelFooter;

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
  useGradient?: boolean;
}

const wordVariants = {
  hidden: { opacity: 0, y: 30, rotateX: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const SectionHeader = ({ subtitle, title, description, useGradient = false }: SectionHeaderProps) => {
  const words = title.split(' ');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <motion.p
        initial={{ opacity: 0, letterSpacing: '0.1em' }}
        whileInView={{ opacity: 1, letterSpacing: '0.3em' }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-primary font-medium uppercase text-sm mb-3"
      >
        {subtitle}
      </motion.p>

      <h2
        className={`text-4xl md:text-5xl font-serif font-bold mb-4 flex flex-wrap justify-center gap-x-3 ${
          useGradient ? 'text-gradient' : 'text-foreground'
        }`}
        style={{ perspective: '600px' }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={wordVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="w-20 h-1 btn-gradient mx-auto rounded-full origin-center"
      />

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-muted-foreground mt-4 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeader;

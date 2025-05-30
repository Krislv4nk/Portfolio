
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const ScrollableSection = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false, 
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, opacity: 0 }} 
      animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      style={{
       width: '100%',
  minHeight: '100vh',
        transform: 'none',
      }}
    >
  {children}
</motion.div>

  );
};


 
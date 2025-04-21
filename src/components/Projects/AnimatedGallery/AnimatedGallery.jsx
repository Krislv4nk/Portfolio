

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import css from './AnimatedGallery.module.css';

const imageVariants = {
  enter: { opacity: 0, scale: 0.9 },
  center: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.4 } },
};

const AnimatedGallery = ({ images = [], interval = 3000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={css.sliderWrapper}>
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt={`project-image-${index}`}
          className={css.image}
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          whileHover={{
            scale: 1,
            transition: { duration: 0.1 },
          }}
        />
      </AnimatePresence>
    </div>
  );
};

export default AnimatedGallery;


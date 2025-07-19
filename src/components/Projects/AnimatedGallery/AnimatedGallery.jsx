

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import css from './AnimatedGallery.module.css';

const imageVariants = {
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  center: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
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
      <AnimatePresence mode="sync">
        <motion.img
          key={index}
          src={images[index]}
          alt={`project-image-${index}`}
          className={css.image}
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"

        />
      </AnimatePresence>
    </div>
  );
};

export default AnimatedGallery;


import css from './Container.module.css';
import { motion } from 'framer-motion';

export const Container = ({ children }) => {
  return <motion.div
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }}    
      exit={{ opacity: 0, y: -50 }}     
      transition={{ duration: 0.5 }} 
    className={css.container}>{children}</motion.div>;
};
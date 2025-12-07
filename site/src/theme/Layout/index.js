import React from 'react';
import Layout from '@theme-original/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from '@docusaurus/router';

export default function LayoutWrapper(props) {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={{ duration: 0.3 }}
        style={{ width: '100%' }}
      >
        <Layout {...props}>
          {props.children}
        </Layout>
      </motion.div>
    </AnimatePresence>
  );
}

import { AnimatePresence, motion } from 'framer-motion';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  return (

    <motion.div
      key={router.route}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'linear' }}
      variants={{
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
      }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;

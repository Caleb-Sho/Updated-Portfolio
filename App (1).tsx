import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar              from "./components/Navbar";
import Hero                from "./components/Hero";
import About               from "./components/About";
import Skills              from "./components/Skills";
import Projects            from "./components/Projects";
import Testimonials        from "./components/Testimonials";
import Experience          from "./components/Experience";
import Contact             from "./components/Contact";
import Footer              from "./components/Footer";
import CustomCursor        from "./components/CustomCursor";
import ScrollProgressBar   from "./components/ScrollProgressBar";

// ── Page-load overlay ─────────────────────────────────────────────────────
const LoadScreen = ({ onDone }: { onDone: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onDone, 300);
          return 100;
        }
        return p + 2;
      });
    }, 18);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-obsidian"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1,   opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10"
      >
        <svg viewBox="0 0 60 60" className="w-16 h-16">
          <polygon
            points="8,54 8,46 36,14 18,14 18,6 52,6 52,14 22,46 52,46 52,54"
            fill="#C9A84C"
          />
        </svg>
      </motion.div>

      <div className="w-48 h-px bg-white/10 relative overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gold"
          style={{ width: `${progress}%` }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 font-mono text-xs text-gold/40 tracking-[0.3em]"
      >
        {progress < 100 ? "LOADING" : "READY"}
      </motion.p>
    </motion.div>
  );
};

// ── App ───────────────────────────────────────────────────────────────────
function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <CustomCursor />

      <AnimatePresence mode="wait">
        {!loaded && <LoadScreen key="load" onDone={() => setLoaded(true)} />}
      </AnimatePresence>

      <AnimatePresence>
        {loaded && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative bg-obsidian min-h-screen"
          >
            <ScrollProgressBar />
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Testimonials />
              <Experience />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;

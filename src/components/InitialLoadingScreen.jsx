import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const InitialLoadingScreen = () => {
  const [state, setState] = useState({
    shouldShow: false,
    isVisible: true,
    isLogoVisible: true,
  });

  useEffect(() => {
    const navigationEntry = performance.getEntriesByType("navigation")[0];
    const shouldPlay =
      !localStorage.getItem("hasVisited") || navigationEntry.type === "reload";

    if (shouldPlay) {
      setState({ shouldShow: true, isVisible: true, isLogoVisible: true });
      localStorage.setItem("hasVisited", "true");

      setTimeout(() => setState((s) => ({ ...s, isLogoVisible: false })), 1500);
      setTimeout(() => setState((s) => ({ ...s, isVisible: false })), 1800);
    }
  }, []);

  if (!state.shouldShow) return null;

  return (
    <AnimatePresence>
      {state.isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 flex items-center justify-center bg-[#09090b] z-100"
        >
          <div className="absolute bottom-0 left-0 right-0 h-4 overflow-hidden animate-gradientMove bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 bg-[length:200%_100%]" />

          <AnimatePresence>
            {state.isLogoVisible && (
              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white bg-[length:200%_100%] animate-shine p-8"
              >
                createdbyniko.
              </motion.h1>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InitialLoadingScreen;

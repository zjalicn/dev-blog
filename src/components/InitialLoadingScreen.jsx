import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const InitialLoadingScreen = () => {
  const [shouldPlay, setShouldPlay] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isLogoVisible, setIsLogoVisible] = useState(true);

  useEffect(() => {
    const navigationEntry = performance.getEntriesByType("navigation")[0];
    const isRefresh = navigationEntry.type === "reload";
    const hasVisited = localStorage.getItem("hasVisited");

    // Only play if it's first visit or a refresh
    if (!hasVisited || isRefresh) {
      setShouldPlay(true);
      localStorage.setItem("hasVisited", "true");

      const logoTimer = setTimeout(() => {
        setIsLogoVisible(false);
      }, 1500);

      const slideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 1800);

      return () => {
        clearTimeout(logoTimer);
        clearTimeout(slideTimer);
      };
    }
  }, []);

  if (!shouldPlay) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.6,
            ease: [0.65, 0, 0.35, 1],
          }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#09090b",
            zIndex: 100,
          }}
        >
          <div
            className="absolute bottom-0 left-0 right-0 h-4 overflow-hidden animate-gradientMove"
            style={{
              background:
                "linear-gradient(90deg, rgb(168, 85, 247), rgb(217, 70, 239), rgb(168, 85, 247))",
              backgroundSize: "200% 100%",
            }}
          />

          <AnimatePresence>
            {isLogoVisible && (
              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.3,
                  ease: [0.65, 0, 0.35, 1],
                }}
                className="text-6xl font-bold text-transparent bg-clip-text 
                           bg-gradient-to-r from-white via-purple-200 to-white 
                           bg-[length:200%_100%] animate-shine p-8"
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

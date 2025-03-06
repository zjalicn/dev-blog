---
title: "Implementing an Initial Loading Screen with Astro"
description: "Give a bit of pizzazz to your website with a simple loading screen"
pubDate: "Feb 15 2025"
heroImage: "/blog-placeholder-5.jpg"
---

First impressions matter, especially in web design. An initial loading screen can transform those crucial first seconds of a user's experience from a mundane wait into an engaging moment. In this tutorial, I'll walk you through creating a sophisticated loading screen that only appears on the first visit or page refresh, complete with smooth animations and a touch of personality.

## Stage 1: The Bare Minimum

Let's start with the simplest possible loading screen:

```jsx
import React, { useState, useEffect } from "react";

const InitialLoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "2rem",
      }}
    >
      Loading...
    </div>
  );
};

export default InitialLoadingScreen;
```

**Key Concepts:**

- Basic state management with `useState`
- Simple timeout to hide the screen
- Full-screen overlay with centered text

## Stage 2: Adding First Animation with Framer Motion

```jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const InitialLoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "2rem",
          }}
        >
          Loading...
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InitialLoadingScreen;
```

**Improvements:**

- Added Framer Motion for smooth enter/exit animations
- `AnimatePresence` ensures exit animations work
- Opacity-based transitions

## Stage 3: Sophisticated First Visit Logic

```jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const InitialLoadingScreen = () => {
  const [shouldPlay, setShouldPlay] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if it's the first visit or a page refresh
    const navigationEntry = performance.getEntriesByType("navigation")[0];
    const isRefresh = navigationEntry.type === "reload";
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited || isRefresh) {
      setShouldPlay(true);
      localStorage.setItem("hasVisited", "true");

      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!shouldPlay) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.5 },
          }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "2rem",
          }}
        >
          Loading...
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InitialLoadingScreen;
```

**Key Enhancements:**

- First visit detection
- Page refresh handling
- More sophisticated exit animation (sliding up)
- localStorage for tracking visits

## Stage 4: Adding Brand and Multiple Animation Stages

```jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const InitialLoadingScreen = () => {
  const [shouldPlay, setShouldPlay] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isLogoVisible, setIsLogoVisible] = useState(true);

  useEffect(() => {
    const navigationEntry = performance.getEntriesByType("navigation")[0];
    const isRefresh = navigationEntry.type === "reload";
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited || isRefresh) {
      setShouldPlay(true);
      localStorage.setItem("hasVisited", "true");

      const logoTimer = setTimeout(() => {
        setIsLogoVisible(false);
      }, 1500);

      const exitTimer = setTimeout(() => {
        setIsVisible(false);
      }, 2000);

      return () => {
        clearTimeout(logoTimer);
        clearTimeout(exitTimer);
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
          exit={{
            y: "-100%",
            transition: {
              duration: 0.6,
              ease: [0.65, 0, 0.35, 1],
            },
          }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#09090b",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <AnimatePresence>
            {isLogoVisible && (
              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  transition: { duration: 0.3 },
                }}
                style={{
                  fontSize: "4rem",
                  fontWeight: "bold",
                  margin: 0,
                  padding: 0,
                }}
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
```

**Advanced Features:**

- Multiple animation stages
- Nested animations for logo
- Custom easing curves
- Brand-specific styling
- Separate timings for logo and screen exit

## Stage 5: Adding Visual Polish (Gradient Bottom Bar)

```jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const InitialLoadingScreen = () => {
  const [shouldPlay, setShouldPlay] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isLogoVisible, setIsLogoVisible] = useState(true);

  useEffect(() => {
    const navigationEntry = performance.getEntriesByType("navigation")[0];
    const isRefresh = navigationEntry.type === "reload";
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited || isRefresh) {
      setShouldPlay(true);
      localStorage.setItem("hasVisited", "true");

      const logoTimer = setTimeout(() => {
        setIsLogoVisible(false);
      }, 1500);

      const exitTimer = setTimeout(() => {
        setIsVisible(false);
      }, 1800);

      return () => {
        clearTimeout(logoTimer);
        clearTimeout(exitTimer);
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
          exit={{
            y: "-100%",
            transition: {
              duration: 0.6,
              ease: [0.65, 0, 0.35, 1],
            },
          }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#09090b",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "16px",
              background:
                "linear-gradient(90deg, rgb(168, 85, 247), rgb(217, 70, 239), rgb(168, 85, 247))",
              backgroundSize: "200% 100%",
              animation: "gradientMove 2s linear infinite",
            }}
          />

          <AnimatePresence>
            {isLogoVisible && (
              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  transition: { duration: 0.3 },
                }}
                style={{
                  fontSize: "4rem",
                  fontWeight: "bold",
                  margin: 0,
                  padding: 0,
                }}
              >
                createdbyniko.
              </motion.h1>
            )}
          </AnimatePresence>

          <style>
            {`
              @keyframes gradientMove {
                0% { background-position: 0% 0%; }
                100% { background-position: 200% 0%; }
              }
            `}
          </style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InitialLoadingScreen;
```

**Final Touches:**

- Added animated gradient bottom bar
- Custom CSS keyframe animation
- Seamless background movement

## Key Takeaways

1. Start Simple: Begin with basic functionality
2. Gradually Add Complexity: Introduce features incrementally
3. Consider User Experience: Make animations smooth and purposeful
4. Brand Consistency: Align the loading screen with your design language

## Conclusion

Remember, the best loading screens are barely noticed—they feel like a natural, smooth part of the user's journey. Each stage we've explored adds depth and personality to what could be a mundane first impression.

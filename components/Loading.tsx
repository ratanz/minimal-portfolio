"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface LoadingProps {
  onLoadingComplete: () => void
}

const Loading: React.FC<LoadingProps> = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onLoadingComplete, 1400) // 1800ms for slower exit animation
    }, 2700) // Show for 3 seconds

    return () => clearTimeout(timer)
  }, [onLoadingComplete])

  const welcomeText = "Hello"
  const letters = welcomeText.split("")

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 2.3,
            ease: [0.25, 0.1, 0.25, 1], // Smoother cubic-bezier curve
          }}
          className="fixed inset-0 bg-white z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -100,
              scale: 1,
              filter: "blur(20px)",
              transition: {
                duration: 2,
                ease: [0.4, 0, 0.2, 1],
              },
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-7xl font-bold text-foreground tracking-wide">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: -70,
                    scale: 1.2,
                    rotateX: 70,
                    transition: {
                      duration: 1.5,
                      delay: (letters.length - index - 1) * 0.08, // Slower reverse stagger for exit
                      ease: [0.4, 0, 0.2, 1],
                    },
                  }}
                  transition={{
                    duration: 1,
                    delay: index * 0.3, // Stagger each letter by 0.1s
                    ease: [0.25, 0.46, 0.45, 0.94], // Smooth easing
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loading

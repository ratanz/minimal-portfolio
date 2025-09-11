  'use client'
  import { useState } from "react";
  import Header from "@/components/Header";
  import Achievements from "@/components/achivements";
  import Connect from "@/components/connect";
  import Experience from "@/components/experience";
  import Projects from "@/components/projects";
  import TechStack from "@/components/tech-stack";
  import FooterText from "@/components/footerText";
  import Loading from "@/components/Loading";
  import { motion , AnimatePresence } from "motion/react";



  export default function Home() {
    const [isLoading, setIsLoading] = useState(true)
  
    const handleLoadingComplete = () => {
      setIsLoading(false)
    }
  
    return (
      <>
        <Loading onLoadingComplete={handleLoadingComplete} />
  
        <AnimatePresence>
          {!isLoading && (
            <motion.main
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="w-2/3 md:mx-auto md:p-10 h-fit md:px-14 text-black -z-0"
            >
              <Header />
              <Experience />
              <Projects />
              <TechStack />
              <Achievements />
              <Connect />
              <FooterText />
            </motion.main>
          )}
        </AnimatePresence>
      </>
    )
  }
  

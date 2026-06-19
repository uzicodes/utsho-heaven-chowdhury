"use client";

import React, { useEffect, useState } from 'react';
import LetterGlitch from './LetterGlitch';
import { motion } from 'framer-motion';

export const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 500); 
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => window.removeEventListener('load', handleLoad);
    }, []);


    
    const [shouldRender, setShouldRender] = useState(true);
    
    useEffect(() => {
        if (!isLoading) {
            const timeout = setTimeout(() => {
                setShouldRender(false);
            }, 800); 
            return () => clearTimeout(timeout);
        }
    }, [isLoading]);

    if (!shouldRender) return null;

    return (
        <div className={`preloader-overlay ${!isLoading ? 'hidden' : ''}`}>
            <LetterGlitch
              glitchSpeed={50}
              centerVignette={true}
              outerVignette={false}
              smooth={true}
            />
            {mounted && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none px-4"
                >
                    <span
                      style={{
                        fontFamily: 'var(--font-space-grotesk), sans-serif',
                        backgroundImage: 'linear-gradient(135deg, #ff6b35, #f7931e, #ff9500)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: 'clamp(2.5rem, 8vw, 80px)',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        lineHeight: '1.2'
                      }}
                    >
                      UTSHO HEAVEN CHOWDHURY
                    </span>
                </motion.div>
            )}
        </div>
    );
};

"use client";

import React, { useEffect, useState } from 'react';
import LetterGlitch from './LetterGlitch';
import { motion } from 'framer-motion';

export const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isZooming, setIsZooming] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        let isMounted = true;

        const minTimePromise = new Promise<void>(resolve => setTimeout(resolve, 3000));
        
        const loadPromise = new Promise<void>(resolve => {
            if (document.readyState === 'complete') {
                resolve();
            } else {
                window.addEventListener('load', () => resolve(), { once: true });
            }
        });

        Promise.all([minTimePromise, loadPromise]).then(() => {
            if (isMounted) {
                setIsZooming(true);
                setTimeout(() => {
                    if (isMounted) {
                        setIsLoading(false);
                    }
                }, 750);
            }
        });

        return () => {
            isMounted = false;
        };
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
              centerVignette={false}
              outerVignette={false}
              smooth={true}
            />
            {mounted && (
                <motion.div 
                    style={{
                        willChange: "transform, opacity",
                        transformOrigin: "center center",
                        backfaceVisibility: "hidden",
                        WebkitFontSmoothing: "antialiased"
                    }}
                    initial={{ opacity: 0 }}
                    animate={
                        isZooming
                            ? { scale: 18, opacity: [1, 1, 0] }
                            : { opacity: 1, scale: 1 }
                    }
                    transition={
                        isZooming
                            ? { 
                                duration: 1.25, 
                                ease: [0.76, 0, 0.24, 1],
                                opacity: { duration: 1.25, times: [0, 0.5, 1], ease: "easeInOut" }
                              }
                            : { duration: 0.8 }
                    }
                    className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none px-4"
                >
                    <span
                      style={{
                        fontFamily: 'var(--font-space-grotesk), sans-serif',
                        fontSize: 'clamp(2.75rem, 9vw, 92px)',
                        fontWeight: 900,
                        textAlign: 'center',
                        lineHeight: '1.2',
                        letterSpacing: '-0.02em',
                        backgroundImage: 'linear-gradient(135deg, #bf4011, #a65107, #b55d00)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.95)',
                        paintOrder: 'stroke fill' as any,
                      }}
                    >
                      UTSHO HEAVEN CHOWDHURY
                    </span>
                </motion.div>
            )}
        </div>
    );
};

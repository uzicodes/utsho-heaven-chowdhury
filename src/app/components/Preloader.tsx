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

        const hasVisited = typeof window !== 'undefined' && sessionStorage.getItem('hasVisited');

        // Minimum duration: 3000ms (3s) for first load, 500ms (0.5s) for refresh
        const minTimeDuration = hasVisited ? 500 : 3000;
        const minTimePromise = new Promise<void>(resolve => setTimeout(resolve, minTimeDuration));

        // Window load promise
        const windowLoadPromise = new Promise<void>(resolve => {
            if (document.readyState === 'complete') {
                resolve();
            } else {
                window.addEventListener('load', () => resolve(), { once: true });
            }
        });

        // Font load promise
        const fontsLoadPromise = (typeof document !== 'undefined' && document.fonts)
            ? document.fonts.ready.then(() => {}).catch(() => {})
            : Promise.resolve();

        // Eagerly load all images across all components and wait for them to finish
        const imagesLoadPromise = new Promise<void>(resolve => {
            const checkImages = () => {
                const images = Array.from(document.querySelectorAll('img'));
                
                images.forEach(img => {
                    if (img.loading === 'lazy') {
                        img.loading = 'eager';
                    }
                });

                const imagePromises = images.map(img => {
                    if (img.complete) return Promise.resolve();
                    return new Promise<void>(res => {
                        img.addEventListener('load', () => res(), { once: true });
                        img.addEventListener('error', () => res(), { once: true });
                    });
                });

                Promise.all(imagePromises).then(() => resolve());
            };

            setTimeout(checkImages, 50);
        });

        // Safety fallback timeout (10s max) to prevent infinite hanging if network stalls
        const maxSafetyPromise = new Promise<void>(resolve => setTimeout(resolve, 10000));

        const pageAssetsPromise = Promise.race([
            Promise.all([windowLoadPromise, fontsLoadPromise, imagesLoadPromise]),
            maxSafetyPromise
        ]);

        const loadPromise = hasVisited ? Promise.resolve() : pageAssetsPromise;

        // Resolves when minimum duration (3s) AND all component assets are fully loaded
        Promise.all([minTimePromise, loadPromise]).then(() => {
            if (isMounted) {
                try {
                    sessionStorage.setItem('hasVisited', 'true');
                } catch (e) {
                    // Ignore storage errors
                }
                setIsZooming(true);
                setTimeout(() => {
                    if (isMounted) {
                        setIsLoading(false);
                    }
                }, hasVisited ? 300 : 750);
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
                            color: '#BF2808',
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

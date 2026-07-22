"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";

interface SpotlightItem {
    imageUrl: string;
    caption: string;
}

interface FeatureSpotlightProps {
    items: SpotlightItem[];
}

export default function FeatureSpotlight({ items }: FeatureSpotlightProps) {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

    const goNext = useCallback(() => {
        if (lightboxIndex === null) return;
        setLightboxIndex((lightboxIndex + 1) % items.length);
    }, [lightboxIndex, items.length]);

    const goPrev = useCallback(() => {
        if (lightboxIndex === null) return;
        setLightboxIndex((lightboxIndex - 1 + items.length) % items.length);
    }, [lightboxIndex, items.length]);

    // Keyboard navigation
    useEffect(() => {
        if (lightboxIndex === null) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") goNext();
            if (e.key === "ArrowLeft") goPrev();
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [lightboxIndex, goNext, goPrev]);

    return (
        <>
            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((feature, index) => (
                    <div key={index} className="flex flex-col gap-4">
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-800 group">
                            <Image
                                src={feature.imageUrl}
                                alt={feature.caption}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Zoom button – appears on hover */}
                            <button
                                onClick={() => openLightbox(index)}
                                className="absolute top-2.5 right-2.5 w-7 h-7 rounded-md bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-green-900 hover:border-white/30 cursor-pointer z-10"
                                aria-label={`View ${feature.caption} fullscreen`}
                            >
                                <svg
                                    className="w-3.5 h-3.5 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="border-l-4 border-[#F5BE27] pl-4">
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {feature.caption}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Fullscreen Lightbox Overlay */}
            {lightboxIndex !== null && (
                <div
                    className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center"
                    onClick={closeLightbox}
                >
                    {/* Close button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer z-10"
                        aria-label="Close fullscreen view"
                    >
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Previous button */}
                    <button
                        onClick={(e) => { e.stopPropagation(); goPrev(); }}
                        className="absolute left-4 md:left-8 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer z-10"
                        aria-label="Previous image"
                    >
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Next button */}
                    <button
                        onClick={(e) => { e.stopPropagation(); goNext(); }}
                        className="absolute right-4 md:right-8 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer z-10"
                        aria-label="Next image"
                    >
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Image container */}
                    <div
                        className="relative w-[90vw] h-[80vh] max-w-6xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={items[lightboxIndex].imageUrl}
                            alt={items[lightboxIndex].caption}
                            fill
                            className="object-contain"
                            sizes="90vw"
                            priority
                        />
                    </div>

                    {/* Caption */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                        <p className="text-white/80 text-sm font-medium tracking-wide">
                            {items[lightboxIndex].caption}
                        </p>
                        <p className="text-white/40 text-xs mt-1">
                            {lightboxIndex + 1} / {items.length}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}

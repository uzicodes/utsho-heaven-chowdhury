"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BackToTools({ slug }: { slug: string }) {
    const router = useRouter();

    useEffect(() => {
        sessionStorage.setItem("lastViewedProject", slug);
    }, [slug]);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        router.push("/");
    };

    return (
        <button
            onClick={handleClick}
            className="inline-flex items-center gap-2 text-blue-200 hover:text-black text-xs font-bold uppercase tracking-widest transition-colors group cursor-pointer"
        >
            <svg
                className="w-4 h-4 transition-transform group-hover:-translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Tools
        </button>
    );
}

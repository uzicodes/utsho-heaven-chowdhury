"use client";

import { useRouter } from "next/navigation";

export default function BackToProjects({ slug }: { slug: string }) {
    const router = useRouter();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        router.push("/");

        // After navigation, scroll to the specific project card
        const checkAndScroll = () => {
            const el = document.getElementById(`project-${slug}`);
            if (el) {
                const headerOffset = 40; // Reduced offset since cards are sticky and center themselves
                const elementPosition = el.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            } else {
                // Element not yet in DOM, retry
                requestAnimationFrame(checkAndScroll);
            }
        };

        // Small delay to let the homepage render
        setTimeout(checkAndScroll, 300);
    };

    return (
        <button
            onClick={handleClick}
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors group cursor-pointer"
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
            Back to Projects
        </button>
    );
}

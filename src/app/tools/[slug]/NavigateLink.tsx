"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface NavigateLinkProps {
    item: string;
}

export default function NavigateLink({ item }: NavigateLinkProps) {
    const router = useRouter();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        
        // Navigate to clean homepage URL
        router.push("/");

        if (item === "Home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        // After navigation, scroll to the specific section
        const sectionId = item.toLowerCase().replace("?", "");
        const checkAndScroll = () => {
            const el = document.getElementById(sectionId);
            if (el) {
                const headerOffset = 80;
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
            className="text-sm text-gray-400 hover:text-[#06CC2D] transition-colors font-medium cursor-pointer"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
        >
            {item}
        </button>
    );
}

"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const ActivityCalendar = dynamic(() => import("react-activity-calendar").then((mod) => mod.ActivityCalendar), { ssr: false });

interface GitHubContribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface GitHubActivityProps {
  username?: string;
}

export function GithubActivity({ username = "uzicodes" }: GitHubActivityProps) {
  const [data, setData] = useState<GitHubContribution[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [calendarConfig, setCalendarConfig] = useState({ blockSize: 12, blockMargin: 3 });
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-calculate block size to fit all 53 weeks without scrolling
  const updateCalendarConfig = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    // Available width inside padding (p-6 = 24px each side, sm:p-8 = 32px each side)
    const containerWidth = container.clientWidth;
    const weeks = 53;
    const rows = 7;
    // blockSize + blockMargin = cell pitch; we need weeks * pitch - margin <= availableWidth
    // and rows * pitch - margin <= reasonable height
    // Solve for pitch: pitch <= (availableWidth + margin) / weeks
    // Try margin ratios: margin ≈ pitch * 0.25
    // pitch = blockSize + margin, margin = pitch * 0.25 => blockSize = pitch * 0.75
    const maxPitch = (containerWidth + 2) / weeks;
    const pitch = Math.floor(maxPitch * 100) / 100; // floor to avoid overflow
    const margin = Math.max(1, Math.round(pitch * 0.22));
    const blockSize = Math.max(6, Math.floor(pitch - margin));
    setCalendarConfig({ blockSize, blockMargin: margin });
  }, []);

  useEffect(() => {
    updateCalendarConfig();
    window.addEventListener("resize", updateCalendarConfig);
    return () => window.removeEventListener("resize", updateCalendarConfig);
  }, [updateCalendarConfig]);

  // Recalculate after data loads and container renders
  useEffect(() => {
    if (!loading) {
      // Small delay to ensure the container has rendered
      const timer = setTimeout(updateCalendarConfig, 50);
      return () => clearTimeout(timer);
    }
  }, [loading, updateCalendarConfig]);

  // Scroll to the right when data loads
  useEffect(() => {
    if (!loading && data.length > 0 && scrollContainerRef.current) {
      const timer = setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth;
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [loading, data.length]);

  // Fetch GitHub contribution data
  useEffect(() => {
    const fetchData = async () => {
      if (!username || !/^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,37}[a-zA-Z0-9])?$/.test(username)) {
        console.error("Invalid GitHub username format");
        setLoading(false);
        setData([]);
        return;
      }

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 20000);

      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=last`,
          {
            signal: controller.signal,
            headers: { Accept: "application/json" },
            credentials: "omit",
          }
        );

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();

        if (json.contributions && Array.isArray(json.contributions)) {
          const validContributions = json.contributions.filter((item: unknown) => {
            const contrib = item as { date?: string; count?: number; level?: number };
            return (
              typeof contrib.date === "string" &&
              /^\d{4}-\d{2}-\d{2}$/.test(contrib.date) &&
              typeof contrib.count === "number" &&
              contrib.count >= 0 &&
              typeof contrib.level === "number" &&
              contrib.level >= 0 &&
              contrib.level <= 4
            );
          });
          setData(validContributions as GitHubContribution[]);
        } else {
          setData([]);
        }
      } catch (err) {
        setError(true);
        if (err instanceof Error && err.name === "AbortError") {
          // console.error("GitHub API request timed out");
        } else {
          console.error("Error fetching GitHub data:", err);
        }
        setData([]);
      } finally {
        setLoading(false);
        controller.abort();
      }
    };

    fetchData();
  }, [username]);

  if (loading) {
    return (
      <div className="w-full mt-12">
        <div
          className="w-full h-44 flex items-center justify-center rounded-2xl"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-1.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-sm"
                  style={{
                    backgroundColor: "#00ff88",
                    opacity: 0.3,
                    animation: `pulse 1.4s ease-in-out ${i * 0.15}s infinite`,
                  }}
                />
              ))}
            </div>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
              Loading GitHub Activity...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error || data.length === 0) {
    return (
      <div className="w-full mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full p-8 rounded-2xl text-center"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="flex items-center gap-3 justify-center mb-4">
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
              aria-label={`View ${username}'s GitHub profile`}
            >
              <GithubIcon />
              <span
                className="text-xl font-bold tracking-tight text-white"
                style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
              >
                @{username}
              </span>
              <ExternalLink className="w-4 h-4" style={{ color: "rgba(255,255,255,0.4)" }} />
            </a>
          </div>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            Unable to load GitHub activity data.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full mt-12" ref={containerRef}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full p-6 sm:p-8 rounded-2xl relative overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.06)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-center mb-6">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
            aria-label={`View ${username}'s GitHub profile`}
          >
            <span
              className="text-xl sm:text-2xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              @{username}
            </span>
            <ExternalLink className="w-4 h-4" style={{ color: "rgba(255,255,255,0.35)" }} />
          </a>
        </div>

        {/* Calendar */}
        <div ref={scrollContainerRef} className="w-full overflow-x-auto pb-4 github-calendar-scroll" style={{ scrollbarColor: "rgba(0, 255, 136, 0.3) rgba(255, 255, 255, 0.05)" }}>
          <div className="flex flex-col items-center justify-center min-h-[100px] min-w-min">
            <ActivityCalendar
              data={data}
              blockMargin={calendarConfig.blockMargin}
              blockSize={calendarConfig.blockSize}
              fontSize={12}
              colorScheme="dark"
              theme={{
                dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
              }}
              labels={{
                totalCount: "{{count}} contributions in the last year",
              }}
            />
          </div>
        </div>


        {/* Decorative Glow */}
        <div
          className="absolute -top-20 -right-20 w-56 h-56 rounded-full pointer-events-none"
          style={{
            background: "rgba(0,255,136,0.06)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full pointer-events-none"
          style={{
            background: "rgba(0,255,136,0.04)",
            filter: "blur(60px)",
          }}
        />
      </motion.div>
    </div>
  );
}

function GithubIcon() {
  return (
    <svg
      height="24"
      aria-hidden="true"
      viewBox="0 0 16 16"
      version="1.1"
      width="24"
      fill="currentColor"
      style={{ color: "#00ff88" }}
    >
      <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
    </svg>
  );
}

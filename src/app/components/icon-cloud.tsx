"use client";
import React, { useEffect, useMemo, useState, ReactElement } from "react";
import { Cloud, renderSimpleIcon, SimpleIcon } from "react-icon-cloud";

interface CloudProps {
  containerProps: {
    style: React.CSSProperties;
  };
  options: {
    reverse: boolean;
    depth: number;
    wheelZoom: boolean;
    imageScale: number;
    activeCursor: string;
    tooltip: string;
    initial: [number, number];
    clickToFront: number;
    tooltipDelay: number;
    outlineColour: string;
    maxSpeed: number;
    minSpeed: number;
  };
}

const cloudProps: CloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "none",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

const iconColors: Record<string, string> = {
  typescript: "#3178C6",
  javascript: "#F7DF1E",
  react: "#61DAFB",
  android: "#3DDC84",
  vercel: "#ffffff",
  html5: "#E34F26",
  nodedotjs: "#66CC33",
  angular: "#DD0031",
  express: "#ffffff",
  nextdotjs: "#ffffff",
  prisma: "#62A9FF",
  postgresql: "#648CE6",
  firebase: "#FFCA28",
  nginx: "#009639",
  testinglibrary: "#E33332",
  redis: "#FF4438",
  jest: "#C21325",
  kubernetes: "#326CE5",
  docker: "#2496ED",
  git: "#F05032",
  jira: "#2684FF",
  supabase: "#3FCF8E",
  atlassian: "#2684FF",
  gitlab: "#FC6D26",
  androidstudio: "#3DDC84",
  figma: "#F24E1E",
  notion: "#ffffff",
  clerk: "#6C47FF",
  linux: "#FCC624",
  arduino: "#00D2DC",
  googlecloud: "#4285F4",
  mongodb: "#47A248",
  github: "#ffffff",
  tailwindcss: "#06B6D4",
  ruby: "#CC342D",
  python: "#3776AB",
};

const fetchIconWithRetry = async (slug: string): Promise<{ title: string; path: string } | null> => {
  const urls = [
    `https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/${slug}.svg`,
    `https://cdn.jsdelivr.net/npm/simple-icons/icons/${slug}.svg`,
    `https://unpkg.com/simple-icons@latest/icons/${slug}.svg`,
  ];

  for (const url of urls) {
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const res = await fetch(url);
        if (res.ok) {
          const text = await res.text();
          const titleMatch = text.match(/<title>([\s\S]*?)<\/title>/i);
          const pathMatch = text.match(/d=["']([^"']+)["']/i);
          if (pathMatch && pathMatch[1]) {
            return {
              title: titleMatch ? titleMatch[1].trim() : slug,
              path: pathMatch[1],
            };
          }
        }
      } catch {
        // network error, retry after short delay
      }
      await new Promise((r) => setTimeout(r, 150 * (attempt + 1)));
    }
  }
  return null;
};

const renderCustomIcon = (
  icon: SimpleIcon,
  imageArray?: string[]
): ReactElement =>
  renderSimpleIcon({
    icon,
    bgHex: "#080510",
    fallbackHex: "#ffffff",
    minContrastRatio: 1,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault(),
    },
  });

interface IconCloudProps {
  iconSlugs?: string[];
  imageArray?: string[];
}

const EMPTY_SLUGS: string[] = [];

export default function IconCloud({
  iconSlugs = EMPTY_SLUGS,
}: IconCloudProps): ReactElement | null {
  const [data, setData] = useState<{ simpleIcons: Record<string, SimpleIcon> } | null>(null);

  useEffect(() => {
    if (!iconSlugs.length) return;

    let isMounted = true;
    const fetchAllIcons = async () => {
      // Check local cache first so subsequent loads are 0ms and offline-friendly
      const cacheKey = `icon_cloud_cache_v2_${iconSlugs.join('_')}`;
      try {
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Object.keys(parsed).length >= iconSlugs.length - 2) {
            if (isMounted) setData({ simpleIcons: parsed });
            return;
          }
        }
      } catch {
        // ignore storage errors
      }

      const loadedIcons: Record<string, SimpleIcon> = {};

      const promises = iconSlugs.map(async (slug) => {
        const result = await fetchIconWithRetry(slug);
        if (result) {
          loadedIcons[slug] = {
            title: result.title,
            slug,
            hex: iconColors[slug] || "#ffffff",
            path: result.path,
          };
        }
      });

      await Promise.all(promises);

      if (isMounted && Object.keys(loadedIcons).length > 0) {
        setData({ simpleIcons: { ...loadedIcons } });
      }

      // Save to localStorage
      try {
        if (Object.keys(loadedIcons).length > 0) {
          localStorage.setItem(cacheKey, JSON.stringify(loadedIcons));
        }
      } catch {
        // ignore storage quota errors
      }
    };

    fetchAllIcons();

    return () => {
      isMounted = false;
    };
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon)
    );
  }, [data]);

  return (
  // @ts-expect-error: react-icon-cloud types are incomplete for Cloud props
    <Cloud {...cloudProps}>
      <>
        <>{renderedIcons}</>
      </>
    </Cloud>
  );
}
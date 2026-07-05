"use client";
import React, { useEffect, useMemo, useState, ReactElement } from "react";
import { Cloud, fetchSimpleIcons, renderSimpleIcon, SimpleIcon } from "react-icon-cloud";

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

const renderCustomIcon = (
  icon: SimpleIcon,
  imageArray?: string[]
): ReactElement =>
  renderSimpleIcon({
    icon,
    bgHex: "#080510",
    fallbackHex: "#ffffff",
    minContrastRatio: 2,
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

export default function IconCloud({
  iconSlugs = [],
}: IconCloudProps): ReactElement | null {
  const [data, setData] = useState<{ simpleIcons: Record<string, SimpleIcon> } | null>(null);

  useEffect(() => {
    if (iconSlugs.length > 0) {
      fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
    }
  }, []);

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
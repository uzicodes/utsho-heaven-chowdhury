import React from "react";
type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };
const TypescriptIcon = ({ size = 48, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <circle cx="16" cy="16" r="16" fill="#3178C6" />
    <g>
      <path d="M10 22c0 2 1.5 3 3.5 3s3.5-1 3.5-3v-7H10v7zm9-7v7c0 2-1.5 3-3.5 3s-3.5-1-3.5-3v-7h7z" fill="#fff" />
    </g>
  </svg>
);
export default TypescriptIcon;

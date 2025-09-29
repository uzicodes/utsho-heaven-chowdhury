import React from "react";
type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };
const ReactIcon = ({ size = 48, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <circle cx="16" cy="16" r="16" fill="#22223A" />
    <g>
      <circle cx="16" cy="16" r="3" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1.5" fill="none">
        <ellipse rx="10" ry="4" cx="16" cy="16" />
        <ellipse rx="4" ry="10" cx="16" cy="16" transform="rotate(60 16 16)" />
        <ellipse rx="4" ry="10" cx="16" cy="16" transform="rotate(120 16 16)" />
      </g>
    </g>
  </svg>
);
export default ReactIcon;

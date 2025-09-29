import React from "react";
type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };
const TailwindIcon = ({ size = 48, ...props }: IconProps) => (
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
      <path
        d="M16 10c-5.9 0-9.7 3-11.6 9 2.4-3 4.9-4 7.6-3 1.6.6 2.8 2 4 3.7 2.2 3 4.6 6.1 9.5 6.1 5.9 0 9.7-3 11.6-9-2.4 3-4.9 4-7.6 3-1.6-.6-2.8-2-4-3.7-2.2-3-4.6-6.1-9.5-6.1z"
        fill="#38BDF8"
      />
      <path
        d="M6.5 21.5c-5.9 0-9.7-3-11.6-9 2.4 3 4.9 4 7.6 3 1.6-.6 2.8-2 4-3.7 2.2-3 4.6-6.1 9.5-6.1 5.9 0 9.7 3 11.6 9-2.4-3-4.9-4-7.6-3-1.6.6-2.8 2-4 3.7-2.2 3-4.6 6.1-9.5 6.1z"
        fill="#38BDF8"
      />
    </g>
  </svg>
);
export default TailwindIcon;
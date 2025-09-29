import React from "react";
type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };
const HtmlIcon = ({ size = 48, ...props }: IconProps) => (
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
      <path fill="#E44D26" d="M10 25L7.5 7h17L22.5 25 16 27" />
      <path fill="#F16529" d="M16 27l7-2 1.5-18H16" />
      <path fill="#EBEBEB" d="M16 14H11l.2 2h4.8v-2zm0-4H11l.2 2h4.8v-2zm0 8H11l.2 2h4.8v-2z" />
      <path fill="#fff" d="M16 14v2h4.8l-.2-2H16zm0-4v2h4.8l-.2-2H16zm0 8v2h4.8l-.2-2H16z" />
    </g>
  </svg>
);
export default HtmlIcon;
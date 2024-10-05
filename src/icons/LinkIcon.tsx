import React from "react";

interface CustomSVGProps {
  color?: string;
}

const LinkIcon: React.FC<CustomSVGProps> = ({ color = "#E9E9E9" }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 7V12.75C12 12.9142 11.9677 13.0767 11.9048 13.2284C11.842 13.38 11.75 13.5178 11.6339 13.6339C11.5178 13.75 11.38 13.842 11.2284 13.9048C11.0767 13.9677 10.9142 14 10.75 14H3.25C2.91848 14 2.60054 13.8683 2.36612 13.6339C2.1317 13.3995 2 13.0815 2 12.75V5.25C2 4.91848 2.1317 4.60054 2.36612 4.36612C2.60054 4.1317 2.91848 4 3.25 4H8.48375M10.5 2H14V5.5M7 9L13.75 2.25"
      stroke={color}
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default LinkIcon;

import React from "react";

const PlanetIcon = ({ width = "40", height = "40", className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={width}
      height={height}
      className={className}
    >
      {/* Planet */}
      <circle cx="50" cy="50" r="30" fill="#6366f1">
        <animate
          attributeName="r"
          values="30;32;30"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Crater 1 */}
      <circle cx="40" cy="45" r="5" fill="#4f46e5" />

      {/* Crater 2 */}
      <circle cx="65" cy="60" r="7" fill="#4f46e5" />

      {/* Orbit ring */}
      <ellipse
        cx="50"
        cy="50"
        rx="45"
        ry="20"
        fill="none"
        stroke="#a5b4fc"
        strokeWidth="1.5"
        strokeDasharray="5,3"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="20s"
          repeatCount="indefinite"
        />
      </ellipse>

      {/* Moon */}
      <circle cx="95" cy="50" r="5" fill="#e2e8f0">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="10s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Small stars */}
      <circle cx="20" cy="20" r="1" fill="white">
        <animate
          attributeName="opacity"
          values="0.2;1;0.2"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="75" cy="25" r="1.5" fill="white">
        <animate
          attributeName="opacity"
          values="0.3;0.9;0.3"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="85" cy="75" r="1" fill="white">
        <animate
          attributeName="opacity"
          values="0.5;1;0.5"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="25" cy="80" r="1.2" fill="white">
        <animate
          attributeName="opacity"
          values="0.4;0.8;0.4"
          dur="3.5s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};

export default PlanetIcon;

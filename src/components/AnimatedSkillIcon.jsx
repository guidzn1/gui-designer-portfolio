// src/components/AnimatedSkillIcon.jsx
import React from "react";

function AnimatedSkillIcon({ id, shape = "circle", width = 50, height = 50 }) {
  const gradientId = `grad-${id}`;
  return (
    <svg width={width} height={height} viewBox="0 0 64 64" className="icon-gradient">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0e67e2">
            <animate
              attributeName="stop-color"
              values="#0e67e2; #b3d3ff; #0e67e2"
              dur="4s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#b3d3ff">
            <animate
              attributeName="stop-color"
              values="#b3d3ff; #0e67e2; #b3d3ff"
              dur="4s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>
      {shape === "circle" && (
        <circle cx="32" cy="32" r="30" fill={`url(#${gradientId})`} />
      )}
      {shape === "square" && (
        <rect x="2" y="2" width="60" height="60" fill={`url(#${gradientId})`} />
      )}
      {shape === "triangle" && (
        <polygon points="32,4 4,60 60,60" fill={`url(#${gradientId})`} />
      )}
    </svg>
  );
}

export default AnimatedSkillIcon;

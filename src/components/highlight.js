import React from "react";

export default function Highlight({ children, color }) {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: "1px",
        color: "#fff",
        padding: "0.2rem",
      }}
    >
      {children}
    </span>
  );
}

export function FontSizeAndColor({ children, size, color }) {
  return (
    <span
      style={{
        fontSize: size,
        color: color,
      }}
    >
      {children}
    </span>
  );
}

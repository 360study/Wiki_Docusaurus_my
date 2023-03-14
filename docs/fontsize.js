import React from "react";

export default function FontSize({ children, size }) {
  return (
    <span
      style={{
        backgroundColor: "#f0f0f0",
        borderRadius: "1px",
        color: "#000",
        fontSize: size,
        padding: "0.2rem",
        marginBottom: "20rem",
        height: "50rem",
      }}
    >
      {children}
    </span>
  );
}

import React from "react";
// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import Highlight from "/src/components/Highlight";

const HD = ({ children }) => {
  return (
    <span
      style={{
        backgroundColor: "#f3ffbd",
        borderRadius: "5px",
        color: "#000",
        padding: "0.2rem",
      }}
    >
      {children}
    </span>
  );
};

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "highlight" tag to our <Highlight /> component!
  // `Highlight` will receive all props that were passed to `highlight` in MDX
  highlight: Highlight,
  HD: HD,
  HB: HB,
};

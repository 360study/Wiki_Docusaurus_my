import React from "react";

export const Ha = ({ children }) => SetColor(children, "#fff", "#990066");

export const Hb = ({ children }) => SetColor(children, "#fff", "#d70427");

export const Hc = ({ children }) => SetColor(children, "#fff", "#ff1453");

export const Hd = ({ children }) => SetColor(children, "#fff", "#77052F");

export const He = ({ children }) => SetColor(children, "#fff", "#db1d1a");

export const Hf = ({ children }) => SetColor(children, "#fff", "#ff9f1a");

export const Hg = ({ children }) => SetColor(children, "#fff", "#7db800");

export const Hh = ({ children }) => SetColor(children, "#fff", "#540d6e");

export const Hi = ({ children }) => SetColor(children, "#fff", "#f57e00");

export const Hj = ({ children }) => SetColor(children, "#fff", "#028192");

export const Hk = ({ children }) => SetColor(children, "#fff", "#1a936f");

export const Hl = ({ children }) => SetColor(children, "#fff", "#db1d1a");

export const Hm = ({ children }) => SetColor(children, "#fff", "#660027");

export const Hn = ({ children }) => SetColor(children, "#fff", "#ff006e");

export const Ho = ({ children }) => SetColor(children, "#fff", "#990066");

export const Hp = ({ children }) => SetColor(children, "#fff", "#241943");

export const Hq = ({ children }) => SetColor(children, "#fff", "#560b0e");

export const Hr = ({ children }) => SetColor(children, "#fff", "#ff006e");

export const HA = ({ children }) => SetColor(children, "#000", "#f3ffbd");

export const HB = ({ children }) => SetColor(children, "#000", "#88ffcc");

export const HC = ({ children }) => SetColor(children, "#000", "#eddcc8");

export const HD = ({ children }) => SetColor(children, "#000", "#99eeff");

export const HE = ({ children }) => SetColor(children, "#000", "#f5e6de");

export const HF = ({ children }) => SetColor(children, "#000", "#00ffff");

export const HG = ({ children }) => SetColor(children, "#000", "#f3ffbd");

export const HH = ({ children }) => SetColor(children, "#000", "#f8f739");

export const HI = ({ children }) => SetColor(children, "#000", "#cc4433");

export const HJ = ({ children }) => SetColor(children, "#000", "#52b4d3");

export const HK = ({ children }) => SetColor(children, "#000", "#dcb68a");

export const HL = ({ children }) => SetColor(children, "#000", "#eecc24");

export const HM = ({ children }) => SetColor(children, "#000", "#79b465");

export const HN = ({ children }) => SetColor(children, "#000", "#ffd479");

export const HO = ({ children }) => SetColor(children, "#000", "#ee99ee");

export const HP = ({ children }) => SetColor(children, "#000", "#aad5db");

export const HQ = ({ children }) => SetColor(children, "#000", "#ee6666");

export const HR = ({ children }) => SetColor(children, "#000", "#ffde34");

export const FA = ({ children }) => setFontSize(children, "larger");

export const FB = ({ children }) => setFontSize(children, "x-large");

export const FC = ({ children }) => setFontSize(children, "xx-large");

function SetColor(children, color, bgcolor) {
  return (
    <span
      style={{
        backgroundColor: bgcolor,
        borderRadius: "1px",
        color: color,
        padding: "0.2rem",
      }}
    >
      {children}
    </span>
  );
}

function setFontSize(children, size) {
  return (
    <span
      style={{
        fontSize: size,
        //padding: "0.2rem",
        //marginBottom: "20rem",
        //height: "50rem",
      }}
    >
      {children}
    </span>
  );
}

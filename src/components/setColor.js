import React from "react";

/*说明：A开头的是设置Alert样式
B开头的是设置setBadge样式
C开头的是设置Button样式
D开头的是设置DIV块shadow样式
*/

export const Ha = ({ children }) => SetColor(children, "#f00", "#f8f739"); //#FA383E990066

export const Hb = ({ children }) => SetColor(children, "#fff", "#ee3311");

export const Hc = ({ children }) => SetColor(children, "#fff", "#11cc55");

export const Hd = ({ children }) => SetColor(children, "#fff", "#ff474c");

export const He = ({ children }) => SetColor(children, "#fff", "#0000ff");

export const Hf = ({ children }) => SetColor(children, "#fff", "#ee1166");

export const Hg = ({ children }) => SetColor(children, "#fff", "#ff9f1a");

export const Hh = ({ children }) => SetColor(children, "#fff", "#0033bb");

export const Hi = ({ children }) => SetColor(children, "#fff", "#306cce");

export const Hj = ({ children }) => SetColor(children, "#fff", "#538ce9");

export const Hk = ({ children }) => SetColor(children, "#fff", "#c8c9cc");

export const Hl = ({ children }) => SetColor(children, "#fff", "#ebedf0");

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

export const FA = ({ children }) => setFontSize(children, "large");

export const FB = ({ children }) => setFontSize(children, "larger");

export const FC = ({ children }) => setFontSize(children, "xx-large");

function SetColor(children, color, bgcolor) {
  return (
    <span
      style={{
        backgroundColor: bgcolor,
        borderRadius: "5px",
        color: color,
        padding: "0.3rem",
      }}
      class="my_alert"
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

/*设置alert样式 */
export const AA = ({ children }) => setAlertStyle(children, "primary");
export const AB = ({ children }) => setAlertStyle(children, "secondary");
export const AC = ({ children }) => setAlertStyle(children, "success");
export const AD = ({ children }) => setAlertStyle(children, "info");
export const AE = ({ children }) => setAlertStyle(children, "warning");
export const AF = ({ children }) => setAlertStyle(children, "danger");

function setAlertStyle(children, type) {
  return (
    <div
      class={"alert alert--" + type}
      style={{ padding: "10px", margin: "10px 0" }}
      role="alert"
    >
      {children}
    </div>
  );
}

/*设置Badge样式 */
export const BA = ({ children }) => setBadge(children, "primary");
export const BB = ({ children }) => setBadge(children, "secondary");
export const BC = ({ children }) => setBadge(children, "success");
export const BD = ({ children }) => setBadge(children, "info");
export const BE = ({ children }) => setBadge(children, "warning");
export const BF = ({ children }) => setBadge(children, "danger");
function setBadge(children, type) {
  return <span class={"badge badge--" + type}>{children}</span>;
}

/*设置Button样式 */
export const CA = ({ children }) => setButton(children, "primary", "");
export const CB = ({ children }) => setButton(children, "secondary", "");
export const CC = ({ children }) => setButton(children, "success", "");
export const CD = ({ children }) => setButton(children, "info", "");
export const CE = ({ children }) => setButton(children, "warning", "");
export const CF = ({ children }) => setButton(children, "danger", "");

/*设置Button样式 带OUTLINE样式 */
export const CA1 = ({ children }) =>
  setButton(children, "primary", "button--outline");
export const CB2 = ({ children }) =>
  setButton(children, "secondary", "button--outline");
export const CC3 = ({ children }) =>
  setButton(children, "success", "button--outline");
export const CD4 = ({ children }) =>
  setButton(children, "info", "button--outline");
export const CE5 = ({ children }) =>
  setButton(children, "warning", "button--outline");
export const CF6 = ({ children }) =>
  setButton(children, "danger", "button--outline");

function setButton(children, type, outline) {
  return (
    <button class={"button " + outline + "  button--" + type}>
      {children}
    </button>
  );
}

/*设置文本块div */

export const DA = ({ children }) => setShadow(children, "lw");
export const DB = ({ children }) => setShadow(children, "md");
export const DC = ({ children }) => setShadow(children, "tl");

function setShadow(children, type) {
  return <div class={"item shadow--" + type}>{children}</div>;
}

export const Center = ({ children }) => setCenter(children);

function setCenter(children) {
  return (
    <div
      style={{
        padding: "auto 0px",
        margin: "auto 0px",
        width: "100%",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
}

export const colorRed = ({ children }) =>
  setColor(children, "var(--ifm-color-red-primary)");
export const colorBlue = ({ children }) =>
  setColor(children, "var(--ifm-color-blue-primary)");
export const colorGreen = ({ children }) =>
  setColor(children, "var(--ifm-color-green-primary)");

function setColor(children, color) {
  return (
    <font
      style={{
        color: color,
      }}
    >
      {children}
    </font>
  );
}


export const setCardWhite = ({ children }) =>
_setCard(children, "white");
function _setCard(children, color) {
  return (
    <div
      class={"my_card_"+color}
    >
      {children}
    </div>
  );
}

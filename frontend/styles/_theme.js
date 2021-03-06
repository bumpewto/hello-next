// Design Tokens
const theme = {
  // Choices

  primaryGreen: {
    n30: "#8CE1B1",
    n50: "#4EBF95",
    n60: "#289F8A",
    n70: "#198168",
    n80: "#116A50"
  },

  primaryLemon: {
    n10: "#FCFDC5",
    n20: "#FAF396",
    n40: "#EDDE52"
  },

  neutral: {
    n05: "#FFEFD5",
    n10: "#EDDED0",
    n20: "#DBCFC9",
    n70: "#434140",
    n90: "#1C1C1C"
  },

  support: {
    safe: "#68B7FF",
    danger: "#FF736A"
  },

  font: {
    family1:
      "'IBM Plex Sans',-apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    family2:
      "'Proza Libre',-apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    size: "16px",
    lineHeight: "1.5"
  },
  h4: {
    size: "1.25rem",
    weight: "400"
  },

  borderM: "1px solid",
  borderL: "1.5px solid",
  borderRadius: "8px",

  spacing: {
    None: "0",
    XS: "0.5rem",
    S: "1rem",
    M: "1.5rem",
    L: "2rem",
    XL: "3rem"
  },

  sizes: {
    tablet: "600px",
    desktop: "1200px"
  },

  // transition :
  timing: {
    none: "none",
    fast: "250ms",
    base: "500ms",
    slow: "1000ms"
  },

  //Decisions
  //   interactive-color :
  // background-color :
  textColor: {},
  device: {}
};

theme.textColor.default = theme.neutral.n90;
theme.textColor.light = theme.neutral.n05;

theme.device.tablet = `(min-width: ${theme.sizes.tablet})`;
theme.device.desktop = `(min-width: ${theme.sizes.desktop})`;

export default theme;

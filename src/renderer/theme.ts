const synthwaveTheme = {
  "color-scheme": "dark",
  primary: "#e779c1",
  secondary: "#58c7f3",
  accent: "oklch(88.04% 0.206 93.72)",
  neutral: "#221551",
  "neutral-content": "#f9f7fd",
  "base-100": "#1a103d",
  "base-content": "#f9f7fd",
  info: "#53c0f3",
  "info-content": "#201047",
  success: "#71ead2",
  "success-content": "#201047",
  warning: "#eace6c",
  "warning-content": "#201047",
  error: "#ec8c78",
  "error-content": "#201047",
};

export const themeValues = {
  background: synthwaveTheme["base-100"],
  text: {
    fontSize: 12,
    fill: synthwaveTheme["base-content"],
    outlineWidth: 0,
  },
  axis: {
    domain: {
      line: {
        stroke: "#777777",
        strokeWidth: 1,
      },
    },
    legend: {
      text: {
        fontSize: 12,
        fill: "#333333",
        outlineWidth: 0,
        outlineColor: "transparent",
      },
    },
    ticks: {
      line: {
        stroke: "#777777",
        strokeWidth: 1,
      },
      text: {
        fontSize: 11,
        fill: synthwaveTheme["base-content"],
        outlineWidth: 0,
        outlineColor: "transparent",
      },
    },
  },
  grid: {
    line: {
      stroke: "#dddddd",
      strokeWidth: 1,
    },
  },
  legends: {
    title: {
      text: {
        fontSize: 11,
        fill: "#333333",
        outlineWidth: 0,
        outlineColor: "transparent",
      },
    },
    text: {
      fontSize: 11,
      fill: synthwaveTheme["base-content"],
      outlineWidth: 0,
      outlineColor: "transparent",
    },
    ticks: {
      line: {},
      text: {
        fontSize: 10,
        fill: "#333333",
        outlineWidth: 0,
        outlineColor: "transparent",
      },
    },
  },
  annotations: {
    text: {
      fontSize: 13,
      fill: "#333333",
      outlineWidth: 2,
      outlineColor: "#ffffff",
      outlineOpacity: 1,
    },
    link: {
      stroke: "#000000",
      strokeWidth: 1,
      outlineWidth: 2,
      outlineColor: "#ffffff",
      outlineOpacity: 1,
    },
    outline: {
      stroke: "#000000",
      strokeWidth: 2,
      outlineWidth: 2,
      outlineColor: "#ffffff",
      outlineOpacity: 1,
    },
    symbol: {
      fill: "#000000",
      outlineWidth: 2,
      outlineColor: "#ffffff",
      outlineOpacity: 1,
    },
  },
  tooltip: {
    container: {
      background: synthwaveTheme["base-100"],
      fontSize: 12,
    },
    basic: {},
    chip: {},
    table: {},
    tableCell: {},
    tableCellValue: {},
  },
};

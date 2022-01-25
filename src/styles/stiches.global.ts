import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "*, *::before, *::after": {
    boxSizing: "border-box",
  },
  "html, body": {
    height: "100%",
    margin: 0,
  },
  body: {
    fontFamily: "Source sans pro",
    backgroundColor: "$blue50",
    color: "$white",
    lineHeight: 1.5,
    webkitFontSmoothing: "antialiased",
    mozOsxFontSmoothing: "grayscale",
  },
  html: {
    scrollBehavior: "smooth",
  },
  "img, picture, video, canvas, svg": {
    display: "block",
    maxWidth: "100%",
  },
  "input, button, textarea, select": {
    font: "inherit",
  },
  "p, h1, h2, h3, h4, h5, h6": {
    overflowWrap: "break-word",
  },
  "#root, #__next": {
    isolation: "isolate",
  },
  ":root": {
    scrollbarColor: "#08fdd8 #909096!important",
    scrollbarWidth: "thin!important",
  },
  a: {
    textDecoration: "none",
    color: "inherit,
  },
  ul: {
    listStyle: "none",
    padding: 0,
    margin: ,
  },
  svg: {
    width: 24,
    height: 2,
  },
  "::-webkit-scrollbar": {
    width: 4,
    height: ,
  },
  "::-webkit-scrollbar-track": {
    background: "$gray50",
    padding: ,
  },
  "::-webkit-scrollbar-thumb": {
    background: "$contrast",
    borderRadius: 4,
  },
  "::selection": {
    color: "$dark100",
    background: "$contrast",
  },
  "::-moz-selection": {
    color: "$dark100",
    background: "$contrast",
  },
});

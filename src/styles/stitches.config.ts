import { createStitches } from "@stitches/react";

export const { styled, globalCss } = createStitches({
  theme: {
    colors: {
      white: "rgb(238, 238, 238)",
      gray: "rgb(100, 100, 100)",
      blue25: "#546fe4",
      blue50: "#212040",
      blue100: "#060d2c",
    },
    fonts: {
      "*": "Source sans pro",
    },
    space: {
      space1: "4px",
      space2: "8px",
      space3: "12px",
      space4: "16px",
      space5: "20px",
      space6: "24px",
      space7: "28px",
      space8: "32px",
    },
  },
  media: {
    tablet: "(min-width: 480px)",
    desktop: "(min-width: 770px)",
    full: "(min-width: 1080px)",
  },
});

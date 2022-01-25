import { createStitches } from "@stitches/react";

export const { styled, globalCss } = createStitches({
  theme: {
    colors: {
      white: "hsl(0, 0%, 93%)",
      gray: "hsl(0, 0%, 39%)",
      blue25: "hsl(229, 73%, 61%)",
      blue50: "hsl(242, 33%, 19%)",
      blue100: "hsl(229, 76%, 10%)",
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

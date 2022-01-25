import { styled } from "../stitches.config";

export const Container = styled("section", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridGap: "$space2",
  padding: "$space4",

  variants: {
    position: {
      center: {
        justifyItems: "center",
        alignContent: "center",
      },
    },
  },
});

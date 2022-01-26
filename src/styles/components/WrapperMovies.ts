import { styled } from "../stitches.config";

export const WrapperMovies = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, 250px)",
  justifyContent: "center",
  width: "100%",
  gridGap: "$space4",
  marginTop: "$space8",
});

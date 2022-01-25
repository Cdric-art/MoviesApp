import React from "react";
import { ArrowDown, ArrowUp } from "../styles/components/Icons";
import { styled } from "../styles/stitches.config";

export const TopButton = () => {
  return (
    <Button css={{ borderTopLeftRadius: 15, borderBottomLeftRadius: 15 }}>
      Top <ArrowUp />
    </Button>
  );
};

export const FlopButton = () => {
  return (
    <Button css={{ borderTopRightRadius: 15, borderBottomRightRadius: 15 }}>
      <ArrowDown />
      Flop
    </Button>
  );
};

const Button = styled("button", {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  fontWeight: 600,
  fontSize: ".9rem",
  color: "$white",
  width: "100%",
  padding: "$space1 $space5",
  backgroundColor: "$blue25",
  border: "none",
  outline: "none",
  cursor: "pointer",
  transition: "all .3s",

  "&:hover": {
    backgroundColor: "$white",
    color: "$blue25",
  },
});

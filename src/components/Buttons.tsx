import React, { Dispatch, SetStateAction } from "react";
import { ArrowDown, ArrowUp } from "../styles/components/Icons";
import { styled } from "../styles/stitches.config";

type Buttons = {
  setSort: Dispatch<SetStateAction<string>>;
};

export const TopButton = ({ setSort }: Buttons) => {
  return (
    <Button
      onClick={() => setSort("goodToBad")}
      css={{ borderTopLeftRadius: 15, borderBottomLeftRadius: 15 }}
    >
      Top <ArrowUp />
    </Button>
  );
};

export const FlopButton = ({ setSort }: Buttons) => {
  return (
    <Button
      onClick={() => setSort("badToGood")}
      css={{ borderTopRightRadius: 15, borderBottomRightRadius: 15 }}
    >
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

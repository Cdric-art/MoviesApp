import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { styled } from "../styles/stitches.config";

export const Header = () => {
  const [moviesID, setMoviesID] = useState<string[]>([]);

  useEffect(() => {
    const storeMoviesId = window.localStorage.getItem("movies")
      ? window.localStorage.getItem("movies")!.split(",")
      : [];

    setMoviesID(storeMoviesId);
  }, []);

  return (
    <header>
      <Nav>
        <ul>
          <li>
            <NavLink to={"/"}>Accueil</NavLink>
          </li>
          <li>
            <NavLink to={"/favorites"}>Mes favoris</NavLink>
            {moviesID.length && <Pills>{moviesID.length}</Pills>}
          </li>
        </ul>
      </Nav>
      <Title>Movies App</Title>
    </header>
  );
};

const Nav = styled("nav", {
  ul: {
    display: "flex",
    padding: "$space4 $space4 0 $space4",
  },

  li: {
    position: "relative",
    padding: "$space2 $space4",
  },

  a: {
    fontWeight: 600,
    padding: "$space2 $space4",
    borderRadius: 18,
    backgroundColor: "transparent",
    transition: "all .3s",
  },

  "a:hover, .active": {
    backgroundColor: "$blue25",
  },
});

const Title = styled("h1", {
  margin: 0,
  textAlign: "center",
  fontSize: "3rem",
  letterSpacing: -1,
  textShadow: "2px 2px 2px $colors$blue25",
});

const Pills = styled("span", {
  position: "absolute",
  top: 0,
  right: 5,
  height: 20,
  minWidth: 20,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: 600,
  backgroundColor: "$yellow",
  color: "$blue100",
  borderRadius: "50%",
  lineHeight: 0,
  paddingBottom: 2,
});

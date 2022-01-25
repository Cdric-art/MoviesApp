import React, { FormEventHandler, useEffect, useRef, useState } from "react";
import { Container } from "../styles/components/Container";
import { Flex } from "../styles/components/Flex";
import { styled } from "../styles/stitches.config";
import { FlopButton, TopButton } from "./Buttons";
import { useFetchSearch } from "./useFetch";
import { Movie } from "../types/movie";
import { MovieItem } from "./MovieItem";

export const Search = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [moviesData, setMoviesData] = useState<Movie[]>([]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(formRef.current);
  };

  useEffect(() => {
    useFetchSearch("avenger").then((response) => {
      setMoviesData(response.results);
    });
  }, []);

  return (
    <Container position={"center"}>
      <div>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder={"Entrez le titre d'un film"} />
          <button type={"submit"}>Rechercher</button>
        </Form>
      </div>
      <Flex css={{ minWidth: 230 }}>
        <TopButton />
        <FlopButton />
      </Flex>
      <Wrapper>
        {moviesData.map((movie) => (
          <MovieItem movie={movie} key={movie.id} />
        ))}
      </Wrapper>
    </Container>
  );
};

const Form = styled("form", {
  display: "grid",
  gridTemplatesColumn: "1fr",
  justifyItems: "center",
  alignContent: "center",
  minWidth: 230,
  fontWeight: 600,

  "input, button": {
    width: "100%",
    paddingBlock: "$space2",
    border: "none",
    outline: "none",
  },

  input: {
    textAlign: "center",
    backgroundColor: "$white",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    color: "$blue25",
  },

  button: {
    backgroundColor: "$blue25",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    color: "$white",
    cursor: "pointer",
    transition: "all .3s",

    "&:hover": {
      backgroundColor: "$white",
      color: "$blue25",
    },
  },
});
const Wrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, 250px)",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "100%",
  gridGap: "$space4",
  marginTop: "$space8",
});

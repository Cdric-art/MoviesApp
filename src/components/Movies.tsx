import React, { FormEventHandler, useEffect, useRef, useState } from "react";
import { Container } from "../styles/components/Container";
import { Flex } from "../styles/components/Flex";
import { styled } from "../styles/stitches.config";
import { FlopButton, TopButton } from "./Buttons";
import { useFetchMovie, useFetchSearch } from "./useFetch";
import { Movie } from "../types/movie";
import { MovieItem } from "./MovieItem";
import { WrapperMovies } from "../styles/components/WrapperMovies";

export const Movies = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [moviesData, setMoviesData] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState<FormDataEntryValue | null>(
    null
  );
  const [sortTopFlop, setSortTopFlop] = useState<string>("goodToBad");

  useEffect(() => {
    if (searchQuery) {
      useFetchSearch(searchQuery).then((response) => {
        setMoviesData(response.results);
      });
    } else {
      useFetchMovie().then((response) => {
        setMoviesData(response.results);
      });
    }
  }, [searchQuery]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      setSearchQuery(formData.get("search"));
    }
  };

  const addStorage = (movie: Movie) => {
    const storeData = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];
    if (!storeData.includes(movie.id.toString())) {
      storeData.push(movie.id);
      window.localStorage.movies = storeData;
    }
  };

  return (
    <Container position={"center"}>
      <div>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <input
            name="search"
            type="text"
            placeholder={"Entrez le titre d'un film"}
          />
          <button type={"submit"}>Rechercher</button>
        </Form>
      </div>
      <Flex css={{ minWidth: 230 }}>
        <TopButton setSort={setSortTopFlop} />
        <FlopButton setSort={setSortTopFlop} />
      </Flex>
      <WrapperMovies>
        {moviesData
          .sort((a, b) => {
            if (sortTopFlop === "badToGood") {
              return a.vote_average - b.vote_average;
            } else {
              return b.vote_average - a.vote_average;
            }
          })
          .map((movie) => (
            <MovieItem addStorage={addStorage} movie={movie} key={movie.id} />
          ))}
      </WrapperMovies>
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

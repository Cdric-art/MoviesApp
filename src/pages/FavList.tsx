import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Container } from "../styles/components/Container";
import { Movie } from "../types/movie";
import { useFetchMovieById } from "../components/useFetch";
import { WrapperMovies } from "../styles/components/WrapperMovies";
import { styled } from "../styles/stitches.config";
import { MovieItem } from "../components/MovieItem";

export const FavList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const storeMoviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    storeMoviesId.map((id: number) => {
      useFetchMovieById(id.toString())
        .then((data) => setMovies((movies) => [...movies, data]))
        .catch((err) => console.error({ err }));
    });
  }, []);

  return (
    <Container>
      <Header />
      {movies.length ? (
        <>
          <Title>
            Vos coup de coeur <span> ❤️</span>
          </Title>
          <WrapperMovies>
            {movies.map((movie) => (
              <MovieItem movie={movie} key={movie.id} />
            ))}
          </WrapperMovies>
        </>
      ) : (
        <Title>
          Pas encore de coup de coeur <span> 💔</span>
        </Title>
      )}
    </Container>
  );
};

const Title = styled("h2", {
  fontSize: "1.5rem",
  textAlign: "center",
});

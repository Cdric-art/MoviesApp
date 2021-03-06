import React, { useEffect, useState } from "react";
import { Movie } from "../types/movie";
import { styled } from "../styles/stitches.config";

import defaultImg from "../assets/poster.jpg";
import { useDateFormat } from "./useDateFormat";
import { CrossIcon } from "../styles/components/Icons";

type MovieItemProps = {
  movie: Movie;
  addStorage?: (movie: Movie) => void;
  deleteFav?: (movieId: number) => void;
};

export const MovieItem = ({ movie, addStorage, deleteFav }: MovieItemProps) => {
  const urlPath = window.location.pathname;

  const [addFavoritesDisabled, setAddFavoritesDisabled] =
    useState<boolean>(false);

  useEffect(() => {
    if (window.localStorage.movies) {
      if (window.localStorage.movies.includes(movie.id)) {
        setAddFavoritesDisabled(true);
      }
    }
  }, []);

  const imgUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : defaultImg;

  const genreFinder = () => {
    let genres = movie.genre_ids
      ? movie.genre_ids
      : movie.genres.map((genre) => genre.id);
    let genreArr = [];

    for (const id of genres) {
      switch (id) {
        case 28:
          genreArr.push(`Action`);
          break;
        case 12:
          genreArr.push(`Aventure`);
          break;
        case 16:
          genreArr.push(`Animation`);
          break;
        case 35:
          genreArr.push(`Comédie`);
          break;
        case 80:
          genreArr.push(`Policier`);
          break;
        case 99:
          genreArr.push(`Documentaire`);
          break;
        case 18:
          genreArr.push(`Drame`);
          break;
        case 10751:
          genreArr.push(`Famille`);
          break;
        case 14:
          genreArr.push(`Fantasy`);
          break;
        case 36:
          genreArr.push(`Histoire`);
          break;
        case 27:
          genreArr.push(`Horreur`);
          break;
        case 10402:
          genreArr.push(`Musique`);
          break;
        case 9648:
          genreArr.push(`Mystère`);
          break;
        case 10749:
          genreArr.push(`Romance`);
          break;
        case 878:
          genreArr.push(`Science-fiction`);
          break;
        case 10770:
          genreArr.push(`Téléfilm`);
          break;
        case 53:
          genreArr.push(`Thriller`);
          break;
        case 10752:
          genreArr.push(`Guerre`);
          break;
        case 37:
          genreArr.push(`Western`);
          break;
        default:
          break;
      }
    }
    return genreArr.slice(0, 3).map((genre) => <li key={genre}>{genre}</li>);
  };

  return (
    <Card>
      {urlPath === "/favorites" && deleteFav && (
        <CrossIcon deleteFav={deleteFav} movieId={movie.id} />
      )}
      <img src={imgUrl} alt={movie.title} />
      <h2>{movie.title}</h2>
      {movie.release_date && (
        <h5>Sorti le : {useDateFormat(movie.release_date)}</h5>
      )}
      <h4>
        {movie.vote_average}/10 <span>⭐</span>
      </h4>
      <ul>{genreFinder()}</ul>
      {movie.overview && (
        <>
          <h3>Synopsis</h3>
          <p>{movie.overview}</p>
        </>
      )}
      {urlPath !== "/favorites" && (
        <button
          disabled={addFavoritesDisabled}
          onClick={() => {
            if (addStorage) {
              addStorage(movie);
            }
            setAddFavoritesDisabled(true);
          }}
        >
          Ajouter aux favoris
        </button>
      )}
    </Card>
  );
};

const Card = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "$blue100",
  borderRadius: 20,
  padding: "$space3",

  h2: {
    fontSize: "1rem",
    fontWeight: 600,
    marginBlock: "$space2",
    lineHeight: 1,
    letterSpacing: -1,
    minHeight: 32,
  },

  img: {
    alignSelf: "center",
    width: "80%",
    maxHeight: 250,
    objectFit: "cover",
    borderRadius: 15,
  },

  h5: {
    fontSize: ".7rem",
    color: "$gray",
    fontWeight: 400,
    marginBlock: "0",
    letterSpacing: 1,
  },

  h4: {
    marginBlock: "0",
    letterSpacing: 1,
    fontWeight: 400,
  },

  ul: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    width: "100%",
    marginBlock: "$space1",

    li: {
      fontSize: ".7rem",
      fontWeight: 600,
      padding: "$space1 $space2",
      margin: "$space1",
      backgroundColor: "$blue50",
      borderRadius: 12,
    },
  },

  p: {
    color: "$gray",
    fontSize: ".8rem",
    maxHeight: 120,
    overflowY: "auto",

    "&::-webkit-scrollbar": {
      display: "none",
      scrollbarWidth: 0,
      msOverflowStyle: "none",
    },
  },

  button: {
    alignSelf: "center",
    fontWeight: 600,
    fontSize: ".8rem",
    color: "$white",
    padding: "$space2 $space4",
    borderRadius: 18,
    backgroundColor: "$blue25",
    border: "none",
    outline: "none",
    cursor: "pointer",
    transition: "all .3s",
    marginTop: "auto",

    "&:hover": {
      backgroundColor: "$white",
      color: "$blue25",
    },

    "&:disabled": {
      opacity: 0.3,
    },
  },
});

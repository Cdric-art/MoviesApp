import React from "react";
import { Movie } from "../types/movie";
import { styled } from "../styles/stitches.config";

import defaultImg from "../assets/poster.jpg";
import { useDateFormat } from "./useDateFormat";

type MovieItemProps = {
  movie: Movie;
};

export const MovieItem = ({ movie }: MovieItemProps) => {
  const imgUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : defaultImg;

  const genreFinder = () => {
    let genreArr = [];

    for (const id of movie.genre_ids) {
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
    return genreArr.map((genre) => <li key={genre}>{genre}</li>);
  };

  return (
    <Card>
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
      <button>Ajouter aux favoris</button>
    </Card>
  );
};

const Card = styled("div", {
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
  },

  img: {
    alignSelf: "center",
    width: "80%",
    objectFit: "contain",
    borderRadius: 12,
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
    overflow: "auto",
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

    "&:hover": {
      backgroundColor: "$white",
      color: "$blue25",
    },
  },
});

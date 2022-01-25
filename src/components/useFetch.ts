const API_KEY = import.meta.env.VITE_API_KEY;

export const useFetchSearch = async (query: FormDataEntryValue) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=fr-FR`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) return response.json();
};

export const useFetchMovie = async () => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr-FR`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) return response.json();
};

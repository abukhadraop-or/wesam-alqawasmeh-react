import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useFetch from "../../../hooks/use-fetch";
import styles from "./moviesList.styles";
import DonutsProgressBar from "./DonutsProgressBar";
import useDate from "../../../hooks/use-date";
import BlurSection from "./BlurSection";

const {
  BrokenImg,
  BrokenImgContainer,
  MovieCard,
  MovieCardContentContainer,
  MovieCardImg,
  MovieCardsContainer,
  MovieDescription,
  MovieTitle,
  ReleaseDate,
} = styles;

/**
 * Create MoviesList component.
 *
 * @param {Object} props.sortBy  String to change movies sort.
 *
 * @returns {JSX.Element}
 */

function MoviesList({ sortBy }) {
  const [movies, setMovies] = useState([]);

  /**
   * Handle side effects when sortBy prop change (to Change moviesList state).
   */

  useEffect(() => {
    (async () => {
      const res = await useFetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&region=US&sort_by=${sortBy}&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
      );

      const moviesList = res.results.map((item) => {
        const itemObj = {
          id: item.id,
          title: item.original_title,
          overview: item.overview,
          imageUrl: item.poster_path
            ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
            : null,
          rate: item.vote_average,
          release_date: useDate(item.release_date),
        };
        return itemObj;
      });

      setMovies(moviesList);
    })();
  }, [sortBy]);

  return (
    <MovieCardsContainer>
      {movies.map((movie) => (
        <MovieCard key={movie.id}>
          <BlurSection />
          {movie.imageUrl ? (
            <MovieCardImg src={movie.imageUrl} alt={movie.title} />
          ) : (
            <BrokenImgContainer>
              <BrokenImg src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg" />
            </BrokenImgContainer>
          )}

          <MovieCardContentContainer>
            <DonutsProgressBar rate={movie.rate} />
            <div>
              <MovieTitle>{movie.title}</MovieTitle>
              <ReleaseDate>{movie.release_date}</ReleaseDate>
            </div>

            <MovieDescription>{movie.overview}</MovieDescription>
          </MovieCardContentContainer>
        </MovieCard>
      ))}
    </MovieCardsContainer>
  );
}

MoviesList.propTypes = {
  sortBy: PropTypes.string.isRequired,
};

export default React.memo(MoviesList);

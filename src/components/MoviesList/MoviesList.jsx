import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { get } from 'services/fetch';
import {
  BrokenImg,
  BrokenImgContainer,
  MovieCard,
  MovieCardContentContainer,
  MovieCardImg,
  MovieCardsContainer,
  MovieDescription,
  MovieTitle,
  ReleaseDate,
} from 'components/MoviesList/movies-list-styles';
import DonutsProgressBar from 'components/DonutsProgressBar/DonutsProgressBar';
import formatDate from 'utils/date-format';
import BlurSection from 'components/BlurSection/BlurSection';

/**
 * Create MoviesList component.
 *
 * @param {Object} props Props.
 * @param {String} props.sortBy  String to change movies sort.
 *
 * @return {JSX.Element}
 */
function MoviesList({ sortBy }) {
  const [movies, setMovies] = useState([]);

  /**
   * Handle side effects when sortBy prop change (to Change moviesList state).
   */
  useEffect(() => {
    (async () => {
      try {
        const res = await get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&region=US&sort_by=${sortBy}&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
        );

        const moviesList = res.results.map((item) => {
          const itemObj = {
            id: item.id,
            imageUrl: item.poster_path
              ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
              : null,
            overview: item.overview,
            rate: item.vote_average,
            release_date: formatDate(item.release_date),
            title: item.title,
          };
          return itemObj;
        });

        setMovies(moviesList);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [sortBy]);

  return (
    <MovieCardsContainer>
      {movies.map((movie) => (
        <MovieCard key={movie.id} data-testid="movie-card">
          <BlurSection />
          {movie.imageUrl ? (
            <MovieCardImg
              src={movie.imageUrl}
              alt={movie.title}
              data-testid="movie-img"
            />
          ) : (
            <BrokenImgContainer>
              <BrokenImg
                src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
                data-testid="broken-img"
              />
            </BrokenImgContainer>
          )}

          <MovieCardContentContainer>
            <DonutsProgressBar rate={movie.rate} />
            <div>
              <MovieTitle>{movie.title}</MovieTitle>
              <ReleaseDate>{movie.release_date}</ReleaseDate>
            </div>

            <MovieDescription data-testid="description">
              {movie.overview}
            </MovieDescription>
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

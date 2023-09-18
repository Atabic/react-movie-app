import React, { useEffect, useState } from 'react';
import useGenre from '../../hooks/useGenre';
import MovieCard from '../MovieCard';
import { FlexList } from './MovieListStyle';
import Genres from '../Genres';
import Pagination from '../Pagination';
import YearList from '../FilterByYear';
import { baseUrl } from '../../utils/urls';
import RatingFilter from '../RatingFilter';
import SortBy from '../SortBy';
import ErrorComponent  from '../Error';

function MovieList() {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);
  const [selectedSortBy, setSelectedSortBy] = useState('popularity.desc'); 
  const [selectedRating, setSelectedRating] = useState('');
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(false); 

  const fetchMovies = async () => {
    setLoading(true)
    setError(null);
    try {
      const response = await fetch(
        `${baseUrl}&language=en-US&sort_by=${selectedSortBy}&vote_average.gte=${selectedRating}&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
      );
      if (!response?.ok) {
        throw new Error('API failed to respond! Check console or network tab for error message');
      }
      const data = await response.json();
      setMovies(data.results);
      setNumOfPages(data.total_pages);
    } catch (error) {
      console.error(error)
      setError(error.message)
    } finally {
      setLoading(false); 
    }
   
  };


  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
    // eslint-disable-next-line
  }, [page, genreforURL, selectedSortBy, selectedRating]);

  return (
    <div>
      <div>
        <Genres
          type="movie"
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          genres={genres}
          setGenres={setGenres}
          setPage={setPage}
        />
        <YearList setMovies={setMovies} fetchMovies={fetchMovies} setError={setError} />
        <RatingFilter selectedRating={selectedRating} setSelectedRating={setSelectedRating} />
      </div>
      Sort By:
      <SortBy selectedSortBy={selectedSortBy} setSelectedSortBy={setSelectedSortBy} />
      {loading ? (
        `Loading...`
      ) : (
        <FlexList>
          {error ? <ErrorComponent message={error} /> : movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} genres={genres || []} />
          ))}
        </FlexList>
      )}
      {numOfPages > 1 && (
        <Pagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
}

export default MovieList;

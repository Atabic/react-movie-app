import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Chip } from '@mui/material';
import { baseUrl } from '../../utils/urls';

const YearList = ({ setMovies, fetchMovies, setError }) => {
  const [selectedYears, setSelectedYear] = useState([]);
  const currentYear = new Date().getFullYear();
  const last20Years = Array.from({ length: 20 }, (_, index) => currentYear - index);

  const handleYearChange = (event) => {
    const selectedYear = event.target.value;
    setSelectedYear(selectedYear);
  };

  useEffect(() => {
    // Function to fetch movies for a specific year
    const fetchMoviesForYear = async (year) => {
      setError(null);
      try {
        const response = await fetch(`${baseUrl}&primary_release_year=${year}`);
        if (!response.ok) {
          throw new Error('API failed to respond! Check console or network tab for error message');
        }
        const data = await response.json();
        return data.results;
      } catch (error) {
        setError(error)
        console.error(`Error fetching movies for ${year}:`, error);
        return [];
      }
    };

    // Fetch movies for all selected years and aggregate the results
    const fetchMoviesForSelectedYears = async () => {
      const moviePromises = selectedYears.map((year) => fetchMoviesForYear(year));
      const movieLists = await Promise.all(moviePromises);
      const allMovies = movieLists.flat(); // Flatten the array of arrays
      if (allMovies.length === 0) {
        fetchMovies();
      } else {
        setMovies(allMovies);

      }
    };

    fetchMoviesForSelectedYears();
  }, [selectedYears, setMovies, setError]);

  return (
    <FormControl fullWidth style={{ marginTop: '20px' }}>
      <InputLabel id="year-select-label">Select Year(s)</InputLabel>
      <Select
        labelId="year-select-label"
        id="year-select"
        multiple
        value={selectedYears}
        onChange={handleYearChange}
        renderValue={(selected) => (
          <div>
            {selected.map((year) => (
              <Chip key={year} label={year} />
            ))}
          </div>
        )}
      >
        {last20Years.map((year) => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default YearList;

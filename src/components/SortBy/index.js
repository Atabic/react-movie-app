import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const SortBy = ({ selectedSortBy, setSelectedSortBy }) => {

    const handleSortByChange = (event) => {
        const newSortBy = event.target.value;
        setSelectedSortBy(newSortBy);
    };

    const sortOptions = [
        { label: 'Popularity Descending', value: 'popularity.desc' },
        { label: 'Popularity Ascending', value: 'popularity.asc' },
        { label: 'Release Date Descending', value: 'release_date.desc' },
        { label: 'Release Date Ascending', value: 'release_date.asc' },
        { label: 'Rating Descending', value: 'vote_average.desc' },
        { label: 'Rating Ascending', value: 'vote_average.asc' },
    ];

    return (
        <FormControl fullWidth style={{ marginTop: '20px' }}>
            <InputLabel id="sort-by-label">Sort By</InputLabel>
            <Select
                labelId="sort-by-label"
                id="sort-by-select"
                value={selectedSortBy}
                onChange={handleSortByChange}
            >
                {sortOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default SortBy;

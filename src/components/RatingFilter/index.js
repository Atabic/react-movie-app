import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { baseUrl } from '../../utils/urls';

const RatingFilter = ({ selectedRating, setSelectedRating}) => {
    const [ratingOptions] = useState([
        { label: 'All', value: '' },
        { label: 'Rating > 5', value: 5 },
        { label: 'Rating > 7', value: 7 },
        { label: 'Rating > 9', value: 9 },
    ]);

    const handleRatingChange = (event) => {
        const newSelectedRating = event.target.value;
        setSelectedRating(newSelectedRating);
    };



    return (
        <FormControl fullWidth style={{ marginTop: "20px" }}>
            <InputLabel id="rating-select-label">Select Rating</InputLabel>
            <Select
                labelId="rating-select-label"
                id="rating-select"
                value={selectedRating}
                onChange={handleRatingChange}
            >
                {ratingOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default RatingFilter;

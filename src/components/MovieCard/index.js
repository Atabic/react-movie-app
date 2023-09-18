import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Badge, CardActionArea } from '@mui/material';
import { img_300, unavailable } from '../../utils/urls'
import { Description, MovieTitle, StyledCard } from './MovieCardStyle';
export default function Movie({ movie,genres }) {
  const movieGenres = movie?.genre_ids.map((id) => {
    const genre = genres?.find((genre) => genre.id === id);
    return genre ? genre.name : '';
  });
  return (
    <StyledCard>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={movie.poster_path ? img_300 + movie.poster_path : unavailable}
          alt={movie.title}
        />
        <CardContent>
          <MovieTitle>
            {movie.title}
          </MovieTitle>
          <Typography variant="body2" color="text.secondary">
            Rating:
            <Badge
              badgeContent={movie.vote_average}
              style={{ paddingRight: '30px' }}
              color={movie.vote_average > 6 ? "primary" : "secondary"}
            />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movieGenres.join(', ')}
          </Typography>
          <Description>
            {movie.overview}
          </Description>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
}

import styled from 'styled-components';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export const StyledCard = styled(Card)`
  width: 500px;
  height: auto;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 20px;
`;

export const MovieTitle = styled(Typography)`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Description = styled(Typography)`
  margin-top: 10px;
`;

export const Genres = styled.div`
  margin-top: 10px;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: #f50057; /* Custom color for the star icon */
`;

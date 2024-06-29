import React, { useEffect, useState } from 'react';
import { getCharities } from '../services/Web3Service';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const ListCharities = () => {
  const [charities, setCharities] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCharities = async () => {
      try {
        const fetchedCharities = await getCharities();
        setCharities(fetchedCharities);
        setError('');
      } catch (error) {
        console.error('Error fetching charities:', error);
        setError('Error fetching charities. Please check the console for more details.');
      }
    };

    fetchCharities();
  }, []);

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        List of Charities
      </Typography>
      {error && (
        <Typography color="error" style={{ marginTop: '1rem' }}>
          {error}
        </Typography>
      )}
      <List>
        {charities.map((charity, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={charity.charityAddress}
              secondary={`Votes: ${charity.votes}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ListCharities;

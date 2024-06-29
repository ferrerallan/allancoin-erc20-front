import React, { useEffect, useState } from 'react';
import { getCurrentCharity } from '../services/Web3Service';
import { Container, Typography, CircularProgress } from '@mui/material';

const CurrentCharity = () => {
  const [currentCharity, setCurrentCharity] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCurrentCharity = async () => {
      try {
        const charity = await getCurrentCharity();
        setCurrentCharity(charity);
        setError('');
      } catch (error) {
        console.error('Error fetching current charity:', error);
        setError('Error fetching current charity. Please check the console for more details.');
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentCharity();
  }, []);

  if (loading) {
    return (
      <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Current Charity
      </Typography>
      {error ? (
        <Typography color="error" style={{ marginTop: '1rem' }}>
          {error}
        </Typography>
      ) : (
        <Typography variant="body1">
          Current Charity Address: {currentCharity}
        </Typography>
      )}
    </Container>
  );
};

export default CurrentCharity;

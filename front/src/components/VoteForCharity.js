import React, { useState } from 'react';
import { voteForCharity } from '../services/contractService';
import { TextField, Button, Container, Typography } from '@mui/material';

const VoteForCharity = () => {
  const [charityAddress, setCharityAddress] = useState('');
  const [error, setError] = useState('');

  const handleVoteForCharity = async () => {
    try {
      await voteForCharity(charityAddress);
      alert('Voted for charity successfully');
      setError(''); // Clear any previous errors
    } catch (error) {
      console.error('Error voting for charity:', error);
      setError('Error voting for charity. Please check the console for more details.');
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Vote For Charity
      </Typography>
      <TextField
        fullWidth
        type="text"
        value={charityAddress}
        onChange={(e) => setCharityAddress(e.target.value)}
        placeholder="Enter charity index"
        margin="normal"
        variant="outlined"
      />
      <Button variant="contained" color="primary" onClick={handleVoteForCharity} fullWidth>
        Vote For Charity
      </Button>
      {error && (
        <Typography color="error" style={{ marginTop: '1rem' }}>
          {error}
        </Typography>
      )}
    </Container>
  );
};

export default VoteForCharity;

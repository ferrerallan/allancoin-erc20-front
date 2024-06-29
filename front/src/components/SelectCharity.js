import React, { useState } from 'react';
import { selectCharity } from '../services/contractService';
import { TextField, Button, Container, Typography } from '@mui/material';

const SelectCharity = () => {
  const [charityAddress, setCharityAddress] = useState('');
  const [error, setError] = useState('');

  const handleSelectCharity = async () => {
    try {
      await selectCharity(charityAddress);
      alert('Charity selected successfully');
      setError(''); // Clear any previous errors
    } catch (error) {
      console.error('Error selecting charity:', error);
      setError('Error selecting charity. Please check the console for more details.');
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Select Charity
      </Typography>
      <TextField
        fullWidth
        type="text"
        value={charityAddress}
        onChange={(e) => setCharityAddress(e.target.value)}
        placeholder="Enter charity address"
        margin="normal"
        variant="outlined"
      />
      <Button variant="contained" color="primary" onClick={handleSelectCharity} fullWidth>
        Select Charity
      </Button>
      {error && (
        <Typography color="error" style={{ marginTop: '1rem' }}>
          {error}
        </Typography>
      )}
    </Container>
  );
};

export default SelectCharity;

import React, { useState } from 'react';
import { addCharity } from '../services/contractService';
import { TextField, Button, Container, Typography } from '@mui/material';

const AddCharity = () => {
  const [charityAddress, setCharityAddress] = useState('');

  const handleAddCharity = async () => {
    try {
      await addCharity(charityAddress);
      alert('Charity added successfully');
    } catch (error) {
      console.error('Error adding charity:', error);
      alert('Error adding charity. Please check the console for more details.');
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Add Charity
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
      <Button variant="contained" color="primary" onClick={handleAddCharity} fullWidth>
        Add Charity
      </Button>
    </Container>
  );
};

export default AddCharity;

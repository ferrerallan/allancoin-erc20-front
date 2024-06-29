import React, { useState } from 'react';
import { setDonationPercentage } from '../services/contractService';
import { TextField, Button, Container, Typography } from '@mui/material';

const SetDonationPercentage = () => {
  const [percentage, setPercentage] = useState('');

  const handleSetPercentage = async () => {
    await setDonationPercentage(percentage);
    alert('Donation percentage set successfully');
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Set Donation Percentage
      </Typography>
      <TextField
        fullWidth
        type="number"
        value={percentage}
        onChange={(e) => setPercentage(e.target.value)}
        placeholder="Enter donation percentage"
        margin="normal"
        variant="outlined"
      />
      <Button variant="contained" color="primary" onClick={handleSetPercentage} fullWidth>
        Set Percentage
      </Button>
    </Container>
  );
};

export default SetDonationPercentage;

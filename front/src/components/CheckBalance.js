import React, { useState } from 'react';
import { balanceOf } from '../services/Web3Service';
import { TextField, Button, Container, Typography } from '@mui/material';

const CheckBalance = () => {
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState('');

  const handleCheckBalance = async () => {
    try {
      const balance = await balanceOf(address);
      setBalance(balance);
    } catch (error) {
      console.error('Error checking balance:', error);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Check Balance
      </Typography>
      <TextField
        fullWidth
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter address"
        margin="normal"
        variant="outlined"
      />
      <Button variant="contained" color="primary" onClick={handleCheckBalance} fullWidth>
        Check Balance
      </Button>
      {balance && (
        <Typography variant="body1" style={{ marginTop: '1rem' }}>
          Balance: {balance} CHAC
        </Typography>
      )}
    </Container>
  );
};

export default CheckBalance;

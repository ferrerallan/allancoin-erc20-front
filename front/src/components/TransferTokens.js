import React, { useState } from 'react';
import { transfer } from '../services/Web3Service';
import { TextField, Button, Container, Typography } from '@mui/material';

const TransferTokens = () => {
  const [toAddress, setToAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleTransfer = async () => {
    try {
      await transfer(toAddress, amount);
      alert('Transfer successful');
    } catch (error) {
      console.error('Error transferring tokens:', error);
      alert('Transfer failed');
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Transfer Tokens
      </Typography>
      <TextField
        fullWidth
        type="text"
        value={toAddress}
        onChange={(e) => setToAddress(e.target.value)}
        placeholder="Enter recipient address"
        margin="normal"
        variant="outlined"
      />
      <TextField
        fullWidth
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        margin="normal"
        variant="outlined"
      />
      <Button variant="contained" color="primary" onClick={handleTransfer} fullWidth>
        Transfer
      </Button>
    </Container>
  );
};

export default TransferTokens;

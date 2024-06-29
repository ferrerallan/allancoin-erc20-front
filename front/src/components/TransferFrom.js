import React, { useState } from 'react';
import { transferFrom } from '../services/Web3Service';
import { TextField, Button, Container, Typography } from '@mui/material';

const TransferFrom = () => {
  const [fromAddress, setFromAddress] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleTransferFrom = async () => {
    try {
      await transferFrom(fromAddress, toAddress, amount);
      alert('Transfer From successful');
    } catch (error) {
      console.error('Error transferring tokens:', error);
      alert('Transfer From failed');
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Transfer From
      </Typography>
      <TextField
        fullWidth
        type="text"
        value={fromAddress}
        onChange={(e) => setFromAddress(e.target.value)}
        placeholder="Enter sender address"
        margin="normal"
        variant="outlined"
      />
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
      <Button variant="contained" color="primary" onClick={handleTransferFrom} fullWidth>
        Transfer From
      </Button>
    </Container>
  );
};

export default TransferFrom;

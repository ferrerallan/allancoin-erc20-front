import React, { useState } from 'react';
import { approve } from '../services/Web3Service';
import { TextField, Button, Container, Typography } from '@mui/material';

const ApproveTokens = () => {
  const [spender, setSpender] = useState('');
  const [amount, setAmount] = useState('');

  const handleApprove = async () => {
    try {
      await approve(spender, amount);
      alert('Approval successful');
    } catch (error) {
      console.error('Error approving tokens:', error);
      alert('Approval failed');
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Approve Tokens
      </Typography>
      <TextField
        fullWidth
        type="text"
        value={spender}
        onChange={(e) => setSpender(e.target.value)}
        placeholder="Enter spender address"
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
      <Button variant="contained" color="primary" onClick={handleApprove} fullWidth>
        Approve
      </Button>
    </Container>
  );
};

export default ApproveTokens;

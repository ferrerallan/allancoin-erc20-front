import React, { useState } from 'react';
import { allowance } from '../services/Web3Service';
import { TextField, Button, Container, Typography } from '@mui/material';

const CheckAllowance = () => {
  const [ownerAddress, setOwnerAddress] = useState('');
  const [spenderAddress, setSpenderAddress] = useState('');
  const [allowanceAmount, setAllowanceAmount] = useState('');

  const handleCheckAllowance = async () => {
    try {
      const allowanceResult = await allowance(ownerAddress, spenderAddress);
      setAllowanceAmount(allowanceResult);
    } catch (error) {
      console.error('Error checking allowance:', error);
      alert('Failed to check allowance');
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Check Allowance
      </Typography>
      <TextField
        fullWidth
        type="text"
        value={ownerAddress}
        onChange={(e) => setOwnerAddress(e.target.value)}
        placeholder="Enter owner address"
        margin="normal"
        variant="outlined"
      />
      <TextField
        fullWidth
        type="text"
        value={spenderAddress}
        onChange={(e) => setSpenderAddress(e.target.value)}
        placeholder="Enter spender address"
        margin="normal"
        variant="outlined"
      />
      <Button variant="contained" color="primary" onClick={handleCheckAllowance} fullWidth>
        Check Allowance
      </Button>
      {allowanceAmount && (
        <Typography variant="body1" style={{ marginTop: '1rem' }}>
          Allowance: {allowanceAmount} CHAC
        </Typography>
      )}
    </Container>
  );
};

export default CheckAllowance;

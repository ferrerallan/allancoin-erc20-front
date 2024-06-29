import React, { useState } from 'react';
import CheckBalance from './components/CheckBalance';
import TransferTokens from './components/TransferTokens';
import ApproveTokens from './components/ApproveTokens';
import TransferFrom from './components/TransferFrom';
import CheckAllowance from './components/CheckAllowance';
import SelectCharity from './components/SelectCharity';
import SetDonationPercentage from './components/SetDonationPercentage';
import VoteForCharity from './components/VoteForCharity';
import AddCharity from './components/AddCharity';
import ListCharities from './components/ListCharities';
import CurrentCharity from './components/CurrentCharity'; // Import the new component
import { AppBar, Toolbar, Button, Container, Typography } from '@mui/material';
import './App.css';

const App = () => {
  const [activeComponent, setActiveComponent] = useState('checkBalance');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'checkBalance':
        return <CheckBalance />;
      case 'transferTokens':
        return <TransferTokens />;
      case 'approveTokens':
        return <ApproveTokens />;
      case 'transferFrom':
        return <TransferFrom />;
      case 'checkAllowance':
        return <CheckAllowance />;
      case 'selectCharity':
        return <SelectCharity />;
      case 'setDonationPercentage':
        return <SetDonationPercentage />;
      case 'voteForCharity':
        return <VoteForCharity />;
      case 'addCharity':
        return <AddCharity />;
      case 'listCharities':
        return <ListCharities />;
      case 'currentCharity': // Add case for the new component
        return <CurrentCharity />;
      default:
        return <CheckBalance />;
    }
  };

  return (
    <div>
      
        
      
      <Container>
        <AppBar position="static" style={{ marginTop: '1rem' }}>
          <Toolbar>
            <Button color="inherit" onClick={() => setActiveComponent('checkBalance')}>Check Balance</Button>
            <Button color="inherit" onClick={() => setActiveComponent('transferTokens')}>Transfer Tokens</Button>
            <Button color="inherit" onClick={() => setActiveComponent('approveTokens')}>Approve Tokens</Button>
            <Button color="inherit" onClick={() => setActiveComponent('transferFrom')}>Transfer From</Button>
            <Button color="inherit" onClick={() => setActiveComponent('checkAllowance')}>Check Allowance</Button>
            <Button color="inherit" onClick={() => setActiveComponent('voteForCharity')}>Vote For Charity</Button>
            <Button color="inherit" onClick={() => setActiveComponent('addCharity')}>Add Charity</Button>
            <Button color="inherit" onClick={() => setActiveComponent('listCharities')}>List Charities</Button>
            <Button color="inherit" onClick={() => setActiveComponent('currentCharity')}>Current Charity</Button>
          </Toolbar>
        </AppBar>
        <div style={{ marginTop: '2rem' }}>
          {renderComponent()}
        </div>
      </Container>
    </div>
  );
};

export default App;

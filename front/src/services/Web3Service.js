import Web3 from 'web3';
import ABI from '../ABI.json';  // Adjust the path if needed

const CONTRACT_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

// Create a new Web3 instance using MetaMask's provider
export const web3 = new Web3(window.ethereum);

// Function to get the contract instance using Web3.js and ABI
export function getContract() {
  if (!window.ethereum) throw new Error('No MetaMask installed!');
  const from = localStorage.getItem('wallet');
  return new web3.eth.Contract(ABI, CONTRACT_ADDRESS, { from });
}

// Function to log in with MetaMask
export async function doLogin() {
  if (!window.ethereum) throw new Error('No MetaMask installed!');
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  if (!accounts || !accounts.length) throw new Error('No accounts found!');
  localStorage.setItem('wallet', accounts[0].toLowerCase());
  return accounts[0];
}

// ERC-20 Methods

export async function balanceOf(address) {
  const contract = getContract();
  const balance = await contract.methods.balanceOf(address).call();
  return web3.utils.fromWei(balance, 'ether');
}

export async function transfer(to, amount) {
  const contract = getContract();
  const weiAmount = web3.utils.toWei(amount, 'ether');
  const accounts = await web3.eth.getAccounts();
  return contract.methods.transfer(to, weiAmount).send({ from: accounts[0] });
}

export async function approve(spender, amount) {
  const contract = getContract();
  const weiAmount = web3.utils.toWei(amount, 'ether');
  const accounts = await web3.eth.getAccounts();
  return contract.methods.approve(spender, weiAmount).send({ from: accounts[0] });
}

export async function allowance(owner, spender) {
    const contract = getContract();
    const allowance = await contract.methods.allowance(owner, spender).call();
    return web3.utils.fromWei(allowance, 'ether');
  }

  export async function transferFrom(fromAddress, toAddress, amount) {
    const contract = getContract();
    const weiAmount = web3.utils.toWei(amount, 'ether');
    const accounts = await web3.eth.getAccounts();
    return contract.methods.transferFrom(fromAddress, toAddress, weiAmount).send({ from: accounts[0] });
  }

// Custom Methods

export const addCharity = async (charityAddress) => {
  try {
    const contract = getContract();
    const accounts = await web3.eth.getAccounts();
    return await contract.methods.addCharity(charityAddress).send({ from: accounts[0] });
  } catch (error) {
    console.error('Error in addCharity function:', error);
    throw error;
  }
};

export async function voteForCharity(charityAddress) {
  try {
    const contract = getContract();
    const accounts = await web3.eth.getAccounts();
    return await contract.methods.voteForCharity(charityAddress).send({ from: accounts[0] });
  } catch (error) {
    console.error('Error in voteForCharity function:', error);
    throw error;
  }
}

export async function getCurrentCharity() {
  try {
    const contract = getContract();
    const currentCharity = await contract.methods.currentCharity().call();
    return currentCharity;
  } catch (error) {
    console.error('Error fetching current charity:', error);
    throw error;
  }
}

export async function getCharities() {
  try {
    const contract = getContract();
    let index = 0;
    const charities = [];
    while (true) {
      try {
        const charity = await contract.methods.charities(index).call();
        if (charity.charityAddress === '0x0000000000000000000000000000000000000000') break; // Assuming empty charity address is a break condition
        charities.push(charity);
        index++;
      } catch (error) {
        break; // Break on error (e.g., when index out of bounds)
      }
    }
    return charities;
  } catch (error) {
    console.error('Error fetching charities:', error);
    throw error;
  }
}

export async function selectCharity(charityAddress) {
  try {
    const contract = getContract();
    const accounts = await web3.eth.getAccounts();
    return await contract.methods.selectCharity(charityAddress).send({ from: accounts[0] });
  } catch (error) {
    console.error('Error in selectCharity function:', error);
    throw error;
  }
}

export async function setDonationPercentage(percentage) {
  const contract = getContract();
  const accounts = await web3.eth.getAccounts();
  return contract.methods.setDonationPercentage(percentage).send({ from: accounts[0] });
}

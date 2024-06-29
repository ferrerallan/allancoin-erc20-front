import contract from './contract';
import web3 from './web3';



async function enableMetaMask() {
  await window.ethereum.request({ method: 'eth_requestAccounts' });
}


export async function checkBalance(address) {
  const balance = await contract.methods.balanceOf(address).call();
  // Convert from Wei to Ether
  return web3.utils.fromWei(balance, 'ether');
}

export async function transferTokens(to, amount) {
  await enableMetaMask();
  const accounts = await web3.eth.getAccounts();  // Get the user's account from MetaMask
  const weiAmount = web3.utils.toWei(amount, 'ether');  // Convert the amount to Wei

  // Send the transaction and prompt MetaMask
  return contract.methods.transfer(to, weiAmount).send({ from: accounts[0] });
}

export async function approveTokens(spender, amount) {
  const accounts = await web3.eth.getAccounts();
  return contract.methods.approve(spender, amount).send({ from: accounts[0] });
}

export async function transferFrom(from, to, amount) {
  const accounts = await web3.eth.getAccounts();
  return contract.methods.transferFrom(from, to, amount).send({ from: accounts[0] });
}

export async function checkAllowance(owner, spender) {
  return contract.methods.allowance(owner, spender).call();
}

export async function selectCharity(address) {
  const accounts = await web3.eth.getAccounts();
  return contract.methods.selectCharity(address).send({ from: accounts[0] });
}

export async function setDonationPercentage(percentage) {
  const accounts = await web3.eth.getAccounts();
  return contract.methods.setDonationPercentage(percentage).send({ from: accounts[0] });
}

export async function voteForCharity(address) {
  const accounts = await web3.eth.getAccounts();
  return contract.methods.voteForCharity(address).send({ from: accounts[0] });
}

export async function addCharity(address) {
  const accounts = await web3.eth.getAccounts();
  return contract.methods.addCharity(address).send({ from: accounts[0] });
}

import web3 from './web3';
import ABI from '../ABI.json';

const CONTRACT_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

export default contract;

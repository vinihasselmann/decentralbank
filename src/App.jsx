import { useState } from "react";
import NavBar from "./components/navbar";
import Web3 from "web3";
import "./App.css";
import tether from "./truffle_abis/Tether.json";

function App() {
  const [loading, setLoading] = useState(true);

  
  const [RWD, setRWD] = useState({});
  const [decentralBank, setDecentralBank] = useState({});

  const [stakingBalance, setStakingBalance] = useState("0");
  const [tetherBalance, setTetherBalance] = useState("0");
  const [RWDBalance, setRWDBalance] = useState("0");

  
    async function componentWillMount() {
    loadWeb3()
    loadBlockchainData()
  }

  async function loadBlockchainData() {
    await window.web3.currentProvider.enable();
    web3 = new Web3(window.web3.currentProvider);
    const account = await web3.eth.getAccounts()
    const balance = await web3.eth.getBalance(account[0])
    const networkId = await web3.eth.net.getId()

    console.log(balance, networkId)

  
    const tokenAbi = tether
    const tokenAddress = 0xdB7833b7e5e2dBE7e91970B3F73571123EC8a2b2
    


let tetherContract = new web3.eth.Contract(tokenAbi, tokenAddress);


var WalletTokenBalance = await tetherContract.methods.balanceOf(WalletAddress).call();
console.log(WalletTokenBalance);


var decimals = await tokenContract.methods.decimals().call();
var adjustedBalance = WalletTokenBalance * 10 ** -decimals;
console.log(adjustedBalance);
   
  }

  async function loadWeb3() {
    if(window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non ethereum browser detected. You should consider Metamask!')
    }
  }

  



  

  return (
    <div className="App">
      <NavBar/>

      <div className="dex">
        <div className="wrapper">
          <input type="text" />
          <h3>current balance: </h3>
          <span className="balance">{tetherBalance}</span>
        </div>
      <button
      className="dexbtn"
      onClick={componentWillMount}>clique aqui</button>
      </div>
    </div>
  );
}

export default App;

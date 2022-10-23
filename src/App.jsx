import { useState } from "react";
import NavBar from "./components/navbar";
import Web3 from "web3";
import bank from "./assets/bank.png";
import "./App.css";

function App() {


  // async function componentWillMount() {
  //   loadWeb3()
  //   loadBlockchainData()
  // }

  // async function loadBlockchainData() {
  //   const web3 = window.web3
  //   const accounts = await web3.eth.getAccounts()
  //   console.log(accounts)
  // }

  // async function loadWeb3() {
  //   if(window.ethereum) {
  //     window.web3 = new Web3(window.ethereum)
  //     await window.ethereum.enable()
  //   }
  //   else if (window.web3) {
  //     window.web3 = new Web3(window.web3.currentProvider)
  //   }
  //   else {
  //     window.alert('Non ethereum browser detected. You should consider Metamask!')
  //   }
  // }

  return (
    <div className="App">
      <NavBar/>
    </div>
  );
}

export default App;

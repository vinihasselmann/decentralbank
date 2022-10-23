import { useState } from "react";
import bank from "../../assets/bank.png";
import "./styles.css";

function NavBar() {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, SetWalletAddress] = useState("Connect your wallet 🦊");
  


  const pressedConnectedWallet = async () => {
    if(isConnected) return alert(
      "account already connected: "+walletAddress
    )

    const walletResponse = await connectWallet();
    setIsConnected(walletResponse.connectedStatus);
    SetWalletAddress("🟢"+walletResponse.address)
  }

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const address = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const object = {
          connectedStatus: true,
          status: "Successfully connected",
          address,
        };

        return object;
      } catch (err) {
        return {
          connectedStatus: false,
          status: "Error, wallet not connected",
        };
      }
    } else {
      return {
        connectedStatus: false,
        status: "Metamask is not installed in your browser",
      };
    }
  };

  return (
      <nav className="navbar">
        <a className="wrapper">
          <img className="logo" src={bank} alt="bank image" />
          <span className="title">Decentralbank</span>
        </a>
        <button
        onClick={pressedConnectedWallet}
        className="metamaskButton">{walletAddress}</button>
      </nav>
  );
}

export default NavBar;

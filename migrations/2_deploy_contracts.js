const Tether = artifacts.require('Tether');
const RWD = artifacts.require('RWD');
const DecentralBank = artifacts.require('DecentralBank');

module.exports = async function(deployer, network, accounts) {
  // deploy do USDT
  await deployer.deploy(Tether)
  const tether = await Tether.deployed()

  // deploy do RWD contract
  await deployer.deploy(RWD)
  const rwd = await RWD.deployed()

  // deploy do contrato da plataforma defi
  await deployer.deploy(DecentralBank, rwd.address, tether.address)
  const decentralBank = await DecentralBank.deployed()

  //transferir todos os RWD para a plataforma defi
  await rwd.transfer(decentralBank.address, '1000000000000000000000000')

  //distribuir 100 tether para o investidor
  await tether.transfer(accounts[1], '100000000000000000000')
};


require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/VFpNUPNRnp8cO0RhdSIrFn7s9c7zIM63',
      accounts: ['64f498ff19c89cf2d599992989601e730eb62839e867cde28b8f7063d406bae2'],
    },
  },
};
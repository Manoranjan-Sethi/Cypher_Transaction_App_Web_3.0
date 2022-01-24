
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/VFpNUPNRnp8cO0RhdSIrFn7s9c7zIM63',
      accounts: [ 'c3baee9bbd51b36b368491dcb6ffdd8c515e4befe18c2ce9b02d0aa6953ef22f' ]
    }
  }
}

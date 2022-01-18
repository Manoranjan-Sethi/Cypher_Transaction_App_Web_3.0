//https://eth-goerli.alchemyapi.io/v2/AEmRjDl5IdnbFddvy5vP1sL1Bc084t47

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solodity: '0.8.0',
  network: {
    ropsten: {
      url: 'https://eth-goerli.alchemyapi.io/v2/AEmRjDl5IdnbFddvy5vP1sL1Bc084t47',
      accounts: [ 'c3baee9bbd51b36b368491dcb6ffdd8c515e4befe18c2ce9b02d0aa6953ef22f' ]
    }
  }
}

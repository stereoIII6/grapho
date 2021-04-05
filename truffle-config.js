const HDWalletProvider = require('@truffle/hdwallet-provider')
require('dotenv').config()

const mnemonic = process.env.MNEMONIC

module.exports = {
  networks: {
    cldev: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
    },
    ganache: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*',
    },
    kovan: {
      provider: () => {
        return new HDWalletProvider(mnemonic, process.env.KOVAN_URL)
      },
      network_id: '42',
      skipDryRun: true
    },
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(mnemonic, process.env.RINKEBY_URL)
      },
      network_id: '4',
      skipDryRun: true
    },
    ropsten: {
      provider: () => {
        return new HDWalletProvider(mnemonic, process.env.ROPSTEN_URL)
      },
      network_id: '3',
      skipDryRun: true
    },
    goerli: {
      provider: () => {
        return new HDWalletProvider(mnemonic, process.env.GOERLI_URL)
      },
      network_id: '5',
      skipDryRun: true
    },
    xdai: {
      provider: function () {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          process.env.XDAI_URL)
      },
      network_id: 100,
      gas: 500000,
      gasPrice: 1000000000
    }
  },
  compilers: {
    solc: {
      version: '0.6.6',
    },
  },
}

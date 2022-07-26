import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "@openzeppelin/hardhat-upgrades";
import "hardhat-gas-reporter";
import "solidity-coverage";

dotenv.config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: { enabled: true, runs: 100 },
      evmVersion: "berlin",
      // for smock to mock contracts
      outputSelection: {
        "*": {
          "*": ["storageLayout"],
        },
      },
    },
  },
  networks: {
    ropsten: {
      url: process.env.ROPSTEN_URL || "",
      accounts:
          process.env.DEVNET_PRIVKEY !== undefined
              ? [process.env.DEVNET_PRIVKEY]
              : [],
    },
    rinkeby: {
      url: process.env.RINKEBY_RPC || "",
      accounts:
          process.env.DEVNET_PRIVKEY !== undefined
              ? [process.env.DEVNET_PRIVKEY]
              : [],
    },
    arbitrumOne: {
      url: process.env.ARBITRUM_ONE_RPC || "",
      accounts:
          process.env.DEVNET_PRIVKEY !== undefined
              ? [process.env.DEVNET_PRIVKEY]
              : [],
    },
    arbitrumTestnet: {
      url: process.env.ARBITRUM_TESTNET_RPC || "",
      accounts:
          process.env.DEVNET_PRIVKEY !== undefined
              ? [process.env.DEVNET_PRIVKEY]
              : [],
    },
    matic: {
      url: process.env.MATIC_PRC || "",
      accounts:
          process.env.DEVNET_PRIVKEY !== undefined
              ? [process.env.DEVNET_PRIVKEY]
              : [],
    },
    mumbai: {
      url: process.env.MUMBAI_PRC || "",
      accounts:
          process.env.DEVNET_PRIVKEY !== undefined
              ? [process.env.DEVNET_PRIVKEY]
              : [],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.POLYSCAN_API_KEY,
  },
};

export default config;

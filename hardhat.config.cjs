require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");
require("hardhat-gas-reporter");

module.exports = {
  solidity: "0.8.20",

  gasReporter: {
    enabled: true,
    currency: "INR",
    noColors: true,
    outputFile: "gasReport.txt",
  },
};

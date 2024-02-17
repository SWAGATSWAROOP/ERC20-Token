const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ERC20 Smart Contract Testing", function () {
  let token;
  let accounts;

  before(async () => {
    const contract = await ethers.getContractFactory("LinkToken"); //Fetch ABI
    token = await contract.deploy(1000000000); //Deploying SC with initial supply of 1,000,000,000 tokens
    accounts = await ethers.getSigners(); //getting all accounts
  });

  it("Assigns initial balance to deploying account", async function () {
    const initialSupply = 18000000000; // Initial supply set during deployment
    const balanceOfDeployer = await token.balanceOf(accounts[0].address);
    expect(balanceOfDeployer).to.equal(initialSupply);
  });
});

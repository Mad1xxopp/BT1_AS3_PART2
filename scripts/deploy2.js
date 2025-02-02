const { ethers } = require("hardhat");
const readline = require("readline");

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const initialSupply = await new Promise((resolve) => {
    rl.question("Enter initial supply: ", (answer) => {
      resolve(answer);
    });
  });

  const ownerAddress = await new Promise((resolve) => {
    rl.question("Enter owner address: ", (answer) => {
      resolve(answer);
    });
  });
  
  rl.close();

  const Token = await ethers.getContractFactory("ERC20_smart_contract2");
  const token = await Token.deploy(initialSupply, ownerAddress);
  await token.deployed();

  console.log(`Token deployed to: ${token.address}`);
  console.log(`Owner address set to: ${ownerAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
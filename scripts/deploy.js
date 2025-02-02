const hre = require("hardhat");

async function main() {
  const Token = await hre.ethers.getContractFactory("ERC20_smart_contract");
  const initialSupply = 2000; // Initial supply of 2000 tokens
  const token = await Token.deploy(initialSupply);

  await token.deployed();

  console.log("Token deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

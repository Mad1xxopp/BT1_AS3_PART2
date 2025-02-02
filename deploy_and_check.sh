#!/bin/bash

# Step 1: Compile the contracts
echo "Compiling contracts..."
npx hardhat compile

# Step 2: Deploy the contract to Ganache
echo "Deploying contract..."
npx hardhat run scripts/deploy.js --network ganache

# Step 3: Start Hardhat console and check contract name
echo "Interacting with the deployed contract..."
npx hardhat console --network ganache <<EOF
  const contractAddress = "0x401CB23f76EC9f1d38bB7180Cc853294885C0fed";
  const contract = await ethers.getContractAt("ERC20_smart_contract", contractAddress);
  const name = await contract.name();
  console.log("Contract Name:", name);
EOF

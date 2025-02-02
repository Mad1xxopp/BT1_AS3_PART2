const { ethers } = require("hardhat");

async function main() {
  const contractAddress = "0x5cB6d3eC188a66f4Ecf1d70f6b8b3Eef0d161e96"; 
  const [owner, recipient] = await ethers.getSigners();

  const contract = await ethers.getContractAt("ERC20_smart_contract", contractAddress);

  const ownerBalance = await contract.balanceOf(owner.address);
  const recipientBalance = await contract.balanceOf(recipient.address);
  console.log(`Owner balance: ${ethers.utils.formatUnits(ownerBalance, 18)} tokens`);
  console.log(`Recipient balance: ${ethers.utils.formatUnits(recipientBalance, 18)} tokens`);

  const amount = ethers.utils.parseUnits("10", 18); 
  const tx = await contract.transfer(recipient.address, amount, { gasLimit: 1000000 }); 
  await tx.wait();
  console.log(`Transferred ${ethers.utils.formatUnits(amount, 18)} tokens to ${recipient.address}`);

  const ownerBalanceAfter = await contract.balanceOf(owner.address);
  const recipientBalanceAfter = await contract.balanceOf(recipient.address);
  console.log(`Owner balance after transfer: ${ethers.utils.formatUnits(ownerBalanceAfter, 18)} tokens`);
  console.log(`Recipient balance after transfer: ${ethers.utils.formatUnits(recipientBalanceAfter, 18)} tokens`);

  const lastSender = await contract.getLastSenderAddress();
  const lastReceiver = await contract.getLastReceiverAddress();
  const lastTimestamp = await contract.lastTimestamp();
  console.log(`Last transaction sender: ${lastSender}`);
  console.log(`Last transaction receiver: ${lastReceiver}`);
  console.log(`Last transaction timestamp: ${lastTimestamp}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
# ERC20 Smart Contract Testing

## Project Description
This project involves testing an ERC20 smart contract using Hardhat. As part of the assignment, both the original and modified versions of the contract were tested.

## Team Members
- **Daniarbek Madiyar**
- **Zholdybayev Didar**
- **Zhumabayev Alibek**

## Features
The project includes:
- Deployment of an ERC20 token.
- Testing the main functions of the smart contract (balance, token transfer, events, etc.).
- Modifying the contract constructor to allow setting the owner and initial token supply.
- Testing the updated version of the smart contract.

## Installation and Execution
### Install Dependencies
```sh
npm install
```

### Compile the Smart Contract
```sh
npx hardhat compile
```

### Run Tests
```sh
npx hardhat test
```
![PART22](https://github.com/user-attachments/assets/a5f8ebed-9f6d-4d3d-81a5-c799c0a6957a)

### Deploy Smart Contract to Ganache
```sh
npx hardhat run scripts/deploy2.js --network ganache
```
![PART2](https://github.com/user-attachments/assets/d5d94348-486b-4458-ac9d-57a5b266cf24)

## Test Results
After running the tests, the following results were obtained:
```
  ERC20_smart_contract
    ✔ Deployment should assign total supply to the owner
    ✔ Should transfer tokens between accounts
    ✔ Should update last sender and receiver correctly
    ✔ Should update last transaction timestamp
    ✔ Should emit TransactionTracked event
    ✔ Should not update state variables if transfer fails

  ERC20_smart_contract2
    ✔ Deployment should assign total supply to the specified owner
    ✔ Should transfer tokens between accounts
    ✔ Should update last sender and receiver correctly
    ✔ Should update last transaction timestamp
    ✔ Should emit TransactionTracked event
    ✔ Should not update state variables if transfer fails

  12 passing (3s)
```

## Examples
**Contract Deployment:**
```
Enter initial supply: 1000
Enter owner address: 0x20AC9092433CFcc33bc242fF9f1580a3ed651fA7
Token deployed to: 0xA00dEd98Cc8837A3ED0501a0724086abB24627eb
Owner address set to: 0x20AC9092433CFcc33bc242fF9f1580a3ed651fA7
```

## Useful Links
- [Hardhat Documentation](https://hardhat.org/tutorial)
- [Hardhat Testing Guide](https://hardhat.org/tutorial/testing-contracts)
- [Hardhat Contract Deployment](https://hardhat.org/hardhat-runner/docs/guides/test-contracts)

## License
This project is licensed under the terms specified in the LICENSE file.

---
*Project completed as part of the Blockchain Technologies 1 course.*


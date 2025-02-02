require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.20",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545", // Ganache local blockchain
      accounts: [
        "0xb3fb93231a4c3f95e8a606354b63e9b36fa917ebad2462ace64746917bed3e1e",
        "0xdec2ca160b97859651f4d55cd9c508889eebff33052945b8e0c954577744f1c7",
        "0x8d8b29bf4ebe3e4002754a1b95f783c8daf5511ff0891c6e8fe5ed5d92347bfa"
      ],
      // Disable ENS
      ens: { enabled: false },
    },
  },
};

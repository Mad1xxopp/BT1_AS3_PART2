// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20_smart_contract is ERC20 {
    address public lastSender;
    address public lastReceiver;
    uint256 public lastTimestamp;

    // Event declaration
    event TransactionTracked(address indexed sender, address indexed receiver, uint256 timestamp);

    constructor(uint256 initialSupply) ERC20("AITU_SE-2316-17_MDA_Token", "MDA") {
        _mint(msg.sender, initialSupply * (10 ** decimals()));
    }

    function transfer(address recipient, uint256 amount) public override returns (bool) {
        lastSender = msg.sender;
        lastReceiver = recipient;
        lastTimestamp = block.timestamp;

        // Perform the transfer
        bool success = super.transfer(recipient, amount);

        // Emit the event after transfer
        emit TransactionTracked(lastSender, lastReceiver, lastTimestamp);

        return success;
    }

    function getLastTransactionTimestamp() public view returns (uint256) {
        return lastTimestamp;
    }

    function getLastSenderAddress() public view returns (address) {
        return lastSender;
    }

    function getLastReceiverAddress() public view returns (address) {
        return lastReceiver;
    }

    function timestampToHumanReadable(uint256 timestamp) internal pure returns (string memory) {
        uint256 secondsInOneDay = 86400; // Number of seconds in one day
        uint256 dayCount = timestamp / secondsInOneDay; // Number of full days
        uint256 hourCount = (timestamp % secondsInOneDay) / 3600; // Remaining hours
        uint256 minuteCount = (timestamp % 3600) / 60; // Remaining minutes
        uint256 secondCount = timestamp % 60; // Remaining seconds

        return string(abi.encodePacked(
            uintToStr(dayCount), " days, ", uintToStr(hourCount), " hours, ",
            uintToStr(minuteCount), " minutes, ", uintToStr(secondCount), " seconds"
        ));
    }

    function uintToStr(uint256 _i) internal pure returns (string memory _uintAsString) {
        if (_i == 0) {
            return "0";
        }

        uint256 j = _i;
        uint256 length;
        while (j != 0) {
            length++;
            j /= 10;
        }

        bytes memory bstr = new bytes(length);
        uint256 k = length - 1;
        while (_i != 0) {
            bstr[k--] = bytes1(uint8(48 + _i % 10)); // Ensure bytes1 is used
            _i /= 10;
        }
        return string(bstr);
    }
}

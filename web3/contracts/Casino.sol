//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Casino is ERC20 {
    constructor(uint256 initialSupply) ERC20("ChipToken", "CT") {
        _mint(msg.sender, initialSupply);
    }
}

pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC777/ERC777.sol";

contract VAIToken is ERC777 {

    constructor(
        string memory _name,        // name of token
        string memory _symbol,      // symbol of token
        uint256 _totalSupply        // total supply of tokens
    )
    ERC777(_name, _symbol, new address[](0))
    public
    {
        _mint(msg.sender, msg.sender, _totalSupply * 10 ** 18, "", "");
    }
}

pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC777/ERC777.sol";
import "openzeppelin-solidity/contracts/GSN/GSNRecipientSignature.sol";

contract VAIToken is ERC777, GSNRecipientSignature {

    constructor(
        string memory _name,        // name of token
        string memory _symbol,      // symbol of token
        uint256 _totalSupply,       // total supply of tokens
        address _trustedSigner      // sender of feeless transfers
    )
    ERC777(_name, _symbol, new address[](0))
    GSNRecipientSignature(_trustedSigner)
    public
    {
        _mint(_msgSender(), _msgSender(), _totalSupply * 10 ** 18, "", "");
    }
}
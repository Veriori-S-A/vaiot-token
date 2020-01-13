var VAIToken = artifacts.require("./VAIToken.sol");
require('openzeppelin-test-helpers/configure')({ web3 });
const{ singletons } = require('openzeppelin-test-helpers');

module.exports = async function(deployer, network, accounts) {
    if (network === 'development') {
        await singletons.ERC1820Registry(accounts[0]);
    }
    const _name = "VAIOT Token";
    const _symbol = "vAI";
    const _totalSupply = 720000000;
    await deployer.deploy(VAIToken, _name, _symbol, _totalSupply);
};

// const { expectEvent, singletons, constants } = require('@openzeppelin/test-helpers');
// const { ZERO_ADDRESS } = constants;

// const VAIToken = artifacts.require('VAIToken');

// contract('VAIOT Token', function ([trustedSigner, registryFunder, creator]) {
//     const name = "VAIOT Token";
//     const symbol = "vAI";
//     const totalSupply = 720000000;

//     beforeEach(async function () {
//         this.erc1820 = await singletons.ERC1820Registry(registryFunder);
//         this.token = await VAIToken.new(name, symbol, totalSupply, trustedSigner, { from: creator });
//     });

//     it('has a name', async function () {
//         const tokenName = await this.token.name();
//         tokenName.should.be.equal(name);
//     });

//     it('has a symbol', async function () {
//         const tokenSymbol = await this.token.symbol();
//         tokenSymbol.should.be.equal(symbol);

//     });

//     it('assigns the total supply to the creator', async function () {
//         const tokenTotalSupply = await this.token.totalSupply();
//         const tokenCreatorBalance = await this.token.balanceOf(creator);

//         tokenTotalSupply.should.be.bignumber.equal(totalSupply);
//         tokenCreatorBalance.should.be.bignumber.equal(totalSupply);

//         await expectEvent.inConstruction(this.token, 'Transfer', {
//             from: ZERO_ADDRESS,
//             to: creator,
//             value: totalSupply,
//         });
//     });
// });

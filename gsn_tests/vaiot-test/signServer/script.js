const axios = require('axios');
const Web3 = require("web3");
const { GSNProvider } = require("@openzeppelin/gsn-provider");




const approveFunction = async ({
    from, to, encodedFunctionCall, txFee, gasPrice, gas, nonce, relayerAddress, relayHubAddress,
  }) => {
      let response;
      try {
          response = await axios.post('http://localhost:3001/checkSig', {
              from, to, encodedFunctionCall, txFee, gasPrice, gas, nonce, relayerAddress, relayHubAddress,
          }, {
            'Access-Control-Allow-Origin': 'localhost:3001'
          });
      } catch (error) {
          console.error(error);
      }

      console.log(response.data);
      return response.data;
  };


(async () => {
  const web3 = new Web3(new GSNProvider("http://localhost:8545", { approveFunction }));

  const abi = require('../build/contracts/VAIToken.json').abi;

  const address = '0x5b1869D9A4C187F2EAa108f3062412ecf0526b24';

  const instance = new web3.eth.Contract(abi, address);

  const accounts = await web3.eth.getAccounts();

  const tx = await instance.methods.transfer(accounts[3], 33).send({ from: accounts[2] });

  console.log(tx);
}) ()

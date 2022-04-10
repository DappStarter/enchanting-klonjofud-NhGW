require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace indoor sure security trap cruise ridge toss hidden gloom swear stand'; 
let testAccounts = [
"0x4c0a5a908f45613afd1287561be38903624d15f0ea5ba89362884b264ef4649d",
"0x3e7b57e84c4c6e4e7e3823f423b14e14fc59aaa0698f50823ba844a0d2944fb1",
"0xa4163671fdd58e889e8b355cdbc66c8835f3d5adf78359273d309b524fcc7015",
"0xdaecfba43b1a1e3c2fd8529b4cedd8218587c2f7e30b4004629633c965c8484e",
"0xd2607aa00449f4cbc906555fc986fcc7402da06fdd77b9c44e84bab671ec776e",
"0x2fe8e9a3494c4cdb43c14d78d54e43615459a7a5b06d8108968da4d4c5c08c74",
"0xab03f56f7bb87dc1d0f1037cb522abf6f737e475ecd226435b1efac5bdf74eb2",
"0xb89a6ac5b71ad7ff52d258fe1e7099c281626ae519767d112090e9d3d3904010",
"0xbc3da747f33f179a55f1faad943e11e29d014351cd8e61e34bd49fb0849d754d",
"0x5c907bfd881958b9b2456a8eaf3e5ba0f338bbd769273804287c5ae6d1c32914"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



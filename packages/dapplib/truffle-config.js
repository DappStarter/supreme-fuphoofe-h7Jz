require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note oil puppy half kiwi sunset skate'; 
let testAccounts = [
"0x0d6558b0aa80b7782320766750ff8f5a740d81932459c536f0d30900775da7f4",
"0xc75d5590a143e0f6a7b0643d715b24b1d500dfc23ae9320f1f3629b86f3a8582",
"0x99ac04a56a4bbdc0c26302b2e9fc6ad1f246a3ea9d52d5eb6ce823b1675a960e",
"0x4a37da7eec1cf2d8ff02413343a687fa7fe5e4726adc1660a6fcc33cfefd4565",
"0x269c93de617e627f6190de43d81ffaaece96abf62b531ee89b461f2d0b141488",
"0x5e157c23051956d94cd7fdfaea9246299006d1c4553ed16c6a2f5990435f9a3d",
"0x5e83cc2fa3ccc122266cc13b2b13ebbc2f2e2ea5e42c311ef707bc51331c3681",
"0x0446ba343b096b16bb5726dd58ae0907bd172c3904243e938d4e544ac8f06542",
"0xe8f58c314e269ddcdf2fcfe76be71ee39dba412059cdc298ccd294072e0afbdf",
"0xb2bc09a2624bf084a55cb28d16e08ac6d310feefeffd3a2b8f92f7088c169239"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


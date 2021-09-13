/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { Factory, FactoryInterface } from '../Factory';

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'appProxy',
        type: 'address',
      },
    ],
    name: 'NewApp',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'app',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_appName',
        type: 'string',
      },
      {
        internalType: 'address',
        name: '_relayer',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: '_onlyDKGAddress',
        type: 'bool',
      },
      {
        internalType: 'bool',
        name: '_aggregateLogin',
        type: 'bool',
      },
      {
        internalType: 'uint128',
        name: '_appId',
        type: 'uint128',
      },
    ],
    name: 'createNewApp',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'defaultBandwidth',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'defaultStorage',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint128',
        name: '',
        type: 'uint128',
      },
    ],
    name: 'idToAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'isNode',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_app',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
    ],
    name: 'isRegisteredUser',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'logic',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_node',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: '_value',
        type: 'bool',
      },
    ],
    name: 'modifyNode',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'onlyDKGAdress',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_app',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'store',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'bandwidth',
        type: 'uint256',
      },
    ],
    name: 'setAppLevelLimit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_storage',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_bandwidth',
        type: 'uint256',
      },
    ],
    name: 'setDefaultLimit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_logic',
        type: 'address',
      },
    ],
    name: 'setLogic',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_newTreshold',
        type: 'uint256',
      },
    ],
    name: 'setTreshold',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'thresholdVoting',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalNodes',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'totalVotes',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_app',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: '_value',
        type: 'bool',
      },
    ],
    name: 'voteUser',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'voteUserRegistration',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x60806040526001600b5534801561001557600080fd5b50600080546001600160a01b031916339081178255604051909182917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506119a1806100666000396000f3fe60806040523480156200001157600080fd5b5060043610620001a85760003560e01c8063a0cfccca11620000ed578063c7e1562c1162000099578063e5372863116200006f578063e537286314620003db578063f07e11e414620003f2578063f2fde38b146200040957620001a8565b8063c7e1562c1462000382578063c884c7b31462000399578063d7dfa0dd14620003c757620001a8565b8063ae3d1bc211620000cf578063ae3d1bc21462000329578063ae7c10f71462000340578063bc84a269146200036c57620001a8565b8063a0cfccca1462000308578063ad4fbe5d146200031257620001a8565b806362bc7048116200015957806376ba3a56116200012f57806376ba3a5614620002e25780638da5cb5b14620002ec5780639592d42414620002fe57620001a8565b806362bc7048146200027c578063715018a614620002c15780637185700014620002cb57620001a8565b80631c45da16116200018f5780631c45da161462000201578063377dd46e146200023857806339be3028146200025657620001a8565b80630175015214620001ad57806301b6334f14620001e8575b600080fd5b620001d3620001be36600462000e48565b60026020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b620001f2600b5481565b604051908152602001620001df565b620001d36200021236600462000ea3565b600560209081526000938452604080852082529284528284209052825290205460ff1681565b6200025462000249366004620010c6565b600991909155600a55565b005b620001d36200026736600462000e48565b60076020526000908152604090205460ff1681565b620002a86200028d36600462001090565b6008602052600090815260409020546001600160a01b031681565b6040516001600160a01b039091168152602001620001df565b6200025462000420565b62000254620002dc36600462000e48565b620004ca565b620001f260095481565b6000546001600160a01b0316620002a8565b620001f260035481565b620001f2600a5481565b620002546200032336600462000f8f565b62000548565b620002546200033a36600462000eec565b620007a0565b620002a86200035136600462000e48565b6004602052600090815260409020546001600160a01b031681565b620002546200037d366004620010ad565b600b55565b620001d36200039336600462000e6c565b62000954565b620001f2620003aa36600462000e6c565b600660209081526000928352604080842090915290825290205481565b600154620002a8906001600160a01b031681565b62000254620003ec36600462000f2c565b62000abb565b620002546200040336600462000f5a565b62000bef565b620002546200041a36600462000e48565b62000cb6565b6000546001600160a01b03163314620004805760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b03163314620005265760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640162000477565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6fffffffffffffffffffffffffffffffff81166000908152600860205260409020546001600160a01b031615620005ce5760405162461bcd60e51b815260206004820152602360248201527f416e2061707020616c726561647920637265617465642077697468207468697360448201526208125960ea1b606482015260840162000477565b6001546040516000916001600160a01b031690620005f9908890309089908890889060240162001162565b60408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16632c1d084360e21b17905251620006449062000deb565b6200065192919062001136565b604051809103906000f0801580156200066e573d6000803e3d6000fd5b506fffffffffffffffffffffffffffffffff8316600090815260086020526040902080546001600160a01b0319166001600160a01b038316179055600954600a54919250620006c09183919062000bef565b60405163f2fde38b60e01b815233600482015281906001600160a01b0382169063f2fde38b90602401600060405180830381600087803b1580156200070457600080fd5b505af115801562000719573d6000803e3d6000fd5b505050506001600160a01b03821660008181526004602090815260408083208054336001600160a01b031990911681179091556007835292819020805460ff19168a15151790558051928352908201929092527f337b370a2315ab60da78eb82b94c2c31a2421b08fcc0c9c8f0e0b919b09e29e1910160405180910390a150505050505050565b3360009081526002602052604090205460ff166200080b5760405162461bcd60e51b815260206004820152602160248201527f46756e6374696f6e2063616e206f6e6c792063616c6c6564206279206e6f64656044820152607360f81b606482015260840162000477565b6001600160a01b03808416600090815260056020908152604080832093861683529281528282203383529052205460ff1615158115151415620008915760405162461bcd60e51b815260206004820152600d60248201527f416c726561647920766f74656400000000000000000000000000000000000000604482015260640162000477565b6001600160a01b0383811660009081526005602090815260408083209386168352928152828220338352905220805460ff1916821580159190911790915562000914576001600160a01b03808416600090815260066020908152604080832093861683529290529081208054916200090983620011d0565b91905055506200094f565b6001600160a01b03808416600090815260066020908152604080832093861683529290529081208054916200094983620011b6565b91905055505b505050565b6001600160a01b03821660009081526007602052604081205460ff166200097e5750600162000ab5565b60016003541015620009f95760405162461bcd60e51b815260206004820152602a60248201527f506c656173652061646420736f6d65206e6f64657320746f2061757468656e7460448201527f6963617465207573657200000000000000000000000000000000000000000000606482015260840162000477565b6001600160a01b038381166000908152600460205260409020541662000a885760405162461bcd60e51b815260206004820152602a60248201527f4170702063616c6c696e67207468652066756e6374696f6e206973206e6f742060448201527f7265676973746572656400000000000000000000000000000000000000000000606482015260840162000477565b50600b546001600160a01b0380841660009081526006602090815260408083209386168352929052205410155b92915050565b6000546001600160a01b0316331462000b175760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640162000477565b6001600160a01b03821660009081526002602052604090205460ff161515811515141562000b885760405162461bcd60e51b815260206004820152601260248201527f4e6f206368616e676520696e2076616c75650000000000000000000000000000604482015260640162000477565b6001600160a01b0382166000908152600260205260409020805460ff1916821580159190911790915562000bd3576003805490600062000bc883620011d0565b919050555062000beb565b6003805490600062000be583620011b6565b91905055505b5050565b6000546001600160a01b0316331462000c4b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640162000477565b604051638a8b093360e01b8152600481018390526024810182905283906001600160a01b03821690638a8b093390604401600060405180830381600087803b15801562000c9757600080fd5b505af115801562000cac573d6000803e3d6000fd5b5050505050505050565b6000546001600160a01b0316331462000d125760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640162000477565b6001600160a01b03811662000d905760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840162000477565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b61077a806200121b83390190565b80356001600160a01b038116811462000e1157600080fd5b919050565b8035801515811462000e1157600080fd5b80356fffffffffffffffffffffffffffffffff8116811462000e1157600080fd5b60006020828403121562000e5a578081fd5b62000e658262000df9565b9392505050565b6000806040838503121562000e7f578081fd5b62000e8a8362000df9565b915062000e9a6020840162000df9565b90509250929050565b60008060006060848603121562000eb8578081fd5b62000ec38462000df9565b925062000ed36020850162000df9565b915062000ee36040850162000df9565b90509250925092565b60008060006060848603121562000f01578283fd5b62000f0c8462000df9565b925062000f1c6020850162000df9565b915062000ee36040850162000e16565b6000806040838503121562000f3f578182fd5b62000f4a8362000df9565b915062000e9a6020840162000e16565b60008060006060848603121562000f6f578283fd5b62000f7a8462000df9565b95602085013595506040909401359392505050565b600080600080600060a0868803121562000fa7578081fd5b853567ffffffffffffffff8082111562000fbf578283fd5b818801915088601f83011262000fd3578283fd5b81358181111562000fe85762000fe862001204565b604051601f8201601f19908116603f0116810190838211818310171562001013576200101362001204565b816040528281528b60208487010111156200102c578586fd5b8260208601602083013785602084830101528099505050505050620010546020870162000df9565b9350620010646040870162000e16565b9250620010746060870162000e16565b9150620010846080870162000e27565b90509295509295909350565b600060208284031215620010a2578081fd5b62000e658262000e27565b600060208284031215620010bf578081fd5b5035919050565b60008060408385031215620010d9578182fd5b50508035926020909101359150565b60008151808452815b818110156200110f57602081850181015186830182015201620010f1565b81811115620011215782602083870101525b50601f01601f19169290920160200192915050565b60006001600160a01b0384168252604060208301526200115a6040830184620010e8565b949350505050565b600060a082526200117760a0830188620010e8565b6001600160a01b03968716602084015294909516604082015291151560608301526fffffffffffffffffffffffffffffffff1660809091015292915050565b600081620011c857620011c8620011ee565b506000190190565b6000600019821415620011e757620011e7620011ee565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfe608060405260405161077a38038061077a833981016040819052610022916102f7565b61004d60017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd61040f565b6000805160206107338339815191521461007757634e487b7160e01b600052600160045260246000fd5b6100838282600061008a565b5050610474565b610093836100f4565b6040516001600160a01b038416907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a26000825111806100d45750805b156100ef576100ed83836101b460201b6100291760201c565b505b505050565b610107816101e060201b6100551760201c565b61016e5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b8061019360008051602061073383398151915260001b6101e660201b61005b1760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b60606101d98383604051806060016040528060278152602001610753602791396101e9565b9392505050565b3b151590565b90565b6060833b6102485760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610165565b600080856001600160a01b03168560405161026391906103c0565b600060405180830381855af49150503d806000811461029e576040519150601f19603f3d011682016040523d82523d6000602084013e6102a3565b606091505b5090925090506102b48282866102be565b9695505050505050565b606083156102cd5750816101d9565b8251156102dd5782518084602001fd5b8160405162461bcd60e51b815260040161016591906103dc565b60008060408385031215610309578182fd5b82516001600160a01b038116811461031f578283fd5b60208401519092506001600160401b038082111561033b578283fd5b818501915085601f83011261034e578283fd5b8151818111156103605761036061045e565b604051601f8201601f19908116603f011681019083821181831017156103885761038861045e565b816040528281528860208487010111156103a0578586fd5b6103b1836020830160208801610432565b80955050505050509250929050565b600082516103d2818460208701610432565b9190910192915050565b60006020825282518060208401526103fb816040850160208701610432565b601f01601f19169190910160400192915050565b60008282101561042d57634e487b7160e01b81526011600452602481fd5b500390565b60005b8381101561044d578181015183820152602001610435565b838111156100ed5750506000910152565b634e487b7160e01b600052604160045260246000fd5b6102b0806104836000396000f3fe60806040523661001357610011610017565b005b6100115b61002761002261005e565b6100a3565b565b606061004e838360405180606001604052806027815260200161027d602791396100c7565b9392505050565b3b151590565b90565b600061009e7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b3660008037600080366000845af43d6000803e8080156100c2573d6000f35b3d6000fd5b6060833b6101425760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e7472616374000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff168560405161016a91906101fd565b600060405180830381855af49150503d80600081146101a5576040519150601f19603f3d011682016040523d82523d6000602084013e6101aa565b606091505b50915091506101ba8282866101c4565b9695505050505050565b606083156101d357508161004e565b8251156101e35782518084602001fd5b8160405162461bcd60e51b81526004016101399190610219565b6000825161020f81846020870161024c565b9190910192915050565b600060208252825180602084015261023881604085016020870161024c565b601f01601f19169190910160400192915050565b60005b8381101561026757818101518382015260200161024f565b83811115610276576000848401525b5050505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a164736f6c6343000802000a360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a164736f6c6343000802000a';

export class Factory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<Factory> {
    return super.deploy(overrides || {}) as Promise<Factory>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Factory {
    return super.attach(address) as Factory;
  }
  connect(signer: Signer): Factory__factory {
    return super.connect(signer) as Factory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FactoryInterface {
    return new utils.Interface(_abi) as FactoryInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Factory {
    return new Contract(address, _abi, signerOrProvider) as Factory;
  }
}

const walletListData = [
  {
    'id': 1,
    'name': 'Datagen funds',
    'addresses': [
      {
        'id': 1,
        'wallet_id': 1,
        'address': '8d3733ff04e64ebb867d53eb913d3f6a',
        'name': 'Datagen address 1',
        'balance': 14.4878,
      },
    ],
  },
  {
    'id': 2,
    'name': 'Minga funds',
    'addresses': [
      {
        'id': 2,
        'wallet_id': 2,
        'address': '2304cef1fec744e0aca8d83c69907edc',
        'name': 'Minga address 1',
        'balance': 12.3778,
      },
      {
        'id': 3,
        'wallet_id': 2,
        'address': '37289c6fd53246f5abccd52f496495c8',
        'name': 'Minga address 2',
        'balance': 4.1866,
        'parent_id': 2,
      },
    ],
  },
  {
    'id': 3,
    'name': 'Futurize funds',
    'addresses': [
      {
        'id': 4,
        'wallet_id': 3,
        'address': '148a05996ffc4b83a76c417a63da63bd',
        'name': 'Futurize address 1',
        'balance': 9.8269,
      },
      {
        'id': 5,
        'wallet_id': 3,
        'address': 'd7d924479168442c9a4e1681a9da45d4',
        'name': 'Futurize address 2',
        'balance': 0.463,
        'parent_id': 4,
      },
      {
        'id': 6,
        'wallet_id': 3,
        'address': '7fead25e97554f088087daab9c71d425',
        'name': 'Futurize address 3',
        'balance': 1.8299,
        'parent_id': 5,
      },
    ],
  },
  {
    'id': 4,
    'name': 'Kyagoro funds',
    'addresses': [
      {
        'id': 7,
        'wallet_id': 4,
        'address': '2b69c111c0a24d82afa42e7d3525d3f4',
        'name': 'Kyagoro funds 1',
        'balance': 17.7448,
      },
    ],
  },
  {
    'id': 5,
    'name': 'Xiix funds',
    'addresses': [
      {
        'id': 8,
        'wallet_id': 5,
        'address': 'd3151aff210f49f8b4bcaf03f9f69d32',
        'name': 'Xiix funds 1',
        'balance': 5.465,
      },
    ],
  },
];

export { walletListData };

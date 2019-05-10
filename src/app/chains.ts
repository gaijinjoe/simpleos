export const defaultChainsJSON = [
	{
		id: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
		symbol: 'EOS',
		name: 'EOS MAINNET',
		firstApi: 'https://hapi.eosrio.io',
		historyApi: 'https://eos.hyperion.eosrio.io/v2',
		eosrioBP: 'eosriobrazil',
		proxyRegistry: 'regproxyinfo',
		lastNode: '',
		features: {
			history: true,
			send: true,
			resource: true,
			vote: true,
			staking: true,
			dapps: true,
			addAcc: true,
			newAcc: true,
			forum: true,
			rex: true,
		},
		system: [
			'eosio',
			'eosio.token',
			'eosio.msig',
			'eosio.forum'
		],
		endpoints: [
			// {url: 'https://api.eosrio.io', owner: 'EOS Rio', latency: 0},
			{url: 'https://hapi.eosrio.io', owner: 'EOS Rio', latency: 0},
			{url: 'https://eu.eosdac.io', owner: 'eosDAC', latency: 0},
			// {url: 'https://mainnet.eoscalgary.io', owner: 'eoscalgary', latency: 0},
			// {url: 'https://api.dpos.africa/', owner: 'EOS Africa', latency: 0},
			// {url: 'https://api1.eosasia.one', owner: 'EOS Asia', latency: 0},
			{url: 'https://api.eoslaomao.com', owner: 'EOS Asia', latency: 0},
			// {url: 'https://mainnet.genereos.io', owner: 'EOS Asia', latency: 0},
			{url: 'https://node1.eosphere.io', owner: 'EOS Asia', latency: 0},
			{url: 'https://proxy.eosnode.tools', owner: 'Proxy Node', latency: 0},
			{url: 'https://history.cryptolions.io', owner: 'EOS Cryptolions', latency: 0, version: 'mongo'}
		],
		explorers: [
			{
				name: 'Bloks.io',
				account_url: 'https://bloks.io/account/',
				tx_url: 'https://bloks.io/transaction/'
			},
			{
				name: 'EOSX',
				account_url: 'https://www.eosx.io/account/',
				tx_url: 'https://www.eosx.io/tx/'
			},
			{
				name: 'eosq',
				account_url: 'https://eosq.app/account/',
				tx_url: 'https://eosq.app/tx/'
			},
			{
				name: 'EOS FLARE',
				account_url: 'https://eosflare.io/account/',
				tx_url: 'https://eosflare.io/tx/'
			},
			{
				name: 'EOSPark',
				account_url: 'https://eospark.com/account/',
				tx_url: 'https://eospark.com/tx/'
			}
		],
		exchanges: {
			bitfinexdep1: {
				memo_size: 32,
				pattern: /^[a-f0-9]+$/gm
			},
			krakenkraken: {
				pattern: /^[0-9]+$/gm
			},
			binancecleos: {
				memo_size: 9,
				pattern: /^[0-9]+$/gm
			},
			huobideposit: {
				pattern: /^[0-9]+$/gm
			},
			poloniexeos1: {
				memo_size: 16,
				pattern: /^[a-f0-9]+$/gm
			},
		}
	},
	{
		id: 'd5a3d18fbb3c084e3b1f3fa98c21014b5f3db536cc15d08f9f6479517c6a3d86',
		symbol: 'BOS',
		name: 'BOS MAINNET',
		firstApi: 'https://api.bos.eosrio.io',
		historyApi: 'https://bos.hyperion.eosrio.io/v2',
		lastNode: '',
		eosrioBP: 'bosriobrasil',
		proxyRegistry: 'regproxyinfo',
		features: {
			history: true,
			send: true,
			resource: true,
			vote: true,
			staking: true,
			dapps: true,
			addAcc: true,
			newAcc: true,
			forum: false,
			rex: true,
		},
		system: [
			'eosio',
			'eosio.token',
			'eosio.msig'
		],
		endpoints: [
			{url: 'https://hapi.bos.eosrio.io', owner: 'BOS Rio', latency: 0, version: 'native'},
			{url: 'https://bos.eosargentina.io', owner: 'EOS Argentina', latency: 0},
			{url: 'https://api.bossweden.org', owner: 'BOS Sweden', latency: 0, version: 'native'},
			{url: 'https://api.bos42.io', owner: 'ESO42', latency: 0},
			{url: 'http://bos.eosio.sg:8888', owner: 'EOS SG', latency: 0},
			{url: 'https://api-bos.oraclechain.io', owner: 'Oracle Chain', latency: 0},
		],
		explorers: [
			{
				name: 'EOSX',
				account_url: 'https://bos.eosx.io/account/',
				tx_url: 'https://bos.eosx.io/tx/'
			},
			{
				name: 'Bloks.io',
				account_url: 'https://bos.bloks.io/account/',
				tx_url: 'https://bos.bloks.io/tx/'
			}
		]
	},
	{
		id: 'cfe6486a83bad4962f232d48003b1824ab5665c36778141034d75e57b956e422',
		symbol: 'MEETONE',
		name: 'MEET.ONE MAINNET',
		firstApi: 'https://fullnode.meet.one',
		historyApi: 'https://meetone.hyperion.eosrio.io/v2',
		eosrioBP: '',
		lastNode: '',
		proxyRegistry: 'proxies.m',
		features: {
			history: true,
			send: true,
			resource: true,
			vote: true,
			staking: true,
			dapps: true,
			addAcc: true,
			newAcc: true,
			forum: false,
			rex: false,
		},
		system: [
			'eosio',
			'eosio.token',
			'eosio.msig'
		],
		endpoints: [
			{url: 'https://fullnode.meet.one', owner: 'MEET.ONE', latency: 0},
			{url: 'https://api.meetone.eostribe.io', owner: 'EOS TRIBE', latency: 0},
			{url: 'https://api.meetone.alohaeos.com', owner: 'AlohaEOS', latency: 0},
			{url: 'https://meetone.eossweden.eu', owner: 'EOS Sweden', latency: 0},
			// {url: 'http://api-meetone.eossf.net:8888', owner: 'eossf', latency: 0},
			// {url: 'https://meetone.eosphere.io', owner: 'Eosphere', latency: 0},
			// {url: 'https://meetone.eosn.io', owner: 'eosn', latency: 0},
			// {url: 'https://meetone.eosargentina.io', owner: 'Eos Argentina', latency: 0}
		],
		explorers: [
			{
				name: 'EOSX',
				account_url: 'https://meetone.eosx.io/account/',
				tx_url: 'https://meetone.eosx.io/tx/'
			}
		]
	},
	{
		id: '4667b205c6838ef70ff7988f6e8257e8be0e1284a2f59699054a018f743b1d11',
		symbol: 'TLOS',
		name: 'TELOS MAINNET',
		firstApi: 'https://api.tlos.goodblock.io',
		historyApi: '',
		eosrioBP: '',
		lastNode: '',
		proxyRegistry: '',
		features: {
			history: true,
			send: true,
			resource: true,
			vote: true,
			staking: true,
			dapps: false,
			addAcc: true,
			newAcc: true,
			forum: false,
			rex: false,
		},
		system: [
			'eosio',
			'eosio.token',
			'eosio.msig'
		],
		endpoints: [
			{url: 'https://api.eos.miami', owner: 'Telos Miami', latency: 0},
			{url: 'https://api.tlos.goodblock.io', owner: 'Telos Goodblock', latency: 0},
			{url: 'https://telos.caleos.io', owner: 'Telos Caleos', latency: 0}
		],
		explorers: [
			{
				name: 'EOSX',
				account_url: 'https://telos.eosx.io/account/',
				tx_url: 'https://telos.eosx.io/tx/'
			}
		]
	},
	{
		id: '73647cde120091e0a4b85bced2f3cfdb3041e266cbbe95cee59b73235a1b3b6f',
		symbol: 'WBI',
		name: 'WORBLI MAINNET',
		firstApi: 'https://api.worbli.eosrio.io',
		historyApi: '',
		lastNode: '',
		eosrioBP: 'eosrio',
		proxyRegistry: '',
		features: {
			history: true,
			send: true,
			resource: true,
			vote: false,
			staking: true,
			dapps: true,
			addAcc: true,
			newAcc: false,
			forum: false,
			rex: false,
		},
		system: [
			'eosio',
			'eosio.token',
			'eosio.msig'
		],
		endpoints: [
			{url: 'https://api.worbli.eosrio.io', owner: 'EOS Rio - Worbli', latency: 0, version: 'native'},
			{url: 'https://api.worblisweden.org', owner: 'EOS Sweden - Worbli', latency: 0},
			{url: 'https://api.worbli.eostribe.io', owner: 'EOS Tribe - Worbli', latency: 0, version: 'elastic'}
		],
		explorers: [
			{
				name: 'EOSX',
				account_url: 'https://worbli.eosx.io/account/',
				tx_url: 'https://worbli.eosx.io/tx/'
			},
			{
				name: 'Bloks.io',
				account_url: 'https://worbli.bloks.io/account/',
				tx_url: 'https://worbli.bloks.io/tx/'
			}
		]
	},
	{
		id: 'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473',
		symbol: 'EOS',
		name: 'EOS JUNGLE TESTNET',
		firstApi: 'https://jungle2.cryptolions.io:443',
		historyApi: 'https://jungle.hyperion.eosrio.io/v2',
		eosrioBP: '',
		lastNode: '',
		proxyRegistry: '',
		features: {
			history: true,
			send: true,
			resource: true,
			vote: true,
			staking: true,
			dapps: true,
			addAcc: true,
			newAcc: true,
			forum: false,
			rex: true,
		},
		system: [
			'eosio',
			'eosio.token',
			'eosio.msig'
		],
		endpoints: [
			{url: 'https://junglehistory.cryptolions.io:4433', owner: 'Jungle 2', latency: 0},
		],
		explorers: [
			{
				name: 'EOSX',
				account_url: 'https://jungle.eosx.io/account/',
				tx_url: 'https://jungle.eosx.io/tx/'
			}
		]
	},
	{
		id: '33cc2426f1b258ef8c798c34c0360b31732ea27a2d7e35a65797850a86d1ba85',
		symbol: 'BOS',
		name: 'BOS TESTNET',
		firstApi: 'https://boscore.eosrio.io',
		historyApi: '',
		eosrioBP: 'bosriobrazil',
		lastNode: '',
		proxyRegistry: '',
		features: {
			history: true,
			send: true,
			resource: true,
			vote: true,
			staking: true,
			dapps: false,
			addAcc: true,
			newAcc: true,
			forum: false,
			rex: true,
		},
		system: [
			'eosio',
			'eosio.token',
			'eosio.msig'
		],
		endpoints: [
			{url: 'https://boscore.eosrio.io', owner: 'BOS Rio', latency: 0, version: 'mongo'},
			{url: 'https://bostest.api.blockgo.vip', owner: 'blockgo', latency: 0, version: ''},
		],
		explorers: [
			{
				name: 'EOSX',
				account_url: 'https://bos-test.eosx.io/account/',
				tx_url: 'https://bos-test.eosx.io/tx/'
			}
		]
	},
	{
		id: '5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191',
		symbol: 'EOS',
		name: 'EOS KYLIN TESTNET',
		firstApi: 'https://api-kylin.eoslaomao.com',
		historyApi: '',
		eosrioBP: 'eosriobrazil',
		lastNode: '',
		proxyRegistry: '',
		features: {
			history: true,
			send: true,
			resource: true,
			vote: true,
			staking: true,
			dapps: false,
			addAcc: true,
			newAcc: true,
			forum: false,
			rex: true,
		},
		system: [
			'eosio',
			'eosio.token',
			'eosio.msig'
		],
		endpoints: [
			{url: 'https://api-kylin.eoslaomao.com', owner: 'EOS LaoMao', latency: 0},
			{url: 'https://api-kylin.eosasia.one', owner: 'EOS Asia', latency: 0},
		],
		explorers: [
			{
				name: 'EOSX',
				account_url: 'https://kylin.eosx.io/account/',
				tx_url: 'https://kylin.eosx.io/tx/'
			},
			{
				name: 'Bloks.io',
				account_url: 'https://kylin.bloks.io/account/',
				tx_url: 'https://kylin.bloks.io/tx/'
			}
		]
	},
	{
		id: '246cbad5405bf2d8e8888adab0a9bd2ea49693edbd69ee4cd0316c64a9f68d60',
		symbol: 'LLM',
		name: 'LIBERLAND TESTNET',
		firstApi: 'https://liberland.eossweden.org',
		historyApi: 'https://liberland.hyperion.eosrio.io/v2',
		eosrioBP: '',
		lastNode: '',
		proxyRegistry: '',
		features: {
			history: true,
			send: true,
			resource: true,
			vote: false,
			staking: true,
			dapps: false,
			addAcc: true,
			newAcc: false,
			forum: false,
			rex: false,
		},
		system: [
			'eosio',
			'eosio.token',
			'eosio.msig'
		],
		endpoints: [
			// {url: 'http://alpha.ll.eosrio.io:6001', owner: 'EOS Rio Brazil', latency: 0},
			{url: 'https://liberland.eossweden.org', owner: 'EOS Sweden', latency: 0}
		],
		explorers: []
	},
	{
		id: '7136e3e32a458bb99cf6973ab5055869d25830607b9e78593769e1be52fb6f20',
		symbol: 'MEETONE',
		name: 'MEET.ONE TESTNET',
		firstApi: 'https://sidechain-test-history.meet.one',
		historyApi: '',
		eosrioBP: '',
		proxyRegistry: 'proxies.m',
		lastNode: '',
		features: {
			history: true,
			send: true,
			resource: true,
			vote: true,
			staking: true,
			dapps: true,
			addAcc: true,
			newAcc: true,
			forum: false,
			rex: false,
		},
		system: [
			'eosio',
			'eosio.token',
			'eosio.msig'
		],
		endpoints: [
			{url: 'https://sidechain-test-history.meet.one', owner: 'MEET.ONE', latency: 0}
		],
		explorers: []
	}
];

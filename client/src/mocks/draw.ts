import type { MatchPairTypes } from '@/modules/MatchPair/types';

export const drawList: Pick<MatchPairTypes, 'pair' | 'fightNumber' | 'toNextRound'>[] = [
	{
		pair: [
			{ firstName: 'Ivan', lastName: 'Bokov', region: 'Stavropol', coach: 'Bubnov' },
			{ firstName: 'Alexey', lastName: 'Petrov', region: 'Stavropol', coach: 'Pupkov' },
		],
		fightNumber: 1,
		toNextRound: true,
	},
	{
		pair: [
			{ firstName: 'Dmitry', lastName: 'Sidorov', region: 'Krasnodar', coach: 'Ivanov' },
			{ firstName: 'Nikita', lastName: 'Egorov', region: 'Krasnodar', coach: 'Smirnov' },
		],
		fightNumber: 2,
		toNextRound: true,
	},
	{
		pair: [
			{ firstName: 'Egor', lastName: 'Kozlov', region: 'Rostov', coach: 'Belov' },
			{ firstName: 'Sergey', lastName: 'Orlov', region: 'Rostov', coach: 'Volkov' },
		],
		fightNumber: 3,
		toNextRound: true,
	},
	{
		pair: [{ firstName: 'Roman', lastName: 'Makhov', region: 'Stavropol', coach: 'Bubnov' }],
		fightNumber: 1,
		toNextRound: true,
	},
	{
		pair: [
			{ firstName: 'Pavel', lastName: 'Makarov', region: 'Voronezh', coach: 'Zaytsev' },
			{ firstName: 'Andrey', lastName: 'Titov', region: 'Voronezh', coach: 'Nikolaev' },
		],
		fightNumber: 4,
	},
];

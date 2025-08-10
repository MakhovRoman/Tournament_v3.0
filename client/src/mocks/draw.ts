import type { MatchPairTypes } from '@/modules/MatchPair/types';

export const drawList: Pick<MatchPairTypes, 'pair' | 'fightNumber' | 'toNextRound'>[] = [
	{
		pair: [
			{ firstName: 'Ivan', lastName: 'Bokov', region: 'Stavropol', coach: 'Bubnov' },
			{ firstName: 'Alexey', lastName: 'Petrov', region: 'Stavropol', coach: 'Pupkov' },
		],
		fightNumber: 1,
	},
	{
		pair: [
			{ firstName: 'Dmitry', lastName: 'Sidorov', region: 'Krasnodar', coach: 'Ivanov' },
			{ firstName: 'Nikita', lastName: 'Egorov', region: 'Krasnodar', coach: 'Smirnov' },
		],
		fightNumber: 2,
	},
	{
		pair: [
			{ firstName: 'Egor', lastName: 'Kozlov', region: 'Rostov', coach: 'Belov' },
			{ firstName: 'Sergey', lastName: 'Orlov', region: 'Rostov', coach: 'Volkov' },
		],
		fightNumber: 3,
	},
	{
		pair: [
			{ firstName: 'Pavel', lastName: 'Makarov', region: 'Voronezh', coach: 'Zaytsev' },
			{ firstName: 'Andrey', lastName: 'Titov', region: 'Voronezh', coach: 'Nikolaev' },
		],
		fightNumber: 4,
	},
];

import type { MatchPairTypes } from "@/modules/MatchPair/types";

export const drawList: MatchPairTypes[] = [
		{
			pair: [
				{ firstName: 'Ivan', lastName: 'Bokov', region: 'Stavropol', coach: 'Bubnov', isActive: true },
				{ firstName: 'Alexey', lastName: 'Petrov', region: 'Stavropol', coach: 'Pupkov', isActive: true },
			],
			fightNumber: 1,
		},
		{
			pair: [
				{ firstName: 'Dmitry', lastName: 'Sidorov', region: 'Krasnodar', coach: 'Ivanov', isActive: true },
				{ firstName: 'Nikita', lastName: 'Egorov', region: 'Krasnodar', coach: 'Smirnov', isActive: true },
			],
			fightNumber: 2,
		},
		{
			pair: [
				{ firstName: 'Egor', lastName: 'Kozlov', region: 'Rostov', coach: 'Belov', isActive: true },
				{ firstName: 'Sergey', lastName: 'Orlov', region: 'Rostov', coach: 'Volkov', isActive: true },
			],
			fightNumber: 3,
		},
		{
			pair: [
				{ firstName: 'Pavel', lastName: 'Makarov', region: 'Voronezh', coach: 'Zaytsev', isActive: true },
				{ firstName: 'Andrey', lastName: 'Titov', region: 'Voronezh', coach: 'Nikolaev', isActive: true },
			],
			fightNumber: 4,
		},
		{
			pair: [{ firstName: 'Ilya', lastName: 'Fedorov', region: 'Volgograd', coach: 'Kuznetsov', isActive: true }],
			fightNumber: 5,
		},
	];

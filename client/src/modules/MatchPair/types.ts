import type { ParticipantType } from '@/components/draw/participant/types';

export type MatchPairTypes = {
	pair: ParticipantType[];
	fightNumber: number;
	rounds: number;
	row: number;
	toNextRound?: boolean;
	winner?: 0 | 1 | null;
};

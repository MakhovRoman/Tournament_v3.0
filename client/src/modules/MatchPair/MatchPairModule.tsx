import { clsx } from 'clsx/lite';
import { Participant } from '@/components/draw/participant';
import styles from './styles.module.scss';
import type { MatchPairTypes } from './types';

export const MatchPairModule = ({
	pair,
	fightNumber,
	rounds,
	row,
	toNextRound = false,
	winner = null,
}: MatchPairTypes) => {
	const firstFighter = pair[0];
	const secondFighter = pair[1] ?? null;

	const getRoundsCells = (rounds: number) => {
		return new Array(rounds).fill(null).map((_, i) => i + 1);
	};

	return (
		<div className={styles.wrapper}>
			<div
				className={clsx(
					styles.matchPair,
					!secondFighter && styles.matchPair_single,
					toNextRound && styles.matchPair_toNextRound,
				)}
			>
				<Participant
					firstName={firstFighter.firstName}
					lastName={firstFighter.lastName}
					region={firstFighter.region}
					coach={firstFighter.coach}
				/>
				{secondFighter && (
					<Participant
						firstName={secondFighter.firstName}
						lastName={secondFighter.lastName}
						region={secondFighter.region}
						coach={secondFighter.coach}
					/>
				)}
			</div>
			{/* {getRoundsCells(rounds).map((item) => {
				return (
					<div className={styles.round} data-round={item} data-row={row} key={item}>
						<span className={clsx(styles.detectLine, !secondFighter && styles.detectLine_noPair)}></span>
						{secondFighter && <span className={styles.detectLine}></span>}
					</div>
				);
			})} */}
		</div>
	);
};

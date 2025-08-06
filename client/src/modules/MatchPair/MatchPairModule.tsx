import { clsx } from 'clsx/lite';
import { Participant } from '@/components/draw/participant';
import type { MatchPairTypes } from './types';
import styles from './styles.module.scss';

export const MatchPairModule = (props: MatchPairTypes) => {
	const firstFighter = props.pair[0];
	const secondFighter = props.pair[1] ?? null;

	return (
		<div className={clsx(
			styles.matchPair,
			!secondFighter && styles.matchPair_single
		)}>
			<Participant
				firstName={firstFighter.firstName}
				lastName={firstFighter.lastName}
				region={firstFighter.region}
				coach={firstFighter.coach}
				isActive={firstFighter.isActive}
			/>
			{secondFighter && (
				<Participant
					firstName={secondFighter.firstName}
					lastName={secondFighter.lastName}
					region={secondFighter.region}
					coach={secondFighter.coach}
					isActive={secondFighter.isActive}
				/>
			)}
		</div>
	);
};

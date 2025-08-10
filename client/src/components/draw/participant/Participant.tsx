import { getFlag } from '@/utils/getFlag';
import styles from './styles.module.scss';
import type { ParticipantType } from './types';

export const Participant = ({ firstName, lastName, region, coach }: ParticipantType) => {
	const fullName = `${firstName} ${lastName}`;

	return (
		<div className={styles.participant}>
			<div className={styles.participant_flag}>
				<img src={getFlag(region)} alt={region} />
			</div>
			<div className={styles.participant_description}>
				<div className={styles.participant_fullName}>{fullName}</div>
				<div className={styles.participant_coach}>{coach}</div>
			</div>
		</div>
	);
};

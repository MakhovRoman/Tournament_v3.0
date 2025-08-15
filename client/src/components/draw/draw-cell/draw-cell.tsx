import React from 'react';
import styles from './styles.module.scss';
import type { DrawCellType } from './types';

export const DrawCell = ({ roundIdx, cellIdx, match }: DrawCellType) => {
	return (
		<React.Fragment key={`${roundIdx}-${cellIdx}`}>
			<div className={styles.drawCell}>
				<div
					className={styles.drawCell_space}
					data-round={!match.toNextRound && `${roundIdx}`}
					data-next-round={match.toNextRound}
					data-cell={!match.toNextRound && `top-first`}
				></div>
				<div
					className={styles.drawCell_line}
					data-next-round={match.toNextRound ?? 'false'}
					data-round={match.toNextRound && `${roundIdx}`}
					data-cell={match.toNextRound ? `top-first` : `bottom-first`}
				></div>
				<div
					className={styles.drawCell_space}
					data-next-round={match.toNextRound ?? 'false'}
					data-round={roundIdx}
					data-cell={match.toNextRound ? `bottom-first` : `top-second`}
				></div>
				<div
					className={styles.drawCell_line}
					data-next-round={match.toNextRound}
					data-round={roundIdx}
					data-cell={!match.toNextRound && `bottom-second`}
				></div>
			</div>

			{match?.toNextRound && match.pair.length > 1 && (
				<div className={styles.drawCell}>
					<div className={styles.drawCell_space}></div>
					<div
						className={styles.drawCell_line}
						data-next-round={match.toNextRound}
						data-round={roundIdx}
						data-cell={!match.toNextRound ? 'top-first' : `top-second`}
					></div>
					<div
						className={styles.drawCell_space}
						data-next-round={match.toNextRound}
						data-round={roundIdx}
						data-cell={!match.toNextRound ? 'bottom-first' : `bottom-second`}
					></div>
					<div className={styles.drawCell_line}></div>
				</div>
			)}
		</React.Fragment>
	);
};

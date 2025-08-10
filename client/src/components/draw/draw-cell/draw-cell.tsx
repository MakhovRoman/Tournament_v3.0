import React from "react";
import styles from './styles.module.scss';
import type { DrawCellType } from "./types";

export const DrawCell = ({
    roundIdx,
    cellIdx,
    match
}:DrawCellType) => {
	return (
		<React.Fragment key={`${roundIdx}-${cellIdx}`}>
			<div className={styles.drawCell}>
				<div className={styles.drawCell_space}>
                    {match.toNextRound ?
                        `${roundIdx}-${cellIdx}-bottom`
                        :
                        `${roundIdx}-${cellIdx}-top-first`
                    }
                </div>
				<div className={styles.drawCell_line} data-round={roundIdx} data-fighter={cellIdx}>
					{
                        match.toNextRound ?
                            `${roundIdx}-${cellIdx}-top`
                            :
                            `${roundIdx}-${cellIdx}-bottom-first`
                    }
				</div>
				<div className={styles.drawCell_space}>
					{match.toNextRound ?
                        `${roundIdx}-${cellIdx}-bottom`
                        :
                        `${roundIdx}-${cellIdx}-top-second`
                    }
				</div>
				<div className={styles.drawCell_line}></div>
			</div>

			{match?.toNextRound && match.pair.length > 1 && (
				<div className={styles.drawCell}>
					<div className={styles.drawCell_space}></div>
					<div className={styles.drawCell_line}>
						{roundIdx}-{cellIdx}-top
					</div>
					<div className={styles.drawCell_space}>
						{roundIdx}-{cellIdx}-bottom
					</div>
					<div className={styles.drawCell_line}></div>
				</div>
			)}
		</React.Fragment>
	);
};

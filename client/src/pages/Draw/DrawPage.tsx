import { clsx } from 'clsx/lite';
import React from 'react';
import { DrawCell } from '@/components/draw/draw-cell';
import { drawList } from '@/mocks/draw';
import { MatchPairModule } from '@/modules/MatchPair';
import { Route } from '@/routes/draw/{$drawId}.lazy';
import { getDrawGrid } from '@/utils/draw';
import styles from './styles.module.scss';

export const DrawPage = () => {
	const { drawId } = Route.useParams();

	const { columns, rows } = getDrawGrid(drawList);
	let x = rows;

	const getRoundsRows = (index: number) => {
		x = index === 0 ? x : Math.floor(x / 2);
		const matrix = new Array(x)
			.fill(null)
			.map((_, i) => i)
			.reverse();
		return matrix.map((_) =>
			new Array(x).fill(null).map((_, i) => {
				if (i === 0) {
					return rows;
				}

				return rows % 2;
			}),
		);
	};

	const getRoundsColumns = (columns: number) => {
		return new Array(columns).fill(null).map((_, i) => getRoundsRows(i));
	};

	return (
		<div className={clsx(styles.draw_wrapper)}>
			<div className={clsx(styles.draw_pairs)}>
				{drawList.map((item, index) => {
					return (
						<MatchPairModule
							pair={item.pair}
							fightNumber={item.fightNumber}
							key={index}
							rounds={columns}
							row={index + 1}
							toNextRound={item.toNextRound}
						/>
					);
				})}
			</div>
			{getRoundsColumns(columns).map((item, roundIdx) => {
				return (
					<div className={styles.draw_rounds} key={roundIdx}>
						{item.map((_, cellIdx) => {
							const match = drawList[cellIdx];
							return <DrawCell roundIdx={roundIdx} cellIdx={cellIdx} match={match} />;
						})}
					</div>
				);
			})}
		</div>
	);
};

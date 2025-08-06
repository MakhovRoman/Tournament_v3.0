import { Route } from '@/routes/draw/{$drawId}.lazy';
import styles from './styles.module.scss';
import { MatchPairModule } from '@/modules/MatchPair';
import { getDrawGrid } from '@/utils/draw';
import { drawList } from '@/mocks/draw';
import { clsx } from 'clsx/lite';

export const DrawPage = () => {
	const { drawId } = Route.useParams();

	const { columns, rows } = getDrawGrid(drawList);

	return (
		<div className={clsx(
			styles.draw_wrapper,
			styles[`grid-${columns}`],
			styles[`grid-rows-${rows}`]
		)}>
			<div className={styles.draw_pairs}>
				{
					drawList.map((item, index) => {
						return  <MatchPairModule pair={item.pair} fightNumber={item.fightNumber} key={index}/>;
					})
				}
			</div>
			<div>
				{rows}
			</div>
		</div>
	);
};

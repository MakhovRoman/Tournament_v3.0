import { Link } from '@tanstack/react-router';
import styles from './styles.module.scss';
import type { Props } from './types';

export const ElemLink = ({ isGlobal = false, text, source }: Props) => {
	return isGlobal ? (
		<a href={source} className={styles.link}>
			{text}
		</a>
	) : (
		<Link to={source} className={styles.link}>
			{text}
		</Link>
	);
};

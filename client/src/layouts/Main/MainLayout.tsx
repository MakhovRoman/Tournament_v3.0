import styles from './style.module.scss';
import type { Props } from './types';

export const MainLayout = ({ children }: Props) => {
	return (
		<main className={styles.main}>
			<div className={styles.wrapper}>{children}</div>
		</main>
	);
};

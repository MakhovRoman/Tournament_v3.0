import styles from './styles.module.scss';

export const NotFoundPage = () => {
	return (
		<div className={styles.notFound}>
			<h1>404</h1>
			<p>
				The page you ware looking for <br /> does not exist{' '}
			</p>
		</div>
	);
};

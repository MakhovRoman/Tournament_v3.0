import type * as React from 'react';
import styles from './styles.module.scss';
import type { TitleProps } from './types';

export const Title: React.FC<TitleProps> = ({ children, titleSize }) => {
	const Heading = titleSize as keyof React.JSX.IntrinsicElements;

	return (
		<Heading as={titleSize} className={styles.title}>
			{children}
		</Heading>
	);
};

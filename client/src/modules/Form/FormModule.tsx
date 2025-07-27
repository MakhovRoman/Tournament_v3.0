import { Title } from '@components/shared/Title';
import type * as React from 'react';
import styles from './styles.module.scss';
import type { Props } from './types';

export const FormModule: React.FC<Props> = ({ children, title }) => {
	return (
		<div className={styles.form_layout}>
			<Title titleSize="h1">{title}</Title>
			{children}
		</div>
	);
};

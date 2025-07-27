import styles from './styles.module.scss';
import type { Props } from './types';

export const AuthFormLayout = ({ children }: Props) => {
	return <div className={styles.auth_form}>{children}</div>;
};

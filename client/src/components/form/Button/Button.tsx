import { Button as AntdButton } from 'antd';
import type { ButtonProps } from './types';
import styles from './styles.module.scss';

export const Button = ({
	label,
	size = 'large',
    onClick,
	disabled,
	loading,
}: ButtonProps) => {
    return (
		<AntdButton
			className={styles.button}
			type='primary'
			size={size}
			disabled={disabled}
			loading={loading}
			onClick={onClick}
		>
			{label}
		</AntdButton>
    )
}

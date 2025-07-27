import { Input } from 'antd';
import styles from './styles.module.scss';
import type { ElemInputProps } from './types';

export const ElemInput = ({
	id,
	disabled,
	status,
	size = 'large',
	type,
	value,
	variant,
	placeholder,
	onChange,
}: ElemInputProps) => {
	return (
		<Input
			className={styles.input}
			id={id}
			disabled={disabled}
			placeholder={placeholder}
			status={status}
			size={size}
			type={type}
			value={value}
			variant={variant}
			onChange={onChange}
		/>
	);
};

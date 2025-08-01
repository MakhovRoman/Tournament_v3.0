import { Input as AntdInput } from 'antd';
import type { ElemInputProps } from './types';
import styles from './styles.module.scss';

export const Input = ({
	id,
	disabled,
	status,
	size = 'large',
	type,
	value,
	placeholder,
	onChange,
}: ElemInputProps) => {
	return (
		<AntdInput
			className={styles.input}
			id={id}
			disabled={disabled}
			placeholder={placeholder}
			status={status}
			size={size}
			type={type}
			value={value}
			onChange={onChange}
		/>
	);
};

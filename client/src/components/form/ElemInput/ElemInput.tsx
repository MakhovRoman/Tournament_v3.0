import { theme as antdTheme, ConfigProvider, Input } from 'antd';
import styles from './styles.module.scss';
import type { ElemInputProps } from './types';

export const ElemInput = ({
	id,
	disabled,
	status,
	size = 'large',
	type,
	value,
	variant = 'filled',
	placeholder,
	onChange,
}: ElemInputProps) => {
	return (
		<ConfigProvider
			theme={{
				algorithm: antdTheme.defaultAlgorithm,
				token: {
					borderRadius: 0,
					colorPrimaryBgHover: '#8CAAB9',
					colorPrimary: '#455A64',
				},
				components: {
					Input: {
						colorPrimary: '#455A64',
						hoverBg: '#8CAAB9',
						colorPrimaryHover: '#8CAAB9',
						colorPrimaryActive: '#8CAAB9',
					},
				},
			}}
		>
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
		</ConfigProvider>
	);
};

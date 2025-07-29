import { theme as antdTheme, Button, ConfigProvider } from 'antd';
import { ElemLink } from '@/components/shared/Link/ElemLink';
import type { Props } from '@/modules/ActionButton/types';
import styles from './styles.module.scss';

export const ActionButton = ({
	label,
	size = 'large',
	description,
	linkSource,
	linkText,
	isLinkGlobal,
	onClick,
	disabled,
	loading,
}: Props) => {
	const isLink = linkSource && linkText;

	return (
		<ConfigProvider
			theme={{
				algorithm: antdTheme.defaultAlgorithm,
				token: {
					borderRadius: 0,
				},
				components: {
					Button: {
						colorPrimary: '#FFC107',
						primaryColor: '#000000',
						colorPrimaryHover: '#FFFFFF',
						colorPrimaryActive: '#8CAAB9',
					},
				},
			}}
		>
			<div className={styles.wrapper}>
				<Button type='primary' size={size} disabled={disabled} loading={loading} onClick={onClick}>
					{label}
				</Button>
				{(isLink || description) && (
					<div className={styles.description}>
						<span>{description}</span>
						&nbsp;
						{isLink && <ElemLink source={linkSource} text={linkText} isGlobal={isLinkGlobal} />}
					</div>
				)}
			</div>
		</ConfigProvider>
	);
};

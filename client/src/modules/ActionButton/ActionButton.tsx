import { Button } from '@components/form/Button';
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
		<div className={styles.wrapper}>
			<Button
				label={label}
				size={size}
				disabled={disabled}
				loading={loading}
				onClick={onClick}
			/>
			{(isLink || description) && (
				<div className={styles.description}>
					<span>{description}</span>
					&nbsp;
					{isLink && <ElemLink source={linkSource} text={linkText} isGlobal={isLinkGlobal} />}
				</div>
			)}
		</div>
	);
};

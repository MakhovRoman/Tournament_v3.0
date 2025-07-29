import type { ButtonProps } from 'antd';

export type Props = ButtonProps & {
	label: string;
	linkText?: string;
	linkSource?: string;
	isLinkGlobal?: boolean;
	description?: string;
};

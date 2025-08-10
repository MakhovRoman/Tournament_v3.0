import { Modal as AntModal, type ModalProps } from 'antd';

export const Modal = ({ title, open, onOk, onCancel, okText, cancelText }: ModalProps) => {
	return (
		<AntModal
			title={title}
			open={open}
			onOk={onOk}
			onCancel={onCancel}
			okText={okText}
			cancelText={cancelText}
		/>
	);
};

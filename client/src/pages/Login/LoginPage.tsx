import { ElemInput } from '@/components/form/ElemInput';
import { AuthFormLayout } from '@/layouts/AuthForm';
import { FormModule } from '@/modules/Form';

export const LoginPage = () => {
	return (
		<AuthFormLayout>
			<FormModule title="Login">
				<ElemInput size="large" type="text" />
				<ElemInput size="large" type="password" />
			</FormModule>
		</AuthFormLayout>
	);
};

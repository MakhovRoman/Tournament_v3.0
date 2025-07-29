import { ElemInput } from '@/components/form/ElemInput';
import { AuthFormLayout } from '@/layouts/AuthForm';
import { ActionButton } from '@/modules/ActionButton/ActionButton';
import { FormModule } from '@/modules/Form';

export const LoginPage = () => {
	return (
		<AuthFormLayout>
			<FormModule title='Login'>
				<ElemInput type='text' placeholder='Login' id='login' />
				<ElemInput type='password' placeholder='Password' id='password' />
			</FormModule>
			<ActionButton label='Register' linkSource='/register' linkText='Sign Up' description="Don't have an account?" />
		</AuthFormLayout>
	);
};

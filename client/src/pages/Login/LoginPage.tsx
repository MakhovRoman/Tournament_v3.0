import { Input } from '@/components/form/Input';
import { AuthFormLayout } from '@/layouts/AuthForm';
import { ActionButton } from '@/modules/ActionButton/ActionButton';
import { FormModule } from '@/modules/Form';

export const LoginPage = () => {
	return (
		<AuthFormLayout>
			<FormModule title='Login'>
				<Input type='text' placeholder='Login' id='login' />
				<Input type='password' placeholder='Password' id='password' />
			</FormModule>
			<ActionButton label='Register' linkSource='/register' linkText='Sign Up' description="Don't have an account?" />
		</AuthFormLayout>
	);
};

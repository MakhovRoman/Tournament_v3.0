import { Input } from '@/components/form/Input';
import { AuthFormLayout } from '@/layouts/AuthForm';
import { ActionButton } from '@/modules/ActionButton';
import { FormModule } from '@/modules/Form';

export const RegisterPage = () => {
	return (
		<AuthFormLayout>
			<FormModule title='Register'>
				<Input type='text' placeholder='First Name' id='firstName' />
				<Input type='text' placeholder='Last Name' id='lastName' />
				<Input type='email' placeholder='Email' id='email' />
				<Input type='password' placeholder='Password' id='password' />
				<Input type='password' placeholder='Confirm Password' id='confirm_password' />
			</FormModule>
			<ActionButton label='Sign Up' linkSource='/login' linkText='Log in' description='Already have an account?' />
		</AuthFormLayout>
	);
};

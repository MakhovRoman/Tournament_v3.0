import { ElemInput } from '@/components/form/ElemInput';
import { AuthFormLayout } from '@/layouts/AuthForm';
import { FormModule } from '@/modules/Form';

export const RegisterPage = () => {
	return (
		<AuthFormLayout>
			<FormModule title='Register'>
				<ElemInput type='text' placeholder='First Name' id='firstName'/>
				<ElemInput type='text' placeholder='Last Name' id='lastName'/>
				<ElemInput type='email' placeholder='Email' id='email'/>
				<ElemInput type='password' placeholder='Password' id='password'/>
				<ElemInput type='password' placeholder='Confirm Password' id='confirm_password'/>
			</FormModule>
		</AuthFormLayout>
	);
};

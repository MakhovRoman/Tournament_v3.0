import { Link } from '@tanstack/react-router';
import { ElemInput } from '@/components/form/ElemInput';
import { AuthFormLayout } from '@/layouts/AuthForm';
import { FormModule } from '@/modules/Form';

export const LoginPage = () => {
	return (
		<AuthFormLayout>
			<FormModule title='Login'>
				<ElemInput type='text' placeholder='Login' id='login' />
				<ElemInput type='password' placeholder='Password' id='password' />
			</FormModule>
			<Link to='/register'>Register</Link>
		</AuthFormLayout>
	);
};

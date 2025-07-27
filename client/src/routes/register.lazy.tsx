import { createLazyFileRoute } from '@tanstack/react-router';
import { RegisterPage } from '@/pages/Register';

export const Route = createLazyFileRoute('/register')({
	component: RegisterPage,
});

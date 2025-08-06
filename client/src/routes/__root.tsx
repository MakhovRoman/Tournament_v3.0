import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { MainLayout } from '@/layouts/Main';
import { NotFoundPage } from '@/pages/404';

export const Route = createRootRoute({
	component: RootComponent,
	notFoundComponent: NotFoundPage,
});

function RootComponent() {
	return (
		<>
			<MainLayout>
				<Outlet />
			</MainLayout>
			<TanStackRouterDevtools />
		</>
	);
}

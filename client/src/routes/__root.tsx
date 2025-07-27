import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { MainLayout } from '@/layouts/Main';

export const Route = createRootRoute({
	component: RootComponent,
	notFoundComponent: () => <div>404 Not found</div>,
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

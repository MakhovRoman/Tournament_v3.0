import { createRouter } from '@tanstack/react-router';
import { routeTree } from '@/routeTree.gen';

export const router = createRouter({ routeTree, basepath: '/' });

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

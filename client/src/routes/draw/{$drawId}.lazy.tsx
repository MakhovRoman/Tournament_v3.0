import { createLazyFileRoute } from '@tanstack/react-router';
import { DrawPage } from '@/pages/Draw';

export const Route = createLazyFileRoute('/draw/{$drawId}')({
	component: DrawPage,
});

// function RouteComponent() {
//   const { drawId } = Route.useParams();

//   return (
//     <div>Hello {drawId}</div>
//   )
// }

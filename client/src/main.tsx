import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { router } from '@app/router';
import { RouterProvider } from '@tanstack/react-router';

import '@/assets/styles/index.scss';


const rootElement = document.getElementById('root');

if (rootElement && !rootElement.innerHTML) {
	const root = createRoot(rootElement);

	root.render(
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>,
	);
}

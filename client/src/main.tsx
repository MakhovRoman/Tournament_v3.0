import { router } from '@app/router';
import { RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider, theme as antdTheme } from 'antd';
import '@/assets/styles/index.scss';


const rootElement = document.getElementById('root');

if (rootElement && !rootElement.innerHTML) {
	const root = createRoot(rootElement);

	root.render(
		<ConfigProvider theme={{
			algorithm: antdTheme.defaultAlgorithm,
			token: {
				borderRadius: 0,
			},
		}}>
			<StrictMode>
				<RouterProvider router={router} />
			</StrictMode>
		</ConfigProvider>
	);
}

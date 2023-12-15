import { $, component$, useOnDocument, useStyles$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { Head } from './components/head/head';

import '@fontsource-variable/space-grotesk';
import globalStyles from './global.css?inline';
import { useI18n } from './utils/i18n';

export default component$(() => {
	/**
	 * The root of a QwikCity site always start with the <QwikCityProvider> component,
	 * immediately followed by the document's <head> and <body>.
	 *
	 * Don't remove the `<head>` and `<body>` elements.
	 */
	useStyles$(globalStyles);
	useOnDocument('qinit', $(useI18n));

	return (
		<QwikCityProvider>
			<Head />
			<body class="bg-white dark:bg-neutral-800" lang="en">
				<RouterOutlet />
				<ServiceWorkerRegister />
			</body>
		</QwikCityProvider>
	);
});

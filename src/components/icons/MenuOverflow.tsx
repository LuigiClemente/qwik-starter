import type { QwikIntrinsicElements } from '@builder.io/qwik';

export function MenuOverflow(props: QwikIntrinsicElements['svg'], key: string) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props} key={key}>
			<circle cx="16" cy="8" r="2" fill="#888888"></circle>
			<circle cx="16" cy="16" r="2" fill="#888888"></circle>
			<circle cx="16" cy="24" r="2" fill="#888888"></circle>
		</svg>
	);
}

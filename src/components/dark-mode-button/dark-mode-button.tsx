import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { isBrowser } from '@builder.io/qwik/build';
import { Moon } from '../icons/Moon';
import { Sun } from '../icons/Sun';

export const DarkModeButton = component$(() => {
	// null mean unintialized
	const darkMode = useSignal<null | boolean>(null);

	// initialize value
	useTask$(() => {
		if (isBrowser) {
			const storedTheme = localStorage.getItem('dark-mode');
			if (storedTheme) {
				// try to get from localeStorage
				darkMode.value = storedTheme === 'dark';
			} else {
				// if not found, then we will use user prefered color scheme
				darkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
			}
		}
	});

	// handle value changes
	useTask$(({ track }) => {
		track(() => darkMode.value);
		if (isBrowser) {
			// we must not handle unitialized value here, because it will never null here
			if (darkMode.value === null) return;
			localStorage.setItem('dark-mode', darkMode.value ? 'dark' : 'light');
			document.documentElement.classList.toggle('dark', darkMode.value);
		}
	});

	return (
		<button
			onClick$={() => {
				darkMode.value = !darkMode.value;
			}}
		>
			{darkMode.value ? <Sun /> : <Moon />}
		</button>
	);
});

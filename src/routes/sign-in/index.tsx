import { $, component$, useSignal } from '@builder.io/qwik';
import { Link, useNavigate } from '@builder.io/qwik-city';
import XCircleIcon from '~/components/icons/XCircleIcon';
import { loginMutation } from '~/providers/shop/account/account';

export default component$(() => {
	const navigate = useNavigate();
	const email = useSignal('');
	const password = useSignal('');
	const rememberMe = useSignal(true);
	const error = useSignal('');

	const login = $(async () => {
		const { login } = await loginMutation(email.value, password.value, rememberMe.value);
		if (login.__typename === 'CurrentUser') {
			navigate('/account');
		} else {
			error.value = login.message;
		}
	});
	return (
		<div class="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div class="sm:mx-auto sm:w-full sm:max-w-md">
				<h2 class="mt-6 text-center text-3xl text-gray-900 dark:text-gray-300">
					Sign in to your account
				</h2>
				<p class="mt-2 text-center text-sm text-gray-600">
					Or{' '}
					<Link href="/sign-up" class="font-medium text-primary-600 hover:text-primary-500">
						register a new account
					</Link>
				</p>
			</div>

			<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div class="bg-white dark:bg-neutral-900 py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<div class="mb-6 bg-yellow-50 dark:bg-yellow-600/10 border border-yellow-400 text-yellow-800 dark:text-yellow-500 rounded p-4 text-center text-sm">
						<p>Demo credentials</p>
						<p>
							Email address: <span class="font-bold">test@vendure.io</span>
						</p>
						<p>
							Password: <span class="font-bold">test</span>
						</p>
					</div>
					<div class="space-y-6">
						<div>
							<label class="block text-sm font-medium text-gray-700 dark:text-gray-400">
								Email address
							</label>
							<div class="mt-1">
								<input
									type="email"
									autoComplete="email"
									value={email.value}
									required
									onInput$={(ev) => (email.value = (ev.target as HTMLInputElement).value)}
									class="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-neutral-700 rounded-md shadow-sm placeholder-gray-400 dark:bg-neutral-800/70 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
								/>
							</div>
						</div>

						<div>
							<label class="block text-sm font-medium text-gray-700 dark:text-gray-400">
								Password
							</label>
							<div class="mt-1">
								<input
									type="password"
									value={password.value}
									required
									onInput$={(ev) => (password.value = (ev.target as HTMLInputElement).value)}
									onKeyUp$={(ev) => {
										if (ev.key === 'Enter' && !!(ev.target as HTMLInputElement).value) {
											login();
										}
									}}
									class="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-neutral-700 rounded-md shadow-sm placeholder-gray-400 dark:bg-neutral-800/70 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
								/>
							</div>
						</div>

						<div class="flex items-center justify-between">
							<div class="flex items-center">
								<input
									type="checkbox"
									checked
									onChange$={(ev) => (rememberMe.value = ev.target.checked)}
									class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
								/>
								<label class="ml-2 block text-sm text-gray-900 dark:text-gray-300">
									Remember me
								</label>
							</div>

							<div class="text-sm">
								<button
									onClick$={() => navigate('/forgot-password')}
									class="font-medium text-primary-600 hover:text-primary-500"
								>
									Forgot your password?
								</button>
							</div>
						</div>

						{error.value !== '' && (
							<div class="rounded-md bg-red-50 dark:bg-red-600/10 p-4">
								<div class="flex">
									<div class="flex-shrink-0">
										<XCircleIcon />
									</div>
									<div class="ml-3">
										<h3 class="text-sm font-medium text-red-800 dark:text-red-500">
											We ran into a problem signing you in!
										</h3>
										<p class="text-sm text-red-700  dark:text-red-400 mt-2">{error.value}</p>
									</div>
								</div>
							</div>
						)}
						<div>
							<button
								class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
								onClick$={login}
							>
								Sign in
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});

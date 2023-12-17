import { component$, useSignal } from '@builder.io/qwik';

export type PricingProps = {
	prices: Array<{
		label: string;
		caption: string;
		price: number;
	}>;
};

export const Pricing = component$<PricingProps>(({ prices }) => {
	const monthly = useSignal(true);
	return (
		<section class="flex flex-col items-center gap-4 max-w-3xl mx-auto w-full">
			<h1 class="text-4xl font-bold">Pricing Plans</h1>
			<span class="max-w-md text-center text-gray-600 dark:text-gray-500">
				Start building for free, then add a site plan to go live. Account unlock additional features
			</span>
			<div class="bg-gray-100 dark:bg-neutral-900/50 p-1 rounded-md flex gap-2 self-center">
				<button
					onClick$={() => (monthly.value = true)}
					class={`${
						monthly.value &&
						'bg-neutral-700 text-neutral-300 dark:bg-neutral-700 dark:text-gray-300'
					} text-gray-400 rounded px-6 py-2`}
				>
					Monthly billing
				</button>
				<button
					onClick$={() => (monthly.value = false)}
					class={`${
						!monthly.value &&
						'bg-neutral-700 text-neutral-300 dark:bg-neutral-700 dark:text-gray-300'
					} text-gray-400 rounded px-6 py-2`}
				>
					Annual billing
				</button>
			</div>
			<div class="flex gap-2 [&>*]:flex-[1_1_12rem] w-full flex-wrap">
				{prices.map((p) => (
					<section
						key={p.label}
						class="shadow bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4 pt-2 flex flex-col gap-2"
					>
						<h2 class="text-xl font-bold">{p.label}</h2>
						<span class="text-sm  text-gray-600 dark:text-gray-500">{p.caption}</span>
						<div>
							<span class="font-bold text-4xl">${p.price * (monthly.value ? 1 : 12)}</span>
							<span>/{monthly.value ? 'month' : 'year'}</span>
						</div>
						<button class="text-white dark:text-neutral-900 bg-primary-600 px-2 py-1 text-sm rounded-md">
							Subscribe
						</button>
					</section>
				))}
				<span></span>
				<span></span>
				<span></span>
			</div>
		</section>
	);
});

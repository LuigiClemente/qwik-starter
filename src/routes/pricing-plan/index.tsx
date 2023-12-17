import { component$ } from '@builder.io/qwik';
import { Pricing } from '~/components/pricing/pricing';

export default component$(() => {
	return (
		<>
			<Pricing
				prices={[
					{
						label: 'Hobby',
						caption: 'All the basic for starting new business!',
						price: 12,
					},
					{
						label: 'Freelancer',
						caption: 'All the basic for starting new business!',
						price: 24,
					},
					{
						label: 'Startup',
						caption: 'All the basic for starting new business!',
						price: 32,
					},
					{
						label: 'Enterprise',
						caption: 'All the basic for starting new business!',
						price: 48,
					},
				]}
			/>
		</>
	);
});

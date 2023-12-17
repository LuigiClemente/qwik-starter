import { component$ } from '@builder.io/qwik';
import { TeamMember } from '~/components/team-member/team-member';

export default component$(() => {
	return (
		<TeamMember inviteLink="https://foo.bar" members={[{ email: 'foo@bar.com', role: 'Owner' }]} />
	);
});

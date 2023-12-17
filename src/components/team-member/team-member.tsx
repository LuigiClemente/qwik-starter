import { component$, useStyles$ } from '@builder.io/qwik';
import { MenuOverflow } from '../icons/MenuOverflow';
import css from './team-member.css?inline';

export type TeamMemberProps = {
	members: Array<{
		email: string;
		role: string;
	}>;
	inviteLink: string;
};

export const TeamMember = component$<TeamMemberProps>(({ members, inviteLink }) => {
	useStyles$(css);
	return (
		<section class="flex flex-col gap-2 max-w-2xl mx-auto w-full p-4">
			<h3 class="font-semibold text-xl">Team Members</h3>
			<span>
				View people on your team, invite new team members to join, and set permissions for each team
				members
			</span>
			<div class="flex flex-col gap-2 my-4">
				<span>Share this link with your team to give them access to </span>
				<div class="flex gap-4 max-sm:flex-col">
					<span class="flex-auto truncate py-2 px-4 align-middle bg-gray-100 dark:bg-neutral-700 rounded-md border">
						{inviteLink}
					</span>
					<button
						onClick$={() => window.navigator.clipboard.writeText(inviteLink)}
						class="h-10 text-white whitespace-nowrap py-2 px-4 bg-primary-600 hover:bg-primary-700 rounded-md"
					>
						Copy Invite Link
					</button>
				</div>
				<span class="text-primary-600 self-start">Reset your link</span>
			</div>

			<div class="overflow-x-auto border shadow-sm rounded-lg">
				<table class=" w-full dark:bg-neutral-900 ">
					<thead class="">
						<th>Email</th>
						<th class="w-min">Role</th>
						<th class="w-12" />
					</thead>
					<tbody>
						{members.map((m) => (
							<tr class="border-t">
								<td>{m.email}</td>
								<td>{m.role}</td>
								<td class="flex items-center min-w-0 w-min">
									<button>
										<MenuOverflow class="w-6 h-6" />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
});

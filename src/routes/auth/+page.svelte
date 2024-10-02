<script lang="ts">
	import Form from './EmailSignupForm.svelte';

	import { Button } from '$lib/components/ui/button';

	export let data;

	let formType = 'magic';

	let formTypes = [
		{ id: 'magic', text: 'Magic Link' },
		{ id: 'instagram', text: 'Instagram' },
		{ id: 'google', text: 'Google' },
		{ id: 'facebook', text: 'Facebook' }
	];

	function updateFormType(type: string) {
		formType = type;
	}
</script>

<p>sign in method:</p>
<ul>
	{#each formTypes as type}
		<li class="p-1">
			<Button variant="secondary" class="w-full" on:click={() => updateFormType(type.id)}>
				{type.text}
			</Button>
		</li>
	{/each}
</ul>

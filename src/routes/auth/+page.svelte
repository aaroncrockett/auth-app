<script lang="ts">
	import MagicForm from './MagicSignupForm.svelte';

	import { Button } from '$lib/components/ui/button';

	export let data;

	let formType = 'magic';

	let formTypes = [
		{ id: 'instagram', text: 'Instagram' },
		{ id: 'google', text: 'Google' },
		{ id: 'facebook', text: 'Facebook' }
	];

	function updateFormType(type: string) {
		formType = type;
	}
</script>

<p>sign in method:</p>
<div class="w-1/2 p-2 mx-auto border-2 border-gray-500">
	<p>magic link</p>
	<MagicForm data={data.form} />
</div>
<!-- <p class="w-1/2 mx-auto text-center border-b-2 border-gray-300">or</p>
<ul class="w-1/2 mx-auto">
	{#each formTypes as type}
		<li class="p-1">
			<Button variant="secondary" class="w-full" on:click={() => updateFormType(type.id)}>
				{type.text}
			</Button>
		</li>
	{/each}
</ul> -->

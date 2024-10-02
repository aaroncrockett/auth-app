<script>
	import Form from './EmailSignupForm.svelte';
	export let data;

	let formType = 'magic';
</script>

{#if formType === 'password'}
	<Form data={data.form} />
{:else if formType === 'magic'}
	<p>magic link</p>
{/if}

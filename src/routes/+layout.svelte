<script>
	import Header from './Header.svelte';
	import '../app.css';

	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;
	$: ({ session, supabase } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<div class="app">
	<div class="p-2">
		<Header />
		<main>
			<slot />
		</main>
		<footer>
			<p>footer</p>
		</footer>
	</div>
</div>

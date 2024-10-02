<script>
	import { SectionWrapper } from '$lib/components/ui/section-wrapper';
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
	<div>
		<Header />
		<SectionWrapper type="main">
			<slot />
		</SectionWrapper>
		<SectionWrapper type="footer"><p>footer</p></SectionWrapper>
	</div>
</div>

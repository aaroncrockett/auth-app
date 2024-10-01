<script lang="ts">
	import { linkVariants } from './index.js';
	import { cn } from '$lib/utils.js';

	let className = undefined;
	let href: string;
	export { className as class };
</script>

<a {href} class={cn(linkVariants({ className }))} {...$$restProps}>
	<slot />
</a>

<script lang="ts">
	import { sectionWrapperVariants } from './index.js';
	import { cn } from '$lib/utils.js';

	let className: undefined | string = undefined;
	let type = 'div';
	export { className as class };
</script>

<svelte:element this={type} class={cn(sectionWrapperVariants({ className }))} {...$$restProps}>
	<slot />
</svelte:element>

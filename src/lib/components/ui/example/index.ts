import { tv } from 'tailwind-variants';
import Root from './link.svelte';

const linkVariants = tv({
	base: 'text-blue-500'
});

export { Root, Root as Link, linkVariants };

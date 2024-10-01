import { tv } from 'tailwind-variants';
import Root from './link.svelte';

const linkVariants = tv({
	base: 'text-blue-500',
	variants: {
		// variant: {
		// 	default: 'bg-primary text-primary-foreground hover:bg-primary/90',
		// 	destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
		// 	outline: 'border-input bg-background hover:bg-accent hover:text-accent-foreground border',
		// 	secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
		// 	ghost: 'hover:bg-accent hover:text-accent-foreground',
		// 	link: 'text-primary underline-offset-4 hover:underline'
		// },
	}
	// defaultVariants: {
	// 	variant: 'default',
	// 	size: 'default'
	// }
});

export {
	Root,
	//
	Root as Link,
	linkVariants
};

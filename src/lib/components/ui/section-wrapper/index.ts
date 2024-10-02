import { tv } from 'tailwind-variants';
import Root from './section-wrapper.svelte';

const sectionWrapperVariants = tv({
	base: 'p-2'
});

export { Root, Root as SectionWrapper, sectionWrapperVariants };

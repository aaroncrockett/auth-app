import { redirect } from '@sveltejs/kit';

import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

import type { PageServerLoad } from './$types.js';
import { superValidate } from 'sveltekit-superforms';
import { formSchema } from './schema';
import { zod } from 'sveltekit-superforms/adapters';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(formSchema))
	};
};

export const actions: Actions = {
	signup: async (event) => {
		console.log('signup!!');
		const form = await superValidate(event, zod(formSchema));
		const supabase = event.locals.supabase;
		const email = form.data.email;
		const password = form.data.password;
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		const { error } = await supabase.auth.signUp({ email, password });
		if (error) {
			console.error(error);
			redirect(303, '/auth/error');
		} else {
			redirect(303, '/');
		}
		return {
			form
		};
	}
	// signup: async ({ request, locals: { supabase } }) => {
	// 	const formData = await request.formData();
	// 	const email = formData.get('email') as string;
	// 	const password = formData.get('password') as string;
	// 	const { error } = await supabase.auth.signUp({ email, password });
	// 	if (error) {
	// 		console.error(error);
	// 		redirect(303, '/auth/error');
	// 	} else {
	// 		redirect(303, '/');
	// 	}
	// }
	// login: async ({ request, locals: { supabase } }) => {
	// 	const formData = await request.formData();
	// 	const email = formData.get('email') as string;
	// 	const password = formData.get('password') as string;
	// 	const { error } = await supabase.auth.signInWithPassword({ email, password });
	// 	if (error) {
	// 		console.error(error);
	// 		redirect(303, '/auth/error');
	// 	} else {
	// 		redirect(303, '/private');
	// 	}
	// }
};

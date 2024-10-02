import { redirect } from '@sveltejs/kit';

import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

import type { PageServerLoad } from './$types.js';
import { superValidate } from 'sveltekit-superforms';
import { passwordFormSchema } from './schema';
import { zod } from 'sveltekit-superforms/adapters';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(passwordFormSchema))
	};
};

export const actions: Actions = {
	password: async (event) => {
		const form = await superValidate(event, zod(passwordFormSchema));
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
};

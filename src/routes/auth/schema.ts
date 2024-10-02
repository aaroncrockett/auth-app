import { z } from 'zod';

const uppercaseErrorMessage = 'Password should include at least one uppercase letter';
const lowercaseErrorMessage = 'Password should include at least one lowercase letter';
const digitsErrorMessage = 'Password should include at least one digit';

export const formSchema = z.object({
	email: z.string().email(),
	password: z
		.string()
		.min(8)
		.max(64)
		.refine((password) => /[A-Z]/.test(password), {
			message: uppercaseErrorMessage
		})
		.refine((password) => /[a-z]/.test(password), {
			message: lowercaseErrorMessage
		})
		.refine((password) => /[0-9]/.test(password), {
			message: digitsErrorMessage
		})
});

export type FormSchema = z.infer<typeof formSchema>;

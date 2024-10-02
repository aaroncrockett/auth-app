import { z } from 'zod';

const passwordUppercaseMsg = 'Password should include at least one uppercase letter';
const passwordLowercaseMsg = 'Password should include at least one lowercase letter';
const passwordDigitsMsg = 'Password should include at least one digit';

export const passwordFormSchema = z.object({
	email: z.string().email(),
	password: z
		.string()
		.min(8)
		.max(64)
		.refine((password) => /[A-Z]/.test(password), {
			message: passwordUppercaseMsg
		})
		.refine((password) => /[a-z]/.test(password), {
			message: passwordLowercaseMsg
		})
		.refine((password) => /[0-9]/.test(password), {
			message: passwordDigitsMsg
		})
});

export type FormSchema = z.infer<typeof passwordFormSchema>;

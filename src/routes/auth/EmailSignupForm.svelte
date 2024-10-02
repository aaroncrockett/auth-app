<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { passwordFormSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data;

	const form = superForm(data, {
		validators: zodClient(passwordFormSchema)
	});

	const { form: formData, errors, enhance } = form;
</script>

<form method="POST" action="?/password" use:enhance>
	<Form.Field {form} name="email">
		<Form.Control let:attrs>
			<Form.Label>Email:</Form.Label>
			<Input {...attrs} bind:value={$formData.email} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="password">
		<Form.Control let:attrs>
			<Form.Label>Password:</Form.Label>
			<Input {...attrs} bind:value={$formData.password} />
		</Form.Control>
		<Form.Description
			>Enter a password with uppercase, lowercase, and at least one number and special character.</Form.Description
		>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button>Submit</Form.Button>
</form>

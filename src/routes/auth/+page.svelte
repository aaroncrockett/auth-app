<script>
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
</script>

<form method="POST" action="?/login" class="w-1/2 mx-auto space-y-2">
	<Input placeholder="email" name="email" type="email" />
	<Input placeholder="password" name="password" type="password" />
	<Button formaction="?/signup">Sign up</Button>
</form>

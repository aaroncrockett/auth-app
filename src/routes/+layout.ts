import { signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { auth } from '$lib/firebase';

// Anonymous Sign-In
export async function load() {
	try {
		// Sign in anonymously
		await signInAnonymously(auth);

		// Monitor the authentication state
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const uid = user.uid;
				console.log('User ID:', uid);
				// You can return this or use it elsewhere in your app
			} else {
				console.log('No user is signed in');
			}
		});
	} catch (error) {
		console.error('Error during anonymous sign-in', error);
	}
}

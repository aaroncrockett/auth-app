import {
	PUBLIC_API_KEY,
	PUBLIC_AUTH_DOMAIN,
	PUBLIC_PROJECT_ID,
	PUBLIC_STORAGE_BUCKET,
	PUBLIC_MESSAGING_SENDER_ID,
	PUBLIC_APP_ID
} from '$env/static/public';

import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
	apiKey: PUBLIC_API_KEY,
	authDomain: PUBLIC_AUTH_DOMAIN,
	projectId: PUBLIC_PROJECT_ID,
	storageBucket: PUBLIC_STORAGE_BUCKET,
	messagingSenderId: PUBLIC_MESSAGING_SENDER_ID,
	appId: PUBLIC_APP_ID
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

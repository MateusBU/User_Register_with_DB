import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC__FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC__FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC__FIREBASE_PROJECT_ID,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export default app;
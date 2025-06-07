import firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import 'firebase/firestore';

/*if firebase did not started */
if(!firebase.getApps().length){
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC__FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC__FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC__FIREBASE_PROJECT_ID,
    })
}

export default firebase;
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const environmentConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string | undefined,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string | undefined,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string | undefined,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string | undefined,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string | undefined,
  appId: import.meta.env.VITE_FIREBASE_APP_ID as string | undefined,
};

export const isFirebaseConfigured = Object.values(environmentConfig).every(Boolean);

const firebaseConfig = isFirebaseConfigured
  ? environmentConfig
  : {
      apiKey: "development-api-key",
      authDomain: "development.firebaseapp.com",
      projectId: "development",
      storageBucket: "development.firebasestorage.app",
      messagingSenderId: "000000000000",
      appId: "1:000000000000:web:development",
    };

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

export function ensureFirebaseConfigured() {
  if (!isFirebaseConfigured) {
    throw new Error("Firebase no está configurado. Completá las variables VITE_FIREBASE_*.");
  }
}

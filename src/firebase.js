import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDV7MzZTNy8se2ARjacDhXmuAuhQ7Uvduo",
  authDomain: "youtub-e-4603a.firebaseapp.com",
  projectId: "youtub-e-4603a",
  storageBucket: "youtub-e-4603a.appspot.com",
  messagingSenderId: "419934967032",
  appId: "1:419934967032:web:65ae89df8bc5631574570d",
  measurementId: "G-FRNG3JW5V4",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;

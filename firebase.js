import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyC5Zrlg-mjRGbjB65iIHOlAxxYSuPaU3Vk",
	authDomain: "notes-f955d.firebaseapp.com",
	projectId: "notes-f955d",
	storageBucket: "notes-f955d.appspot.com",
	messagingSenderId: "685888809210",
	appId: "1:685888809210:web:8c91df0edec6bd43004143",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "default");

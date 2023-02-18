// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDl5l3jrBn8A65MxzNVDmKMPubp6ovYGF0",
    authDomain: "my-profile-236bf.firebaseapp.com",
    projectId: "my-profile-236bf",
    storageBucket: "my-profile-236bf.appspot.com",
    messagingSenderId: "243625207642",
    appId: "1:243625207642:web:38df774b0276bb4f63b563",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
export { database };

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "zenith-global.firebaseapp.com",
    projectId: "zenith-global",
    storageBucket: "zenith-global.appspot.com",
    messagingSenderId: "818320822478",
    appId: "1:818320822478:web:ddd1e8f247bc3d81dfc09f"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

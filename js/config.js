// js/config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.x/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.x/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.x/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC4K_nvbX_KY7dtSUkjIE0s11xgu8KqVkY",
  authDomain: "zenith-global-assets.firebaseapp.com",
  projectId: "zenith-global-assets",
  storageBucket: "zenith-global-assets.firebasestorage.app",
  messagingSenderId: "818320822478",
  appId: "1:818320822478:web:ddd1e8f247bc3d81dfc09f",
  measurementId: "G-ZWGBSYVZ18"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

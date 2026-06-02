// js/auth/login.js
import { auth } from '../config.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.x/firebase-auth.js";

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login Successful! Redirecting to Dashboard...");
        window.location.href = "dashboard.html"; // লগইন হলে ড্যাশবোর্ডে নিয়ে যাবে
    } catch (err) {
        alert("Login Failed: " + err.message);
    }
});

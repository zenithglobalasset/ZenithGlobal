// js/auth/passwordReset.js
import { auth } from '../config.js';
import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.x/firebase-auth.js";

document.getElementById('forgotPasswordForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('resetEmail').value;

    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link has been sent to your email!");
        window.location.href = "login.html";
    } catch (err) {
        alert("Error: " + err.message);
    }
});

import { auth, db } from './config.js'; // config.js ফাইলটি রুট ফোল্ডারে থাকতে হবে
import { createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { generateCaptcha, loadCountries } from './js_utils_helpers.js';

const countrySelect = document.getElementById('country');
const captchaDiv = document.getElementById('captcha-container');
let currentCaptcha = generateCaptcha();

loadCountries(countrySelect);
captchaDiv.textContent = currentCaptcha;

document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    if (document.getElementById('captchaInput').value !== currentCaptcha) {
        alert("Invalid Captcha!");
        currentCaptcha = generateCaptcha();
        captchaDiv.textContent = currentCaptcha;
        return;
    }
    try {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        
        await setDoc(doc(db, "users", userCredential.user.uid), {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            country: countrySelect.value,
            email: email,
            createdAt: new Date()
        });
        await sendEmailVerification(userCredential.user);
        alert("Registration Success! Please verify your email.");
        window.location.href = "login.html";
    } catch (err) { alert(err.message); }
});

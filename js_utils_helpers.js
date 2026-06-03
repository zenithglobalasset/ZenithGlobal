import { auth, db } from '../config.js';
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { generateCaptcha, loadCountries } from '../utils/helpers.js';

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
        const userCredential = await createUserWithEmailAndPassword(auth, document.getElementById('email').value, document.getElementById('password').value);
        await setDoc(doc(db, "users", userCredential.user.uid), {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            country: countrySelect.value,
            email: userCredential.user.email,
            createdAt: new Date()
        });
        await sendEmailVerification(userCredential.user);
        alert("Registration Success! Please verify your email.");
        window.location.href = "login.html";
    } catch (err) { alert(err.message); }
});

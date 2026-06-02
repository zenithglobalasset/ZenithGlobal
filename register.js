import { populateCountries } from '../utils/helpers.js';
import { generateCaptcha } from '../utils/captcha.js';
import { createNewUser } from './authService.js';

let currentCaptcha;

document.addEventListener('DOMContentLoaded', () => {
    populateCountries();
    currentCaptcha = generateCaptcha();
    
    // URL থেকে রেফারেল কোড অটো-ফিল
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get('ref');
    if (ref) {
        document.getElementById('refCode').value = ref;
        document.getElementById('refCode').readOnly = true;
    }
});

document.getElementById('regForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    if (document.getElementById('captchaInput').value != currentCaptcha) {
        alert("Wrong Captcha!");
        currentCaptcha = generateCaptcha();
        return;
    }

    const userData = {
        userName: document.getElementById('userName').value,
        firstName: document.getElementById('fName').value,
        lastName: document.getElementById('lName').value,
        country: document.getElementById('country').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        referralCode: document.getElementById('refCode').value,
        password: document.getElementById('pass').value
    };

    if (userData.password !== document.getElementById('cPass').value) {
        alert("Passwords don't match!");
        return;
    }

    const res = await createNewUser(userData);
    if (res.success) {
        alert("Registration Successful!");
        window.location.href = 'login.html';
    } else {
        alert(res.message);
    }
});

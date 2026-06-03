import { auth, db } from './config.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Captcha
const captcha = Math.random().toString(36).substring(7).toUpperCase();
document.getElementById('captchaBox').innerText = captcha;

// Load Countries
fetch('https://restcountries.com/v3.1/all').then(res => res.json()).then(data => {
    data.sort((a,b) => a.name.common.localeCompare(b.name.common)).forEach(c => {
        document.getElementById('country').innerHTML += `<option>${c.name.common}</option>`;
    });
});

document.getElementById('regForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    if(document.getElementById('captchaInput').value !== captcha) return alert("Wrong Captcha!");
    
    try {
        const userCred = await createUserWithEmailAndPassword(auth, document.getElementById('email').value, document.getElementById('password').value);
        await setDoc(doc(db, "users", userCred.user.uid), {
            name: document.getElementById('fname').value + " " + document.getElementById('lname').value,
            email: document.getElementById('email').value,
            createdAt: new Date()
        });
        alert("Success! Now Login.");
        window.location.href = "login.html";
    } catch (err) { alert(err.message); }
});

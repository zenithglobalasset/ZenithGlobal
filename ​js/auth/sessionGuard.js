// js/auth/sessionGuard.js
import { auth } from '../config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.x/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
    // যদি ইউজার লগইন না থাকে এবং সে যদি অন্য কোনো পেজে থাকে (যেমন dashboard.html)
    if (!user) {
        // যদি পেজটি লগইন, রেজিস্টার বা ফরগেট পাসওয়ার্ড না হয়, তবে লগইন পেজে পাঠাবে
        if (!window.location.pathname.includes("login.html") && 
            !window.location.pathname.includes("register.html") && 
            !window.location.pathname.includes("forgot-password.html") &&
            !window.location.pathname.includes("index.html")) {
            window.location.href = "login.html";
        }
    } else {
        // যদি লগইন থাকে এবং সে যদি লগইন পেজে থাকে, তবে তাকে ড্যাশবোর্ডে নিয়ে যাবে
        if (window.location.pathname.includes("login.html") || 
            window.location.pathname.includes("register.html")) {
            window.location.href = "dashboard.html";
        }
    }
});

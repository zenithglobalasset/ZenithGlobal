import { auth, db } from '../../firebase.js';
import { createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { doc, setDoc, updateDoc, arrayUnion, increment } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

export async function createNewUser(data) {
    try {
        const userCred = await createUserWithEmailAndPassword(auth, data.email, data.password);
        const uid = userCred.user.uid;

        // যদি রেফারেল থাকে
        if (data.referralCode) {
            await updateDoc(doc(db, "users", data.referralCode), {
                invitedUsers: arrayUnion(uid),
                totalBonus: increment(1)
            });
        }

        // ইউজারের প্রোফাইল তৈরি
        await setDoc(doc(db, "users", uid), {
            uid,
            ...data,
            invitedUsers: [],
            totalBonus: 0,
            balance: 0,
            isVerified: false,
            createdAt: new Date().toISOString()
        });

        await sendEmailVerification(userCred.user);
        return { success: true };
    } catch (err) {
        return { success: false, message: err.message };
    }
}

export function generateCaptcha() {
    const n1 = Math.floor(Math.random() * 10) + 1;
    const n2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById('captchaText').innerText = `${n1} + ${n2} = ?`;
    return n1 + n2;
}

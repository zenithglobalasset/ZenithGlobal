export function generateCaptcha() {
    return Math.random().toString(36).substring(7).toUpperCase();
}

export async function loadCountries(selectElement) {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    data.sort((a, b) => a.name.common.localeCompare(b.name.common));
    data.forEach(c => {
        let opt = document.createElement("option");
        opt.value = c.name.common;
        opt.textContent = c.name.common;
        selectElement.appendChild(opt);
    });
}

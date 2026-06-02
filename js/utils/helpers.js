export function populateCountries() {
    const countries = ["Bangladesh", "India", "Saudi Arabia", "UAE", "USA", "UK"];
    const select = document.getElementById('country');
    countries.forEach(c => {
        let opt = document.createElement('option');
        opt.value = c; opt.innerHTML = c;
        select.appendChild(opt);
    });
}

const passwordInput = document.getElementById("password");
const bar = document.getElementById("bar");
const info = document.getElementById("info");

passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    let width = (strength / 5) * 100;
    bar.style.width = width + "%";

    if (strength === 0) {
        bar.style.backgroundColor = "#eee";
        info.textContent = "Enter password";
    } else if (strength <= 2) {
        bar.style.backgroundColor = "#ff4d4d";
        info.textContent = "Insecure";
    } else if (strength === 3 || strength === 4) {
        bar.style.backgroundColor = "#f9c74f";
        info.textContent = "Okay";
    } else if (strength === 5) {
        bar.style.backgroundColor = "#4caf50";
        info.textContent = "Highly secure";
    }
});
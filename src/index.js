let attempts = 0;
const maxAttempts = 3;

const form = document.querySelector('.login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Example credentials (replace with your own logic)
    const validUser = 'admin';
    const validPass = '1234';

    const user = usernameInput.value;
    let passInt;

    try {
        passInt = parseInt(passwordInput.value, 10);
        if (isNaN(passInt)) {
            throw new Error('La contraseña debe ser un número');
        }
    } catch (error) {
        errorMessage.textContent =  error.message;
        errorMessage.style.visibility = 'visible';
        alert(error.stack);
        return;
    }

    if (user === validUser && passInt === validPass || user === validUser) {
        errorMessage.style.visibility = 'visible';
        alert('Ingreso exitoso!');
        window.location.href = 'page.html';
    } else {
        attempts++;
        errorMessage.style.visibility = 'visible';
        if (attempts == 1) {
            alert('Intentos máximos alcanzados. Por favor, inténtelo más tarde.');
            usernameInput.disabled = true;
            passwordInput.disabled = true;
            form.querySelector('button[type="submit"]').disabled = true;
        }
        if (attempts >= maxAttempts) {
            alert('Intentos máximos alcanzados. Por favor, inténtelo más tarde.');
            usernameInput.disabled = true;
            passwordInput.disabled = true;
            form.querySelector('button[type="submit"]').disabled = true;
        } else {
            alert(`Credenciales incorrectas. Intento ${attempts} de ${maxAttempts}.`);
        }
    }
});
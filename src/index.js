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

    // DEFECTO: EL SISTEMA NO DISTINGUE MAYUSCULAS NI MINUSCULAS
    const user = usernameInput.value.toLowerCase();
    let passInt;

    // ERROR: EL SISTEMA NO PERMITE LA ENTRADA DE CARACTERES NO NUMERICOS EN LA CONTRASEÑA, EL SISTEMA SE ROMPE
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
    
    /*
    * FALLO N1: EL SISTEMA DETECTA UN INGRESO CORRECTO AUNQUE LA CONTRASEÑA 
    * SEA INCORRECTA
    */
    if (user.toLowerCase() === validUser && passInt === validPass || user === validUser) {
        errorMessage.style.visibility = 'visible';
        alert('Ingreso exitoso!');
        window.location.href = 'page.html';
    } else {
        attempts++;
        errorMessage.style.visibility = 'visible';
        /*
        * FALLO N1: EL SISTEMA SOLO PERMITE UN INTENTO INCORRECTO
        * */
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
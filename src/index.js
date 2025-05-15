let attempts = 0;
const maxAttempts = 3;

const form = document.querySelector('.login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Example credentials (replace with your own logic)
    const validUser = 'admin';
    const validPass = '1234';

    const user = usernameInput.value;
    const pass = passwordInput.value;

    if (user === validUser && pass === validPass || user === validUser) {
        /*
        * FALLO N1: EL SISTEMA DETECTA UN INGRESO CORRECTO AUNQUE LA CONTRASEÑA 
        * SEA INCORRECTA O ESTÉ VACÍA
        * */
        alert('Ingreso exitoso!');
        window.location.href = 'page.html';
    } else {
        attempts++;
        /*
        * FALLO N2: EL SISTEMA SOLO PERMITE UN INTENTO DE INGRESO
        * SI EL USUARIO FALLA 1 VEZ, EL SISTEMA SE BLOQUEA
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
document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginButton = document.getElementById("login-button");

    loginButton.addEventListener("click", function (e) {
        e.preventDefault(); // Previene el envío del formulario por defecto

        // Obtén los valores de los campos de entrada
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Realiza la validación (puedes personalizar esto según tus necesidades)
        if (username.trim() === "" || password.trim() === "") {
            alert("Por favor, completa todos los campos.");
        } else {
            // Aquí puedes enviar los datos del formulario al servidor o realizar otras acciones
            alert(`Inicio de sesión exitoso para el usuario: ${username}`);
            // Redirecciona a otra página si es necesario
            window.location.href = "dashboard.html";
        }
    });
});
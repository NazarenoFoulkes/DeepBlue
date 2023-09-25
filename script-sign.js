document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.querySelector("#name");
        const usernameInput = document.querySelector("#username");
        const passwordInput = document.querySelector("#password");

        // Verifica si los campos de nombre de usuario y contraseña no están vacíos
        if (usernameInput.value.trim() === "" || passwordInput.value.trim() === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Aquí puedes agregar código adicional, como enviar los datos del formulario a un servidor.

        // Limpia los campos después de enviar el formulario (puedes ajustar esto según tus necesidades)
        nameInput.value = "";
        usernameInput.value = "";
        passwordInput.value = "";

        alert("Registro exitoso. ¡Bienvenido!");

        // Redirige a la página de inicio de sesión u otra página según tus necesidades
        window.location.href = "index.DeepBlue.html";
    });
});
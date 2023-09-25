document.addEventListener("DOMContentLoaded", function () {
  const buttonMenu = document.getElementById("button-menu");
  const nav = document.getElementById("nav");

  buttonMenu.addEventListener("click", function () {
    nav.classList.toggle("active");
  });
});
document.addEventListener("DOMContentLoaded", function () {
    // Función para obtener el carrito almacenado en localStorage
    function obtenerCarrito() {
        return JSON.parse(localStorage.getItem('carrito')) || [];
    }

    // Función para guardar el carrito en localStorage
    function guardarCarrito(carrito) {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    // Función para agregar un producto al carrito
    function agregarAlCarrito(nombre, precio) {
        let carrito = obtenerCarrito();
        carrito.push({ nombre, precio });
        guardarCarrito(carrito);
        actualizarCarrito();
        alert(`"${nombre}" se ha agregado al carrito.`);
    }

    // Función para actualizar el contenido del carrito en la página
    function actualizarCarrito() {
        let carrito = obtenerCarrito();
        let cartItemsList = document.getElementById('cart-items-list');
        let cartTotal = document.getElementById('cart-total');
        let clearCartButton = document.getElementById('clear-cart');

        if (cartItemsList && cartTotal && clearCartButton) {
            cartItemsList.innerHTML = '';
            let total = 0;

            carrito.forEach(producto => {
                let listItem = document.createElement('li');
                listItem.textContent = `${producto.nombre} - $${parseFloat(producto.precio).toFixed(2)}`;
                cartItemsList.appendChild(listItem);
                total += parseFloat(producto.precio);
            });

            cartTotal.textContent = `$${total.toFixed(2)}`;
        }
    }

    // Agregar evento de clic a los botones "Agregar al Carrito" en la página de la tienda
    let botonesAgregar = document.querySelectorAll('.add-to-cart');
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', function () {
            let producto = this.parentElement;
            let nombre = producto.getAttribute('data-product');
            let precio = parseFloat(producto.getAttribute('data-price'));
            agregarAlCarrito(nombre, precio);
        });
    });

    // Mostrar el contenido del carrito al cargar la página
    actualizarCarrito();

    // Agregar evento de clic al botón "Vaciar Carrito"
    let clearCartButton = document.getElementById('clear-cart');
    if (clearCartButton) {
        clearCartButton.addEventListener('click', function () {
            localStorage.removeItem('carrito');
            actualizarCarrito();
            alert('El carrito se ha vaciado.');
        });
    }
});
const form = document.getElementById('contact-form');

        form.addEventListener('submit', function (event) {
            // Validar los campos del formulario aquí
            const fullname = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const affair = document.getElementById('affair').value;
            const message = document.getElementById('message').value;

            if (fullname === '' || email === '' || phone === '' || affair === '' || message === '') {
                alert('Por favor, complete todos los campos.');
                event.preventDefault(); // Evita que el formulario se envíe
            }
        });
        document.addEventListener("DOMContentLoaded", function () {
            const buttonMenu = document.getElementById("button-menu");
            const nav = document.getElementById("nav");
        
            buttonMenu.addEventListener("click", function () {
                nav.classList.toggle("show");
            });
        });
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

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const fullname = document.getElementById('fullname');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const affair = document.getElementById('affair');
    const message = document.getElementById('message');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevenir el envío por defecto del formulario
  
      const fullnameError = document.getElementById('fullname-error');
      const emailError = document.getElementById('email-error');
      const phoneError = document.getElementById('phone-error');
      const affairError = document.getElementById('affair-error');
      const messageError = document.getElementById('message-error');
  
      fullnameError.textContent = '';
      emailError.textContent = '';
      phoneError.textContent = '';
      affairError.textContent = '';
      messageError.textContent = '';
  
      let isValid = true;
  
      if (fullname.value.trim() === '') {
        fullnameError.textContent = 'El nombre es obligatorio';
        isValid = false;
      }
  
      if (email.value.trim() === '') {
        emailError.textContent = 'El correo electrónico es obligatorio';
        isValid = false;
      }
  
      if (phone.value.trim() === '') {
        phoneError.textContent = 'El teléfono es obligatorio';
        isValid = false;
      }
  
      if (affair.value.trim() === '') {
        affairError.textContent = 'El asunto es obligatorio';
        isValid = false;
      }
  
      if (message.value.trim() === '') {
        messageError.textContent = 'El mensaje es obligatorio';
        isValid = false;
      }
  
      if (isValid) {
      }
    });
  });
let productosEnCarrito = localStorage.getItem("carrito-productos");
productosEnCarrito = JSON.parse(productosEnCarrito);

const carritoVacio = document.getElementById("carrito-vacio");
const carritoProductos = document.getElementById("carrito-productos");
const carritoAcciones = document.getElementById("carrito-acciones");
const carritoComprado = document.getElementById("carrito-comprado");
let botonEliminar = document.querySelector(".producto-eliminado");
const botonVaciar = document.getElementById("carrito-vaciar");
const contenedorTotal = document.getElementById("total");
const botonComprar = document.getElementById("carrito-comprar");

function cargarProductosCarrito() {
    if (productosEnCarrito && productosEnCarrito.length > 0) {



        carritoVacio.classList.add("disabled");
        carritoProductos.classList.remove("disabled");
        carritoAcciones.classList.remove("disabled");
        carritoComprado.classList.add("disabled");

        carritoProductos.innerHTML = "";

        productosEnCarrito.forEach(producto => {

            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
            <img  class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-titulo">
                <small>Titulo</small>
                <h3>${producto.titulo}</h3>
            </div>
            <div class="producto-cantidad">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
            </div>
            <div class="producto-precio">
                <small>Precio</small>
                <p>$${producto.precio}</p>
            </div>
            <div class="producto-subtottal">
                <small>Subtotal</small>
                <p>$${producto.precio * producto.cantidad}</p>
            </div>
            <button class="producto-eliminado" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
            `;

            carritoProductos.append(div);



        });


    } else {

        carritoVacio.classList.remove("disabled");
        carritoProductos.classList.add("disabled");
        carritoAcciones.classList.add("disabled");
        carritoComprado.classList.add("disabled");

    }

    actualizarBotonEliminar();
    actualizarTotal();


}

cargarProductosCarrito();





function actualizarBotonEliminar() {
    botonEliminar = document.querySelectorAll(".producto-eliminado");

    botonEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);

    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("carrito-productos", JSON.stringify(productosEnCarrito));
}

botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {

    productosEnCarrito.length = 0;
    localStorage.setItem("carrito-productos", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();

}


function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;

}

botonComprar.addEventListener("click", comprarCarrito)
function comprarCarrito() {

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tu compra se realizo con exito <i class="bi bi-emoji-laughing"></i>',
        showConfirmButton: false,
        timer: 3000
      })

    productosEnCarrito.length = 0;
    localStorage.setItem("carrito-productos", JSON.stringify(productosEnCarrito));

    carritoVacio.classList.add("disabled");
    carritoProductos.classList.add("disabled");
    carritoAcciones.classList.add("disabled");
    carritoComprado.classList.remove("disabled");

}









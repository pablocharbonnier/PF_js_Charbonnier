
// Productos



const productos = [
    //Smartwatch
    {
        id: "Smartwatch HW68",
        titulo: "Smartwatch HW68",
        imagen: "../img/Smartwatch/Smartwatch_HW68.jpg",
        precio: 3990,
        categoria: {
            nombre: "Smartwatch",
            id: "Smartwatch",
        }
    },
    {
        id: "Smartwatch W27",
        titulo: "Smartwatch W27",
        imagen: "../img/Smartwatch/Smartwatch_W27.jpg",
        precio: 2790,
        categoria: {
            nombre: "Smartwatch",
            id: "Smartwatch",
        }
    },
    {
        id: "Smartwatch W26",
        titulo: "Smartwatch W26",
        imagen: "../img/Smartwatch/SmartWatch-W26-Plus.jpeg",
        precio: 1790,
        categoria: {
            nombre: "Smartwatch",
            id: "Smartwatch",
        }
    },
    {
        id: "Smartwatch D20",
        titulo: "Smartwatch D20",
        imagen: "../img/Smartwatch/Smartwatch_D20.jpg",
        precio: 690,
        categoria: {
            nombre: "Smartwatch",
            id: "Smartwatch",
        }
    },
    {
        id: "Smartwatch Banda",
        titulo: "Smartwatch Banda",
        imagen: "../img/Smartwatch/Smartwatch-Banda.jpg",
        precio: 590,
        categoria: {
            nombre: "Smartwatch",
            id: "Smartwatch",
        }
    },
    {
        id: "Smartwatch + Auriculares",
        titulo: "Smartwatch + Auriculares",
        imagen: "../img/Smartwatch/Smartwatch + auriculares.jpg",
        precio: 1290,
        categoria: {
            nombre: "Smartwatch",
            id: "Smartwatch",
        }
    },

    //Auriculares
    {
        id: "Auricular Inalambrico Gamer X15",
        titulo: "Auricular Inalambrico Gamer X15",
        imagen: "../img/Auriculares/auriculares-inalambricos-gamer-x15-01-600x600.jpg",
        precio: 990,
        categoria: {
            nombre: "Auriculares",
            id: "Auriculares",
        }
    },
    {
        id: "Auricular Inalambrico InPods 12",
        titulo: "Auricular Inalambrico InPods 12",
        imagen: "../img/Auriculares/Auriculares_inalambricos_inpods12.jpg",
        precio: 690,
        categoria: {
            nombre: "Auriculares",
            id: "Auriculares",
        }
    },
    {
        id: "Auricular Inalambrico P47",
        titulo: "Auricular Inalambrico P47",
        imagen: "../img/Auriculares/Auricular_P47.jpg",
        precio: 790,
        categoria: {
            nombre: "Auriculares",
            id: "Auriculares",
        }
    },
    {
        id: "Auricular Inalambrico Macaron",
        titulo: "Auricular Inalambrico Macaron",
        imagen: "../img/Auriculares/auricular_inalambrico-macaron.webp",
        precio: 1190,
        categoria: {
            nombre: "Auriculares",
            id: "Auriculares",
        }
    },
    {
        id: "Auricular Inalambrico F9",
        titulo: "Auricular Inalambrico F9",
        imagen: "../img/Auriculares/auricular_inalambrico-f9.jpg",
        precio: 890,
        categoria: {
            nombre: "Auriculares",
            id: "Auriculares",
        }
    },

    //Gamer 
    {
        id: "Teclado Gamer",
        titulo: "Teclado Gamer",
        imagen: "../img/Gamer/teclado-gamer.jpg",
        precio: 750,
        categoria: {
            nombre: "Gamer",
            id: "Gamer",
        }
    },
    {
        id: "Combo Gamer",
        titulo: "Combo Gamer",
        imagen: "../img/Gamer/combo-gamer.webp",
        precio: 750,
        categoria: {
            nombre: "Gamer",
            id: "Gamer",
        }
    },
    {
        id: "Combo Gamer 2",
        titulo: "Combo Gamer 2",
        imagen: "../img/Gamer/combo-gamer-2.jpg",
        precio: 1650,
        categoria: {
            nombre: "Gamer",
            id: "Gamer",
        }
    },
    {
        id: "Auricular Gamer",
        titulo: "Auricular Gamer",
        imagen: "../img/Gamer/auriculares-gamer.jpeg",
        precio: 990,
        categoria: {
            nombre: "Gamer",
            id: "Gamer",
        }
    },
    {
        id: "Auricular Vincha",
        titulo: "Auricular Vincha",
        imagen: "../img/Gamer/auricular-vincha.jpg",
        precio: 750,
        categoria: {
            nombre: "Gamer",
            id: "Gamer",
        }
    },

];

const cardsProductos = document.getElementById("cards");
const botonCategoria = document.querySelectorAll(".boton-categoria");
let botonAgregar = document.querySelectorAll(".producto-agregar");
const numero = document.getElementById("numero");

function cargarProductos(productosSeleccionados) {

    cardsProductos.innerHTML = "";

    productosSeleccionados.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
                    <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                    <div class="card-detalles">               
                        <h2 class="articulo">${producto.titulo}</h2>
                        <p class="precio">$${producto.precio}</p>
                        <button class="producto-agregar" type="submit" value="Comprar" id="${producto.id}">Comprar</button>
                 </div>
                `;

        cardsProductos.append(div)
    })
    actualizarBotonAgregar();


}

cargarProductos(productos);

botonCategoria.forEach(boton => {

    boton.addEventListener("click", (e) => {

        botonCategoria.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active");


        if (e.currentTarget.id != "todos") {
            const productosCategorias = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosCategorias);


        } else {
            cargarProductos(productos);
        }

    })

});

function actualizarBotonAgregar() {
    botonAgregar = document.querySelectorAll(".producto-agregar");

    botonAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosCarritoLocalStorage = localStorage.getItem("carrito-productos");

if(productosCarritoLocalStorage){
    productosEnCarrito = JSON.parse(productosCarritoLocalStorage);
    actualizarNumero();
}else{
    productosEnCarrito = [];
}




function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumero();

    localStorage.setItem("carrito-productos", JSON.stringify(productosEnCarrito));

}

function actualizarNumero() {
    let nuevoNumero = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numero.innerText = nuevoNumero;
}













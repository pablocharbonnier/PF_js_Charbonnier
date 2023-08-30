fetch("simulador_api_dos.json")
.then(resp => resp.json())
.then(listaProductos => {
    listaProductos.forEach(producto => {
          renderProductos(listaProductos)
    });
})

function renderProductos(arr) {
    
    const contenedor_productos = document.getElementById("cards");
    contenedor_productos.innerHTML = "";

    arr.forEach(producto => {
        contenedor_productos.innerHTML += ` 
        <div class="card">
        <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="card-detalles">               
            <h2 class="articulo">${producto.titulo}</h2>
            <p class="precio">$${producto.precio}</p>
            <button class="producto-agregar" type="submit" value="Comprar" id="${producto.id}">Comprar</button>
     </div>
     </div>
     `
    })
}  
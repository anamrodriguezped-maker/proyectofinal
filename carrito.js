let carrito = JSON.parse(localStorage.getItem("carrito")) || []; //Variable global para almacenar el carrito, se inicializa con lo que hay en localStorage o un array vacío

// Guardar carrito
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito)); //Convierte el carrito a una cadena JSON y lo guarda en localStorage
}

//  Mostrar carrito
function mostrarCarrito() {
    let contenedor = document.getElementById("listaCarrito"); //campo de texto donde se mostrará el carrito
    let subtotal = 0;
    contenedor.innerHTML = "";// Limpia el contenedor antes de mostrar el carrito actualizado
    if(carrito.length === 0){ //ejecuta esto si el carrito está vacío
        contenedor.innerHTML = `<div class="vacio"> 
                Tu carrito está vacío 🛒 </div>`;
        document.getElementById("subtotal").innerText = "$0";// Si el carrito está vacío, se muestra el mensaje iva y total %0
        document.getElementById("iva").innerText = "$0";
        document.getElementById("total").innerText = "$0";
        return;
    }

    carrito.forEach((p, index) => {
        p.cantidad=1;// en el caso que hayan mas productos eliminar esta linea 
        let subtotalProducto = p.precio * p.cantidad;//variable para calcular el subtotal de cada producto, se multiplica el precio por la cantidad
        subtotal += subtotalProducto;// se suma el subtotal de cada producto al subtotal total del carrito
        contenedor.innerHTML += // Se agrega el producto al contenedor, mostrando su nombre, precio, cantidad y subtotal, además de un botón para eliminarlo
        `<div class="producto">
                <div class="info">
                    <span class="nombre"> ${p.nombre} </span> 
                    <span class="precio">
                        Precio: $${p.precio.toLocaleString()} </span> 
                    <span class="cantidad"> Cantidad: ${p.cantidad} </span> 
                <div class="acciones">
                    <span class="subtotal"> $${subtotalProducto.toLocaleString()} </span> 
                    <button 
                        class="btnEliminar" onclick="eliminarProducto(${index})"> X </button> 
                </div>
            </div>`;
    });

    let iva = subtotal * 0.16; //variable iva 16%
    let total = subtotal + iva; //Variable valor con iva
    document.getElementById("subtotal").innerText = "$" + subtotal.toLocaleString(); //muestra el subtotal
    document.getElementById("iva").innerText = "$" + iva.toLocaleString();// muestra el iva
    document.getElementById("total").innerText = "$" + total.toLocaleString();//muestra el total con iva
}

// Eliminar producto
function eliminarProducto(index){
    carrito.splice(index, 1); //elimina el producto que está en esa posición
    guardarCarrito();
    mostrarCarrito();
}

//  Vaciar carrito
function vaciarCarrito(){
    carrito = [];
    guardarCarrito();
    mostrarCarrito();
}

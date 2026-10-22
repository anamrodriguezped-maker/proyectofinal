let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

let subtotal = 0;

const listaProductos = document.getElementById("listaProductos");

if(carrito.length === 0){

    listaProductos.innerHTML = `
        <div class="producto">
            <div class="info">
                <h3>Tu carrito está vacío 🛒</h3>
            </div>
        </div>
    `;

}else{

    carrito.forEach(producto => {
    producto.cantidad=1;
        let subtotalProducto = producto.precio * producto.cantidad;

        subtotal += subtotalProducto;

        listaProductos.innerHTML += `

            <div class="producto">

                <div class="info">
                    <h3>${producto.nombre}</h3>
                    <p>Cantidad: ${producto.cantidad}</p>
                </div>

                <div class="precio">
                    $${subtotalProducto.toLocaleString()}
                </div>

            </div>

        `;

    });

}

let iva = subtotal * 0.16;

let total = subtotal + iva;


document.getElementById("subtotal").innerText =
    "$" + subtotal.toLocaleString();


document.getElementById("iva").innerText =
    "$" + iva.toLocaleString();


document.getElementById("total").innerText =
    "$" + total.toLocaleString();


// CONFIGURAR WOMPI

const checkout = new WidgetCheckout({

    currency: 'COP',

    amountInCents: total * 100,

    reference: 'PEDIDO-' + Date.now(),

    publicKey: 'pub_test_QKcrdndJbWAZDCJK9enQ1IKMwEbOuJ4S',

    redirectUrl: 'http://localhost/anaysusgatos/gracias.php'

});


function pagar(){

    if(carrito.length === 0){

        alert("Tu carrito está vacío");

        return;
    }


    checkout.open(function(result){

        const transaction = result.transaction;

        console.log(transaction);

    });

}
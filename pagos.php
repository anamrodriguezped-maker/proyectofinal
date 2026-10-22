    <?php
    session_start();
    ?>
    <!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Pagos - AnaysusGatos</title>

<script src="https://checkout.wompi.co/widget.js"></script>

<link rel="stylesheet" href="pagos.css">
</head>
<body>


<div class="contenedor">

    <div class="header">
        <h1>🛒 Finalizar Compra</h1>
        <p>Pago seguro con Wompi + PSE</p>
    </div>

    <div class="contenido">

        <h2 class="titulo">Productos del carrito</h2>

        <div id="listaProductos" class="productos"></div>

        <div class="resumen">

            <h2>Resumen del Pedido</h2>

            <div class="linea">
                <span>Subtotal</span>
                <span id="subtotal">$0</span>
            </div>

            <div class="linea">
                <span>IVA 16%</span>
                <span id="iva">$0</span>
            </div>

            <div class="linea total">
                <span>Total</span>
                <span id="total">$0</span>
            </div>
            <button class="btnPagar" onclick="window.open('https://www.daviplata.com/personas/recargar-daviplata', '_blank')">
    🏦 Pagar con Daviplata
</a> </button>
<!--             <button class="btnPagar" onclick="pagar()">
                🏦 Pagar con PSE
            </button> -->

<!--             <div class="metodos">
                <div class="metodo">PSE</div>
                <div class="metodo">Nequi</div>
                <div class="metodo">Tarjeta</div>
                <div class="metodo">Bancolombia</div>
            </div> -->

        </div>

    </div>

</div>

<script src="pagar.js"></script>

</body>
</html>

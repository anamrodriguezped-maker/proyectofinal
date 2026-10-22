<?php
session_start();
include("conexion.php");

// Recibir datos
$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];

// Buscar usuario en la BD
$sql = "SELECT * FROM usuario WHERE usuario = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $usuario);
$stmt->execute();
$resultado = $stmt->get_result();

if ($resultado->num_rows > 0) {

    $datos = $resultado->fetch_assoc();

    // Verificar contraseña encriptada
    if (password_verify($contrasena, $datos['contrasena'])) {

        $_SESSION['usuario'] = $datos['usuario'];
        $_SESSION['nombre'] = $datos['nombre'];
        $_SESSION['apellido'] = $datos['apellido'];

        // Redirigir
        header("Location: index.php");
        exit();

    } else {
        echo "❌ Contraseña incorrecta";
    }

} else {
    echo "❌ Usuario no existe";
}
?>
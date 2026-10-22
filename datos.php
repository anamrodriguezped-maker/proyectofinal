<?php
include("conexion.php");

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$fecha = $_POST['fechanacimiento'];
$usuario = $_POST['usuario'];
$contrasena = password_hash($_POST['contrasena'], PASSWORD_DEFAULT);
$repetir_contrasena = $_POST ['repetir_contrasena'];

// Insertar en la base de datos
$sql = "INSERT INTO usuario (nombre, apellido, email, fechanacimiento, usuario, contrasena, repetir_contrasena)
VALUES ('$nombre', '$apellido', '$email', '$fecha', '$usuario', '$contrasena', '$repetir_contrasena')";

if ($conn->query($sql) === TRUE) {
    header("Location: registroexitoso.html");
    exit();
} else {
    echo "Error: " . $conn->error;
}
?>

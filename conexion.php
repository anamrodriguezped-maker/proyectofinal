<?php
$host = "localhost";/* Une con XAMPP Local Host */
$usuario = "root";/* xamp tiene por defecto root */
$contrasena = "";/* contrasena con n */
$bd = "anaysusgatos";

$conn = new mysqli($host, $usuario, $contrasena, $bd);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>
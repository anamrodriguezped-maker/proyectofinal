<?php

session_start();

session_unset(); // Eliminar todas las variables de sesión

session_destroy(); // Destruir sesión

header("Location: index.html"); // Redirigir al login

exit();

?>
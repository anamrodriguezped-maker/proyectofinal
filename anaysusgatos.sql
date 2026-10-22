CREATE DATABASE anaysusgatos; /* Crea la base de datos del proyecto */

USE anaysusgatos; /* Usa la base de datos */

/* -- Crear tabla de usuario */
CREATE TABLE usuario (
     id INT AUTO_INCREMENT PRIMARY KEY,
     nombre VARCHAR(100) NOT NULL,
     apellido VARCHAR(100) NOT NULL,
     email VARCHAR(150) NOT NULL UNIQUE,
     fechanacimiento DATE NOT NULL,
     usuario VARCHAR(50) NOT NULL UNIQUE,
     contrasena VARCHAR(255) NOT NULL,
     repetir_contrasena VARCHAR(255) NOT NULL,
     fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
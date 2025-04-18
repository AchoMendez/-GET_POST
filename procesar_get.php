<?php
// Establecer cabeceras para evitar problemas de CORS
header("Access-Control-Allow-Origin: *");
header("Content-Type: text/html; charset=UTF-8");

// Verificar si se recibieron los datos esperados
if (isset($_GET['nombre']) && isset($_GET['email'])) {
    $nombre = htmlspecialchars($_GET['nombre']);
    $email = htmlspecialchars($_GET['email']);
    
    echo "<h4>Datos recibidos mediante GET:</h4>";
    echo "<p>Nombre: {$nombre}</p>";
    echo "<p>Email: {$email}</p>";
    echo "<p>Fecha y hora: " . date('Y-m-d H:i:s') . "</p>";
} else {
    echo "<p>Error: No se recibieron todos los datos esperados.</p>";
}
?>
<?php
// Establecer cabeceras para evitar problemas de CORS
header("Access-Control-Allow-Origin: *");
header("Content-Type: text/html; charset=UTF-8");

// Verificar si se recibieron los datos esperados
if (isset($_POST['nombre']) && isset($_POST['email'])) {
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);
    
    echo "<h4>Datos recibidos mediante POST:</h4>";
    echo "<p>Nombre: {$nombre}</p>";
    echo "<p>Email: {$email}</p>";
    echo "<p>Fecha y hora: " . date('Y-m-d H:i:s') . "</p>";
} else {
    echo "<p>Error: No se recibieron todos los datos esperados.</p>";
}
?>
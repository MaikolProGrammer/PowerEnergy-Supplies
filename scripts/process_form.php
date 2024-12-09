<?php
// Process form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["nombre"]);
    $lastName = htmlspecialchars($_POST["Apellido"]);
    $email = htmlspecialchars($_POST["correo"]);
    $prefix = htmlspecialchars($_POST["prefijo"]);
    $phone = htmlspecialchars($_POST["telefono"]);
    $descripcion = htmlspecialchars($_POST["descripcion"]);

    // Display confirmation message
    echo "<h2>Datos enviados correctamente</h2>";
    echo "<p><strong>Nombre:</strong> $name $lastName</p>";
    echo "<p><strong>Correo:</strong> $email</p>";
    echo "<p><strong>Teléfono:</strong> $prefix $phone</p>";
    echo "<p><strong>Descripción:</strong> $descripcion</p>";
}
?>

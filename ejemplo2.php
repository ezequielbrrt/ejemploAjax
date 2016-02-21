<?php
	$nombre = $_REQUEST["t1"];


	$conn = mysqli_connect("localhost","root","root","nombres");

	if ($conn) {
		echo "bien conectado";
	}

$sql = "INSERT INTO nombre (nombre) VALUES ('$nombre');";

if (mysqli_query($conn, $sql)){
	echo "query echo";
}else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

$sql2 = "SELECT *
        FROM   nombre;";
$resultado = mysqli_query($conn,$sql2);
while ($fila = mysqli_fetch_assoc($resultado)) {
    echo $fila["nombre"];
    echo "<br>";
}

mysql_free_result($resultado);
mysqli_close($conn);
?>
<?php
$num = $_GET['num'];

//Generador del número aleatorio
if (isset($_GET['numSecreto']) ){
    $numAleatorio = $_GET['numSecreto'];
} else {
    $inferior = $_GET['inferior'];
    $superior = $_GET['superior'];
    $numAleatorio = rand($inferior, $superior);
}

//Estructura de control que compara el número introducido con el número aleatorio generado
if ($num < $numAleatorio){
    echo "El numero introducido es MENOR al generado<br>";     
    echo "<form action=\"jugarMas.php\"><input type=\"hidden\" name=\"numSecreto\" value=\"$numAleatorio\" /><input type=\"submit\" value=\"JUGAR OTRA VEZ\" /></form><br>";
} else if ($num > $numAleatorio){
    echo "El numero introducido es MAYOR al generado<br>";
    echo "<form action=\"jugarMas.php\"><input type=\"hidden\" name=\"numSecreto\" value=\"$numAleatorio\" /><input type=\"submit\" value=\"JUGAR OTRA VEZ\" /></form><br>";
} else {
   echo "Has acertado<br>";
   echo "<form action=\"index.php\"><input type=\"submit\" value=\"JUGAR OTRA VEZ\" /></form><br>";
}


echo "Numero aleatorio: $numAleatorio<br>";
echo "Numero introducido: $num";
?>


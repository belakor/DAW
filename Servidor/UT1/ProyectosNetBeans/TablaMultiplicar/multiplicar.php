<?php

$numero = $_POST['num'];

//if (isset($numero)) {
//    
//}

$arrayNum = str_split($numero);
foreach ($arrayNum as $value) {
    if ($value <= 0 || $value > 9) {
        if ($value !== "," && $value !== "-") {
            header("Location: index.php");
        }            
    } 
}

$stringNum = implode($arrayNum);
$arrayNum2 = preg_split('[,]', $stringNum);
foreach ($arrayNum2 as $value) {
    if ($value <= 0 || $value > 9) {
        header("Location: index.php");
    }else{
    $pos = strpos($value, '-');
    if ($pos !== false) {
        $intervalo = $value;
    } else {
        echo "Tabla del $value: <br>";
        echo "<table border=1>";

        for ($n = 1; $n <= 10; $n++){
            echo "<tr>";
            echo "<td>$value x $n = ", $value * $n, "</td>";
            echo "</tr>";
        }
        echo "</table><br>";
        }
    }
}
$arrayNum3 = preg_split('[-]', $intervalo);
$limI=$arrayNum3[0];
$limS=$arrayNum3[1];
for ($nu = $limI; $nu <= $limS; $nu++) {
    echo "Tabla del $nu: <br>";
    echo "<table border=1>";

    for ($n = 1; $n <= 10; $n++){
        echo "<tr>";
        echo "<td>$nu x $n = ", $nu * $n, "</td>";
        echo "</tr>";
    }
    echo "</table><br>";
}
var_dump($arrayNum3);
var_dump($intervalo);
var_dump($arrayNum2);
//Validación caracteres primer array 

var_dump($arrayNum);
//var_dump($arrayNum2);
//if ($numero <= 0 || $numero > 9) {
//    echo "Error de datos";
//} else {
//    echo "Tabla del $numero: <br>";
//    echo "<table border=1>";
//
//    for ($n = 1; $n <= 10; $n++){
//        echo "<tr>";
//        echo "<td>$numero x $n = ", $numero * $n, "</td>";
//        echo "</tr>";
//    }
//    echo "</table><br>";
//
//    echo "Tabla con while:<br>";
//    $n1 = 0;
//    echo "<table border=1>";
//    while ($n1 < 10) {  
//        $n1++;
//        echo "<tr>";
//        echo "<td>$numero x $n1 = ", $numero * $n1, "</td>";
//        echo "</tr>";    
//    }
//    echo "</table><br>";
//}


?>


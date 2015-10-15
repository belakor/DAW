<?php
$num = $_POST['num'];
$numArray = explode(',', $num);
sort($numArray);
$arrayCountValues = array_count_values($numArray);
$cont = count($arrayCountValues);
$arrayKeys = array_keys($arrayCountValues);
var_dump($arrayKeys);
var_dump($arrayCountValues);
var_dump($cont);

if ($cont < 3) {
    header("Location: index.php");  
}
foreach ($numArray as $value) {
    if (!preg_match("/[0-9]/", $value)){    
        header("Location: index.php");        
    }
}//podria hacer la comprobación en el foreach siguiente
foreach ($arrayKeys as $key => $value) {    
    if (($key > 0) && ($key < ($cont - 1))) {
        echo "$value,";
    }
}
//foreach ($numArray as $key => $value) {    
//    if (($key > 0) && ($key < $cont)) {
//        echo "$value,";
//    }
//}
?>


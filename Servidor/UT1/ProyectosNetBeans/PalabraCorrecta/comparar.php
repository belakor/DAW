<?php
$palabras = $_POST['texto'];
var_dump($palabras);
$arrayP = preg_split("/[\s\t,.:;]+/", $palabras, -1, PREG_SPLIT_NO_EMPTY);
var_dump($arrayP);
function vocals($a) {  
    $array2 = preg_split("/[^aeiou]+/", $a, -1, PREG_SPLIT_NO_EMPTY);
    $stringVocal = implode($array2);
    return(strlen($stringVocal) === 4);    
}
function charCount($a) {  
    return((strlen($a) >= 8) && (strlen($a) <= 10));
}
function capital($a) {  
    return(preg_match("/^[A-Z]/", $a));
}
function checkEro($a) {
    $pos = strpos($a, 'ero');
    return($pos && ($pos === strlen($a) - 3));
}
foreach ($arrayP as $value) {
    if (capital($value) && charCount($value) && vocals($value) && checkEro($value)) {
        $arrayDefinitivo[] = $value;
    }
}
$arrayDefinitivoFinal = array_count_values($arrayDefinitivo);
foreach ($arrayDefinitivoFinal as $key => $value) {
    $longpalabras[] = strlen($key);  
    $arrayPalabrasFinal[$value] = $key;
}
array_multisort($longpalabras, SORT_DESC, $arrayDefinitivoFinal, SORT_ASC);
$arrayCount = count($arrayDefinitivoFinal);
var_dump($arrayCount);
foreach ($arrayDefinitivoFinal as $clave => $valor){
    $palabraM = strtoupper($clave);    
    echo "$palabraM($valor)-";
}
//PRUEBAS 
//Fasguero Chocolatero Panadero Cocotero Coctelero pagadero agua aguero Paanadero Panadero Cocotero Coctelero Ccoctelero
?>


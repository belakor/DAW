<?php
$numero = $_POST['num'];
$divisaInicio = $_POST['divisa'];
$divisaFinal = $_POST['divisa2'];
$numeroFinal = 0;
$euro = 'EUR';
$dolar = 'USD';
$libra = 'GBP';
$yen = 'CNY';

switch ($divisaInicio) {
    case $euro: 
        switch ($divisaFinal) {            
            case $dolar:
                $numeroFinal = $numero * 1.12;
                break;
            case $libra:
                $numeroFinal = $numero * 0.74;
                break;
            case $yen:
                $numeroFinal = $numero * 7.15;
                break;  
            default:
                $numeroFinal = $numero;
                break;
        }
        break;
    case $dolar:
        switch ($divisaFinal) {
            case $euro:
                $numeroFinal = $numero * 0.89;
                break;
            case $libra:
                $numeroFinal = $numero * 0.66;
                break;
            case $yen:
                $numeroFinal = $numero * 6.36;      
            default:
                $numeroFinal = $numero;
                break;
        }
        break;
    case $libra:
        switch ($divisaFinal) {
            case $euro:
                $numeroFinal = $numero * 1.35;
                break;
            case $dolar:
                $numeroFinal = $numero * 1.52;
                break;
            case $yen:
                $numeroFinal = $numero * 9.66;
                break;
            default:
                $numeroFinal = $numero;
                break;
        }
        break;
    case $yen:
        switch ($divisaFinal) {
            case $euro:
                $numeroFinal = $numero * 0.14;
                break;
            case $dolar:
                $numeroFinal = $numero * 0.16;
                break;
            case $libra:
                $numeroFinal = $numero * 0.10;
                break;
            default:
                $numeroFinal = $numero;
                break;
        }
        break;      
}

echo "$numero $divisaInicio son $numeroFinal $divisaFinal";
?>


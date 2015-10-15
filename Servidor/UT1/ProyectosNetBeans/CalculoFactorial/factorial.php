<?php
//n! = n × (n-1)!
$num = $_POST['num'];
$n2 = 1;
for ($n = $num; $n > 0; $n--) {
    //$n3 = $n2 * $n;
    $n2 *= $n;    
}
echo $n2;
?>

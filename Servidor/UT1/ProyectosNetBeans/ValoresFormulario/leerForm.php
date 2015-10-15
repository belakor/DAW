<?php
if (!isset($_GET['name'])){
    header('Location: index.php');
}
$name = $_GET['name'];
$pass = $_GET['pass'];
$birth = $_GET['birth'];
$shop = $_GET['shop'];
$age = $_GET['age'];
$sus = $_GET['sus'];

echo 'Datos del usuario:<br>';
echo "$name<br>$pass<br>$birth<br>$shop<br>$age<br>$sus";
?>


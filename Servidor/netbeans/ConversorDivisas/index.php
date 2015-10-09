<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <form action="conversor.php" method="POST">
            Introduce una cantidad:<input type="text" name="num" value="" />
            <select name="divisa">
                <option>EUR</option>
                <option>USD</option>
                <option>GBP</option>
                <option>CNY</option>
            </select>
            convertir a:
            <select name="divisa2">
                <option>EUR</option>
                <option>USD</option>
                <option>GBP</option>
                <option>CNY</option>
            </select>           
            <input type="submit" value="ENVIAR" name="env" />
        </form>
    </body>
</html>

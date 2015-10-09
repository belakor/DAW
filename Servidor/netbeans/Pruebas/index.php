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
        <?php
        $palabra = "ccaccaaa";
        $pattern = "/[aeiou]{4}/";
        if (preg_match($pattern, $palabra)) {
            echo "si";
        } else {
            echo "No;";
        }
        ?>
    </body>
</html>

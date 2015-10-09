<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <form action="generarNumero.php">
            
            NÚMERO: <input type="text" name="num" /><br>
            
            <input type="hidden" name="numSecreto" value="<?php echo $_GET['numSecreto'] ?>"  /><br>
            <input type="submit" value="ENVIAR" name="enviar" />             
        </form>
    </body>
</html>

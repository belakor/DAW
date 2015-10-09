var edadPadre =  prompt('Edad padre: ');  
var edadHijo = prompt('Edad hijo: ');  
var anios = 0;
//x+a=2(y+a)
//x+a = 2y + 2a
//a=x-2y
anios = edadPadre - (2 * edadHijo);
alert (anios);


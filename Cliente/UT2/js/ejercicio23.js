var number =  prompt('Escribe un número dentro del rango del 1 al 999: ');  
//var number1 = "";
var suma = 0;
    
while (number >= 0 && number < 999) {        
    suma += (number * 1);	
    number = prompt('Escribe un número: ');
    if (!!isNaN(number)){
        alert("Error no has escrito un número");
    } else if (number < 0 || number > 999) {
		alert("Error has escrito un número fuera del rango");  
	}
}

if (number < 0 || number > 999) {
		alert("Error has escrito un número fuera del rango");  
} else if (!!isNaN(number)){
        alert("Error no has escrito un número");
}

if (number == 999) {
    alert(suma);
}
 /*else if (number < 0 || number > 999) {
	alert("Error has escrito un número fuera del rango");
} else if (!!isNaN(number)){
    alert("Error no has escrito un número");
}*/


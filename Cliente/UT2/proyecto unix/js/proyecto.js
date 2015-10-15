//tiempo unix = 1 enero 1970
//formato fecha DDMMMYYYY
var fecha = prompt("Introduzca una fecha:");
var fechaOk = '';
var dia = '';
var mes = '';
var anio = '';
!fecha[9]? fechaOk = true : fechaOk = false;
if (fechaOk) {
	dia = +(fecha[0]+fecha[1]);
	mes = fecha[2]+fecha[3]+fecha[4];
	anio = +(fecha[5]+fecha[6]+fecha[7]+fecha[8]);
} else {
	alert("Por favor, introducir la fecha en el formato solicitado");
}
var diaOk = '';
var mesOk = '';
var anioOk = '';
var fechaOk = '';
//variables booleanas como una sola?

if (dia >=1 && dia <= 31) {
	diaOk = true;
}
switch(mes){
	case 'ene': mesOk = true;
	break;
	case 'feb': mesOk = true;	
	break;
	case 'mar': mesOk = true;	
	break;
	case 'abr': mesOk = true;	
	break;
	case 'may': mesOk = true;	
	break;
	case 'jun': mesOk = true;	
	break;
	case 'jul': mesOk = true;	
	break;
	case 'ago': mesOk = true;	
	break;
	case 'sep': mesOk = true;	
	break;
	case 'oct': mesOk = true;	
	break;
	case 'nov': mesOk = true;	
	break;
	case 'dic': mesOk = true;	
	break;	
}
alert("todo OK");

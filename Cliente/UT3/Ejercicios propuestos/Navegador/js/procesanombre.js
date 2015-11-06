//var datos = prompt("Introduce nombre y apellidos:");
function procesarDatos(datos){
    var arrayDatos = datos.split(" "),
     nombre = arrayDatos[0],
     numLetrasApellidos = (arrayDatos[1]+arrayDatos[2]).length,
     fecha = new Date(),
     datosFinal = '',
     diaDelMes = fecha.getDate() + "",
     diaDeSemana = fecha.getDay() + "",
     mes = fecha.getMonth() + "",
     anio = fecha.getFullYear() + "",
     horas = fecha.getHours() + "",
     minutos = fecha.getMinutes() + "",
     segundos = fecha.getSeconds() + "",
     horaCompleta = horas + ":" + minutos + ":" + segundos,
     navegador = navigator.appCodeName,
     sistOp = navigator.oscpu,
     conConexion = navigator.onLine,
     datosFinal = "";
     
    datosFinal = "Hola, " + nombre + " Hoy es " + diaDeSemana + ", " + diaDelMes + " de " + mes + " de " + anio + " y "+
    + "son las " + horaCompleta + " horas, por lo tanto faltan [23] días para finalizar el año" +
    + "Tus apellidos tienen un total de [16] letras Utilizas el navegador " +
    + navegador + " en su versión [versión] con el sistema operativo "+
    + sistOp + " Estas trabajando " + conConexion + " conexión";
     
    return datosFinal;
}

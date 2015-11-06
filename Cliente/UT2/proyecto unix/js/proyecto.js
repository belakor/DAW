function calculateDaysSinceEpoch(fecha) {
    var dia, mes, anio, diaOk, mesOk, anioOk, anioBisiesto,
        diasMes, sumaDias, aniosPasados, contadorDias = 0, i,
        fechaNoValida = "La fecha introducida no es válida",
        formatoNoValido = "Por favor, introducir la fecha en el formato solicitado";
    dia = +(fecha[0] + fecha[1]);
    mes = fecha[2] + fecha[3] + fecha[4];
    anio = +(fecha[5] + fecha[6] + fecha[7] + fecha[8]);
    //Comprobación año bisiesto
    if (((anio % 4 === 0) && (anio % 100 !== 0)) || (anio % 400 === 0)) {
        anioBisiesto = true;
    } else {
        anioBisiesto = false;
    }
    //Comprobación días válidos
    if (dia >= 1 && dia <= 31) {
        diaOk = true;
    } else {
        diaOk = false;
    }
    // Comprobación mes válido, asignación de días máximos por mes y días a 
    // sumar según el mes
    switch (mes) {
    case 'jan':
        mesOk = true;
        diasMes = 31;
        sumaDias = 0;
        break;
    case 'feb':
        mesOk = true;
        diasMes = anioBisiesto ? 29 : 28;
        sumaDias = 31;
        break;
    case 'mar':
        mesOk = true;
        diasMes = 31;
        sumaDias = anioBisiesto ? 31 + 29 : 31 + 28;
        break;
    case 'apr':
        mesOk = true;
        diasMes = 30;
        sumaDias = anioBisiesto ? 62 + 29 : 62 + 28;
        break;
    case 'may':
        mesOk = true;
        diasMes = 31;
        sumaDias = anioBisiesto ? 92 + 29 : 92 + 28;
        break;
    case 'jun':
        mesOk = true;
        diasMes = 30;
        sumaDias = anioBisiesto ? 123 + 29 : 123 + 28;
        break;
    case 'jul':
        mesOk = true;
        diasMes = 31;
        sumaDias = anioBisiesto ? 153 + 29 : 153 + 28;
        break;
    case 'aug':
        mesOk = true;
        diasMes = 31;
        sumaDias = anioBisiesto ? 184 + 29 : 184 + 28;
        break;
    case 'sep':
        mesOk = true;
        diasMes = 30;
        sumaDias = anioBisiesto ? 215 + 29 : 215 + 28;
        break;
    case 'oct':
        mesOk = true;
        diasMes = 31;
        sumaDias = anioBisiesto ? 245 + 29 : 245 + 28;
        break;
    case 'nov':
        mesOk = true;
        diasMes = 30;
        sumaDias = anioBisiesto ? 276 + 29 : 276 + 28;
        break;
    case 'dec':
        mesOk = true;
        diasMes = 31;
        sumaDias = anioBisiesto ? 306 + 29 : 306 + 28;
        break;
    default:
        mesOk = false;
    }
    //Comprobación año
    if (anio >= 1970) {
        anioOk = true;
    } else {
        anioOk = false;
    }
    //Comprobación de formato correcto
    if (diaOk && mesOk && anioOk) {
        //Comprobación de que los días del mes son válidos
        if (dia <= diasMes) {
            diaOk = true;
        } else {
            diaOk = false;
        }
        //Comprobación final de la fecha y contador de días
        if (diaOk) {
            aniosPasados = anio - 1970;
            for (i = 1970; i < (1970 + aniosPasados); i +=  1) {
                if (((i % 4 === 0) && (i % 100 !== 0)) || (i % 400 === 0)) {
                    contadorDias += 366;
                } else {
                    contadorDias += 365;
                }
            }
            contadorDias = contadorDias + sumaDias + (dia - 1);
            return contadorDias;
        }
        return fechaNoValida;
    }
    return formatoNoValido;
}
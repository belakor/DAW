function showVehicleRevisionStatus (queryString) {
    var matriculaExpresionRegular = /numberplate=[0-9]{4}-[a-z]{3}/,
        fechaExpresionRegular = /lastrevdate=(0[1-9]|[12][0-9]|3[01])[a-z]{3}(19|20)[0-9]{2}/,
        fechaMatricula = /numberplate=|lastrevdate=/,
        queryString2 = queryString, 
        numberplate, numberplateOk, empresa, diasMesFecha, fechaRestar,
        fechaHoy, d, m, s, h, ms, numeroAleatorio = Math.floor(Math.random() * (5 - 1 + 1)) + 1,
        // numberplate = queryString2.match(matriculaExpresionRegular).join(),
        // numberplate = numberplate.split(fechaMatricula),
        // numberplate = numberplate[1],
        lastrevdate = queryString2.match(fechaExpresionRegular),
        lastrevdate = lastrevdate[0].split(fechaMatricula),
        lastrevdate = lastrevdate[1],
        mesOk, diaOk, diasMes, anioBisiesto, culpaNumber = 'Numberplate',
        dia = +(lastrevdate[0] + lastrevdate[1]),
        mes = lastrevdate[2] + lastrevdate[3] + lastrevdate[4],
        anio = +(lastrevdate[5] + lastrevdate[6] + lastrevdate[7] + lastrevdate[8]);
    //la Ñ no la capta de por sí, pero la cambia en el query, preguntar
    if (queryString2.match(matriculaExpresionRegular)) {
        numberplate = queryString2.match(matriculaExpresionRegular).join();
        numberplate = numberplate.split(fechaMatricula);
        numberplate = numberplate[1];
    } //else {
    //     numberplateOk = false;
    // }
    //Comprobación año bisiesto
    if (((anio % 4 === 0) && (anio % 100 !== 0)) || (anio % 400 === 0)) {
        anioBisiesto = true;
    } else {
        anioBisiesto = false;
    }
    // Comprobación mes válido
    switch (mes) {
    case 'jan':
        mesOk = true;
        diasMes = 31;
        diasMesFecha = 0;
        break;
    case 'feb':
        mesOk = true;
        diasMes = anioBisiesto ? 29 : 28;
        diasMesFecha = 1;
        break;
    case 'mar':
        mesOk = true;
        diasMes = 31;
        diasMesFecha = 2;
        break;
    case 'apr':
        mesOk = true;
        diasMes = 30;
        diasMesFecha = 3;
        break;
    case 'may':
        mesOk = true;
        diasMes = 31;
        diasMesFecha = 4;
        break;
    case 'jun':
        mesOk = true;
        diasMes = 30;
        diasMesFecha = 5;
        break;
    case 'jul':
        mesOk = true;
        diasMes = 31;
        diasMesFecha = 6;
        break;
    case 'aug':
        mesOk = true;
        diasMes = 31;
        diasMesFecha = 7;
        break;
    case 'sep':
        mesOk = true;
        diasMes = 30;
        diasMesFecha = 8;
        break;
    case 'oct':
        mesOk = true;
        diasMes = 31;
        diasMesFecha = 9;
        break;
    case 'nov':
        mesOk = true;
        diasMes = 30;
        diasMesFecha = 10;
        break;
    case 'dec':
        mesOk = true;
        diasMes = 31;
        diasMesFecha = 11;
        break;
    default:
        mesOk = false;
    }
    if (mesOk) {
        //Comprobación de que los días del mes son válidos
        if (dia <= diasMes) {
            diaOk = true;
        } else {
            diaOk = false;
        }
    }
    
    fechaRestar = new Date(anio, diasMesFecha, dia);
    fechaHoy = new Date();
    ms = fechaHoy - fechaRestar;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    h = Math.floor(m / 60);
    d = Math.floor(h / 24);
    
    if (d >= 365) {
        switch (numeroAleatorio) {
            case 1:
                empresa = 'ABERCO';
                break;
            case 2:
                empresa = 'JUMDER';
                break;
            case 3:
                empresa = 'NOIRTE';
                break;
            case 4:
                empresa = 'OSPIA';
                break;
            case 5:
                empresa = 'SAIMTE';
                break;
        }
    }
    
    if (!numberplate){
         return lastrevdate;
    } else {
        return [numberplate, lastrevdate];
    }
}
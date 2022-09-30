// Elabora un programa que permita averiguar si una persona debe sacar su CUIL, sabiendo su fecha de nacimiento.
// El Código Único de Identificación Laboral(CUIL) es el número que se otorga a todo trabajador al inicio de su 
// actividad laboral en relación de dependencia(mayores de 17 años) que pertenezca al Sistema Integrado de Jubilaciones y Pensiones(SIJP), 
// y a toda otra persona que gestione alguna prestación o servicio de la Seguridad Social en la República Argentina.

//     Nota:   Se debe comparar con la fecha actual y no tener en cuenta los años bisiestos.

// 1/3/1995
var diaNacimiento = 0;
var mesNacimiento = 0;
var diaDelAño = 0;

var añoNacimiento = 0;
var añoNacimientoEnDias = 0;

var nacimiento = añoNacimientoEnDias - diaDelAño; //dias totales de vida

var diecisieteAños = 17 * 365; // 17 años en dias

function introducirFecha() {
    do {
        alert('Introduzca correctamente y en orden la fecha de su nacimiento. Solamente los valores numericos son validos');
        diaNacimiento = parseInt(prompt('Introduzca su dia de nacimiento: del 1 al 31'));
        mesNacimiento = parseInt(prompt('Introduzca su mes de nacimiento: del 1 al 12'));
        añoNacimiento = parseInt(prompt('Introduzca su año de nacimiento: del 1900 al 2022'));
    } while (isNaN(diaNacimiento) || isNaN(mesNacimiento) || isNaN(añoNacimiento) || diaNacimiento > 31 || mesNacimiento > 12 || añoNacimiento > 2022 || añoNacimiento < 1900);
}

function calcularNacimiento() {
    if (mesNacimiento > 1) {
        diaDelAño = diaNacimiento + (mesNacimiento * 30 - 30);
    } else{
        diaDelAño = diaNacimiento
    }

    let años = 2022 - añoNacimiento;
    añoNacimientoEnDias = años * 365;

    nacimiento = añoNacimientoEnDias - diaDelAño;
}

function calcularCuil() {
    introducirFecha()
    calcularNacimiento()

    if (nacimiento >= diecisieteAños) {
        alert('Está usted en edad de obtener su CUIL');
        console.log('Está usted en edad de obtener su CUIL');
    } else {
        alert('aun es demasiados joven para obtener su CUIL, debe tener al menos 17 años');
        console.log('aun es demasiados joven para obtener su CUIL, debe tener al menos 17 años');
    }
}

console.log(calcularCuil());
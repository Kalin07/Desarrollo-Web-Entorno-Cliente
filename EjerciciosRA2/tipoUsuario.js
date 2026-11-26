
//Creo un enum con todas las opciones de mensajes que se van a mostrar

export const MENSAJES = Object.freeze({ 
  MENOR: "Menor de edad",
  ACTIVO: "Trabajando o estudiando",
  JUBILADO: "Jubilado",
  NO_POSITIVA: "La edad debe ser positiva",
  CON_DECIMALES: "Introduce la edad sin decimales",
  NO_NUMERO: "La edad introducida no es un número",
});

// Función principal, que devuelve un mensaje según el rango de edad

export function clasificarEdad(edad){
    if (typeof edad !== 'number' || isNaN(edad)){ // Comprobamos si el tipo de dato es diferente a "number" o si es NaN
        throw new Error(MENSAJES.NO_NUMERO);
    }
    if (!Number.isInteger(edad)){  // Comprobamos si el número tiene decimales
        throw new Error(MENSAJES.CON_DECIMALES);
    }
    if (edad < 0){
        throw new Error(MENSAJES.NO_POSITIVA);
    }
    if (edad < 18){
        return MENSAJES.MENOR;
    }
    else if (edad >= 18 && edad <= 65){
        return MENSAJES.ACTIVO;
    }
    else{
        return MENSAJES.JUBILADO;
    }
}
 
//Función para pasar de una cadena con un número a un entero

export function parseEdad(edad){
    if (Number.isInteger(parseInt(edad))){
        return parseInt(edad);
    }
    else {
        throw new Error(MENSAJES.NO_NUMERO);
    }
}
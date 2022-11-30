const reservaEntrada = () => {
    let entrada = " ";
    let cantidad = 0;
    let otraReserva = false;
    
    do {
        entrada = prompt("¿Queres reservar tu entrada para YSY A o para DUKI?");
        cantidad = parseInt(prompt("¿Cuantas entradas queres reservar?"));
        let cantidadValida = validarCantidad(cantidad);

        switch (entrada) {
            case "para ysy a":
                break;
            case "para duki":
                break;
            default:
                alert("Respuesta incorrecta");
                cantidadValida = 0;
        }

        otraReserva = confirm("¿Queres realizar otra reserva?");
    } while (otraReserva);
    
};

//*hecho luego de ver el AfterClass
const validarCantidad = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad <= 0) {
        if (cantidad !== 0) {
            alert("Caracter no valido")
        } else {
            alert ("Escriba una cantidad valida")
        }
        cantidad = parseInt(prompt("¿Cuantas entradas queres reservar?"));
    }
    
    return cantidad;
};
//*

reservaEntrada()
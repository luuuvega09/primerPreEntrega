//declaración de variables


let opcion = "";
let stockRojas = 4;
let stockAzul = 3;
let AlquilerRojas = 0;
let AlquilerAzul = 0;
let precioHoraRoja = 2000;
let precioHoraAzul = 4000;
let cantidadAlquilada = 0;
let horasAlquilada = 0;
let saldoAlquiler = 0;

//declaración de funciones
function alquilar (alquilar, stock, horas, saldo, precioHora){
        alquilar = parseInt(prompt("Ingrese la cancha que desea alquilar:"));
        while ((alquilar <= 0) || (alquilar > stock)){
        alert("El stock disponible es de "+stock+" canchas. Por favor vuelva a intentar");
        alquilar = parseInt(prompt("Ingrese la cantidad de canchas que desea alquilar:"));        
        }
        stock -= alquilar;
        horas = parseInt(prompt("Ingrese la cantidad de horas a alquilar (el máximo permitido es de 5 horas)"));
        while ((horas < 1) || (horas > 5)){
            if (horas <1){
                alert("Ingrese una hora válida")
                horas = parseInt(prompt("Ingrese la cantidad de horas a alquilar (el máximo permitido es de 5 horas)"));
            }else
            alert("El máximo permitido es de 5 horas");
            horas = parseInt(prompt("Ingrese la cantidad de horas a alquilar (el máximo permitido es de 5 horas)"));
        }
        saldo = (alquilar * horas) * precioHora; // esto podria ser una funcion dentro de una funcion? VER
        alert("Ud ha alquilado "+alquiler+ " canchas por "+horas+ " horas, debe abonar $"+saldo); 
        return (alquiler); //esto está bien?
}

//simulación
alert("Hola, usted esta en mundo futbol \n las mejores canchas para divertirte!");
opcion = prompt("Seleccione una opción: \n a)Cancha 1 color roja \n 2) Cancha 2 color azul \n 3)Consultar canchas disponibles \n 4)Salir");
while (opcion != "4"){
    if (opcion == "1"){
        alquilaRoja = alquilar(alquilarRojas, stockRojas, horasAlquiladas, saldoAlquiler, precioHoraRoja);
        stockRojas -= alquilerRojas;
        //console.log(alquilerROjas)
        //console.log(AlquilerRojas);;

    }else if (opcion == "2"){
        AlquilerAzul = alquiler(alquilerAzul, stockAzul, horasAlquiladas, saldoAlquier, precioHoraAzuñ);
        stockAzul -= reservaAzul;
        //console.log(alquilerAzul);
        //console.log(alquilerAzul);
        
    }else if (opcion == "3"){
        alert("El stock disponible es:\n Canchas rojas: "+stockROJAS+"\n Canchas azul "+stockAzul);
    }else{
        alert("Opción incorrecta.");
    }
    opcion = prompt("Seleccione una opción: \n 1)Cancha Roja \n 2)Cancha Azul \n 3)Consultar canchas \n 4)Salir");
}

alert("Gracias por venir!");
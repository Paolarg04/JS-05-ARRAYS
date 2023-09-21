/*Sistema para registrar pacientes y citas de estos pacientes, utilizando metodos de arrays 

Lista de cosas por hacer / cosas por tomar en cuenta

- Un array para pacientes
- Un array para citas

- Prompt para registrar los datos
- Datos o registrar: nombre, apellido, fecha, edad, hora, especialista
- Funcion registrarPaciente
- Funcion registrarCita
- Metodos para modificar los arrays (push, forEach, splice)

*/


// Crear un array para almacenar mis pacientes

//La variable pacientes esta declarada e inicializada (tiene un nombre, y tiene un valor, a pesar de que su arreglo este vacio)

//Los indices del arreglo estan undefined, porque no hay elememtos pero si hay espacios disponibles
let pacientes = []; //paciente = definido


// Funcion para registrar un nuevo paciente
//Paso 1. Ejecucion de mi funcion. Pido dos datos
function registrarPaciente(nombre, edad){


    //Crear un array dentro de otro array
    //Paso 2. Guardo cada par de datos (nombre y la edad en una variable llamada paciente)
    let paciente = {
        nombre,
        edad,
        citas: []
        };
    
    //Agregar paciente el array
    //Paso 3. Ya que tengo el par de datos, le hago un push a mi array para guardar al paciente
    pacientes.push(paciente);
    return paciente;
}


////////////////////////////////////////////////////////
//console.log("Felipe el 'amante numero 1'de los chilaquiles verdes"); 

//Funcion para registrar citas de un paciente

//Cuando ejecuto mi funcion, necesito un paciente, una hora y una fecha para registrar la cita
function registrarCita(paciente, fecha, hora){

    //Cuando tenga estos datos, buscare dentro del paciente el apartado citas para hacerle un push ahi
    paciente.citas.push(
        {
            fecha,
            hora
        }
    );
}


// Funcion para mostrar la informacion del paciente con su cita
function mostrarInfoPaciente(paciente){
    console.log("Nombre del paciente: " + paciente.nombre);
    console.log("Edad del paciente: " , paciente.edad); // 31
    console.log("Citas registradas: ");

    //forEach para imprimir citas
    paciente.citas.forEach((cita, indice) =>{
        console.log("Indice: " + indice + "Fecha: " + cita.fecha + "Hora: " + cita.hora)
    });

}

/*Funcionamiento del forEach anterior
1 . Definir una variable temporal llamada cita y otra variable temporal llamada indice
2 . Cada que se ejecute el forEach, busca y encuentra una cita, asigna esa informacion a las variables temporales e imprime la informacion.
3 . Vuelve a buscar y encontrar otra cita, y reasigna esa informacion a las variables temporales
*/









//Registrar un paciente desde la invocacion de la funcion
let paciente1 = registrarPaciente("Felipe", 31);
let paciente2 = registrarPaciente("Naruto", 20);
let paciente3 = registrarPaciente("Dr.Simi", 50);


//Registrar la cita de un paciente desde la invocacion de la funcion registrarCita
registrarCita(paciente1, "2023-09-12", "1:00 PM");

//Mostrar informacion del paciente
mostrarInfoPaciente(paciente1);
mostrarInfoPaciente(paciente2);
mostrarInfoPaciente(paciente3);


/*ForEach

Es un metodo de arrays, que tiene como objetivo iterar o recorrer cada elemento del array con la finalidad de aplicarle una funcion establecida.


Generalmente el for each se utiliza para imprimir la informacion del arreglo

Sintaxis ForEach

array.forEach(fuction(elemento, indice, arreglo))

- elemento: el elemento actual del arreglo que se esta procesando
- indice: la posicion del elemento actual en el array
- arreglo: el array que se esta recorriendo


    Ejemplo del supermercado

- elemento: producto que compre y que esta en el carrito
- indice: la posicion de ese producto
- arreglo: carrito del super

*/

let carritoSuper = ["manzanas", "papitas", "huevo", "jabon de trastes", "pan"];

//Oye JS, para cada elemento del tipo "producto" que tenga una posicion dentro del arreglo llamado "carritoSuper", vas hacer algo
carritoSuper.forEach(function(producto, indice) {
    console.log("Producto: " + producto + " con la posicion: " + indice); //el indice es opcional ponerlo
});

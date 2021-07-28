let nombre= prompt ("ingrese su nombre")
let apellido=  prompt ("ingrese su apellido")
console.log (nombre+ " "+ apellido);
let fecha= prompt ("ingrese año actual")
let nacimiento= prompt ("ingrese su año de nacimiento")
let edad= fecha-nacimiento
console.log (edad)
let verificacion= confirm ("¿tenes dni?")
if (edad>=18 && verificacion){
    console.log ("PODES ENTRAR");
} else{
    console.log ("NO SOS MAYOR")
}
alert ("¡Volve Pronto"+" "+ nombre+" "+ apellido+ "!")
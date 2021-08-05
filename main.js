let passwordDefault = 311295
let password = 0
let count = 0
let trys = 5
let operacion
let saldoActual = 5000
let monto
function sumar (monto) {
    saldoActual = saldoActual + monto
   }
 
   function restar (monto) {
     saldoActual = saldoActual - monto
     }

let usuario = prompt("ingresa tu usuario")
alert(`el nombre que ingresaste es ${usuario}`);
password = Number(prompt("ingrese la contraseña numerica"))
if (password == passwordDefault) {
    
    operacion = Number(prompt ("¿Que operacion desea realizar? 1-deposito/ 2-extraccion"))
    
    
    
    switch (operacion) {
        case 1 :
        monto = Number(prompt("ingresa monto a depositar"))
        sumar(monto)
        alert("su saldo disponible es" + " "+ saldoActual);
        break;
    

         case 2 :
        monto = Number(prompt("ingresa monto a extraer"))
        restar(monto)
        alert ("su saldo disponible es" + " "+ saldoActual)
        break;

         default:
         alert ("no se puede realizar esa operacion en este momento")
        
    }
}else{ alert("CONTRASEÑA INCORRECTA")}
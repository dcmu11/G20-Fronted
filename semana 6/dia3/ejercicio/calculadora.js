//ejer1

// let n1=prompt("ingresa numero 1");
// let n2=prompt("ingresa numero 2");

// let resultado=0;

// const operacion=prompt("ingrea que operacion quieres realizar + - / *");
// if (operacion ==="+") {
//     resultado= +n1 + +n2
//   //  console.log("la suma es ",resultado)
//   alert("la suma es "+resultado);

// } else if(operacion ==="-"){
//     resultado= +n1 - +n2
//    // console.log("la Resta es ",resultado)
//    alert("la resta es "+resultado);

// }else if(operacion ==="*"){
//     resultado= +n1 * +n2
//    // console.log("la multiplicacion es ",resultado)
//    alert("la multiplicacion es "+resultado);

// }else if(operacion ==="/"){

//     if (n2==0) {
//         alert("ingresar numero diferente de 0")
//     let n2=prompt("ingresa numero 2");
//     }
//     resultado= +n1 / +n2
//    // console.log("la division  es ",resultado)
//    alert("la division es "+resultado);
// }
// else{
//     alert(" operacion incorecta")
// }
////

let n1 = prompt("ingresa numero 1");
let n2 = prompt("ingresa numero 2");
n1=+n1;
n2=+n2;
if (n1 > n2) {
   
  alert("el numero mayor es " + n1);
} 
else if (n1 < n2) {
  alert("el numero mayor es " + n2);
} else {
  alert("SON NUMEROS IGUALES " + n1 + "=" + n2);
}

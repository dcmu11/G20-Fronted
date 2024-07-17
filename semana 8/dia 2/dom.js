function imprimir() {
  Swal.fire("SweetAlert2 is working!");
}

// 5 selectores

//1 queryselector

document.querySelector("#btn").addEventListener("click", () => {
  alert("hola desde js");
});

const elemento = document.querySelector("#miDiv");
console.log(elemento.textContent);

//existe en js docuemnt
//es un atributi que permite ingresar a html desde js

//document.getElementBytagName('h1')
//document.getElementById('nombreid')
//document.getElementByclassName('nombreclase')

const inputName = document.querySelector(".email");

console.log(inputName.value);

const pass = document.querySelector("#pass");

console.log(pass.placeholder);

const input = document.querySelector("input");
console.log(input);

const inputs = document.querySelectorAll("input");
console.log(inputs);

//convertimos todos los impust en una array
const convertir = Array.from(inputs);
console.log(convertir);

//filtar cuando ya se convertio en un array
const convertifilter = convertir.filter((input) => input.type === "email");
console.log("ITERADO . .", convertifilter);

//dark color

function cambiarColor() {
  const color = document.getElementById("darkmode");
  color.style.color = "blue";
}

function cambiardenuevo() {
  const color = document.getElementById("darkmode");
  color.style.color = "black";
}

//cambiar texto

function cambiarTexto() {
  const texto = document.querySelector("#change");
  texto.textContent = "bienvenidos";
}

function modificar() {
  const modifica = document.querySelector("#modificar");
  modifica.textContent = "CAMBIOS REALIZADOS";

  modifica.style.color="blue"
}

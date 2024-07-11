// for

// for (let i = 0; i < 10 ; i+=2) {
//     console.log(i);

// }

// const alum = ["juan", "pepe", "deivy", "coco"];

// for (let i = 0; i < alum.length; i++) {
//   console.log("cantida de alumnos: ", alum[i]);
// }

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 1; i < num.length; i += 2) {
//   console.log("numeros par: ", num[i]);
// }

// const lap = [
//   {
//     marca: "mac",
//     precio: 2500,
//     nombre: "2024",
//     calificacion: "5",
//   },
//   {
//     marca: "ASUS",
//     precio: 2000,
//     nombre: "2023",
//     calificacion: "3",
//   },
//   {
//     marca: "Acer",
//     precio: 223,
//     nombre: "2024",
//     calificacion: "4",
//   },
// ];

// for (let i = 0; i < lap.length; i++) {
//   console.log(lap[i].marca);
// }

// //map

// const produc = [
//   {
//     name: "laptop",
//     price: 1500,
//   },
//   {
//     name: "Monitor",
//     price: 1800,
//   },
//   {
//     name: "celular",
//     price: 2000,
//   },
//   {
//     name: "tv",
//     price: 2500,
//   },
//   {
//     name: "lavadora",
//     price: 1500,
//   }
  
// ];

// produc.map(produc =>{
// console.log("producto: ",produc.name)
// });

// // while

// //imprime numero 1 al 10 
// let d  = 1;
// while (d <=10) {
//     console.log(d);
//     d++;
// }


//dos arrgleso de 6 elementos y recore cada bucle

// const dias = [
//     {
//       name: "Lunes",
//       Inicial: "L",
//     },
//     {
//         name: "Martes",
//         Inicial: "M",
//     },
//     {
//         name: "Miercoles",
//         Inicial: "X",
//     },
//     {
//         name: "Jueves",
//         Inicial: "J",
//     },
//     {
//         name: "Viernes",
//         Inicial: "V",
//     },
//     {
//         name: "Sabado",
//         Inicial: "S",
//     }
    
//   ];

//   for (let i = 0; i < dias.length; i++) {
//     console.log(dias[i].name);
//   }
//   const Meses = [
//     {
//       name: "Enero",
//       Inicial: "En",
//     },
//     {
//         name: "Febrero",
//         Inicial: "Fe",
//     },
//     {
//         name: "Marzo",
//         Inicial: "Mar",
//     },
//     {
//         name: "Abril",
//         Inicial: "Abr",
//     },
//     {
//         name: "Mayo",
//         Inicial: "May",
//     },
//     {
//         name: "Junio",
//         Inicial: "jun",
//     }
    
//   ];
//   for (let i = 0; i < Meses.length; i++) {
//     console.log(Meses[i].name);
//   }

// sumar precio de una lista
const precio=[10,20,20,13,30]
let suma=0;
console.log("Precios")
console.log(precio)
for (let i = 0; i < precio.length; i++) {
    console.log(precio[i]);
  //  suma=precio[i]+suma;
suma +=precio[i];
    
    
}

console.log("suma de precios")
console.log(suma);


const tec=[
    {
        name:"laptop",
        price:4500,
        stock:true
    },

    {
        name:"Monitor",
        price:1800,
        stock:false
    },

    {
        name:"celular",
        price:2500,
        stock:true
    },
    {
        name:"tv",
        price:5300,
        stock:true
    }
]
// tec.map((p)=>{
 //   if (p.stock==false) {
  //      console.log(p);
 //   }
//  
//
// })
let aumentado=[];
for (let i = 0; i < tec.length; i++) {
    // if (tec[i].stock==false) {
    //     console.log(tec[i]); 
    // }
   
    // if (tec[i].price<3000) {
    //     console.log(tec[i]); 
    // }
   

        tec[i].price=tec[i].price*2
     
       
    
        
}
aumentado.push(tec)
console.log(aumentado)

// entida con un KEY y un VALUE
//objeto persona
const persona={
    Nombre:"deivy",
    edad:29,
    sexo:"masculino",
    talla:1.65,
}
//objeto carro

const carro={
    marca:"audi",
    moto:"V8",
    color:"verde",
    rueda:4,
    combustible:"electrico",
    nuevo:true,

}
console.log(carro);
console.table(persona);

// ingreso valor de un objeto
console.log(carro.marca)

//alterar
carro.color="azul";

//ingrear
carro.fabri=2024;
console.table(carro);

//creamos un arreglo de objetos

const laptos=[
    {
        marca:"mac",
        precio:2500,
        anio:2024,
        color:"azul"
    
    },
    {
        marca:"ASUS",
        precio:2000,
        anio:2023,
        color:"roja"
    
    }
]
console.table(laptos);
console.log(laptos[1].marca);
console.log(laptos[0].precio);
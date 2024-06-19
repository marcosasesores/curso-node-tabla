const Deadpool = {
    nombre: "wade",
    apellido: "Winston",
    poder: "Regeneración",
    getNombre(){return `${this.nombre} ${this.apellido} ${this.poder}`}
}

console.log(Deadpool.getNombre());

// const nombre = Deadpool.nombre;
// const apellido = Deadpool.apellido;
// const poder = Deadpool.poder;
// con la desestructuración intentartemoms simplificar esto: 


function imprimirHeroe(herore){
const { nombre, apellido, poder , edad=33 }= herore;
console.log(nombre, apellido, poder, edad)
}


function imprimirHeroe({nombre, apellido, poder , edad=33 }){
nombre ="Fernando";
console.log(nombre, apellido, poder, edad)
}

imprimirHeroe(Deadpool);


const heroes =["Deadpool","Superman","Batman"];

const [h1,h2,h3]= heroes;

console.log(h1,h2,h3)


//================= Imaginemos que solo nos interesa batman: =====================

// const heroes =["Deadpool","Superman","Batman"];

// const [ , ,h3]= heroes;

// console.log(h3)










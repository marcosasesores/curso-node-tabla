const empleados = [
    {
        id: 1,
        nombre: "Fernando"
    },
    {
        id: 2,
        nombre: "Maria"
    },
    {
        id: 3,
        nombre: "Marcos"
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },
];

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => { // resolve todo bien || reject no se cumple
        const empleado = empleados.find(e => e.id === id);
        empleado ? resolve(empleado) : reject("No existe el empleado con id: " + id);
    });
};

const getSalario = (id) => {
    return new Promise((resolve, reject) => { // resolve todo bien || reject no se cumple
        const salario = salarios.find(s => s.id === id)?.salario;
        salario ? resolve(salario) : reject("No existe salario con id: " + id);
    });
};

const id =3;

//Dado que la función es async, esta cadena se envuelve automáticamente en una promesa resuelta.

// const getInfoUser= async( )=> {
//     return "Hola mundo"
// };

// getInfoUser()
//     .then(mensaje => console.log(mensaje))


const getInfoUser = async(id) => {
    try{
        const empleado = await getEmpleado(id);
    const salario = await getSalario(id);

    return "el salario es "+ salario + " para el empleado "+empleado.nombre;
    }catch(error){
        throw error;
    }
    
}

getInfoUser(id  )
.then(msg => console.log(msg))
.catch(err => console.log(err));
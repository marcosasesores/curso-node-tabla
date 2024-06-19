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

const id = 2;
getEmpleado(id)
    .then(empleado => {
        console.log("Empleado encontrado:", empleado);
        return getSalario(id);
    })
    .then(salario => {
        console.log("Salario encontrado:", salario);
    })
    .catch(err => {
        console.error(err);
    });

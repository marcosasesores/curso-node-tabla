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

// Función para obtener un empleado por ID
const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id);

    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`Empleado con id ${id} no existe`);
    }
};

// Función para obtener el salario de un empleado por ID
const getSalario = (id, callback) => {
    const salario = salarios.find(s => s.id === id)?.salario;

    if (salario) {
        callback(null, salario);
    } else {
        callback(`Salario con id ${id} no existe`);
    }
};

// Llamada a getEmpleado para obtener un empleado
getEmpleado(2, (err, empleado) => {
    if (err) {
        console.log("ERROR");
        console.log(err);
    } else {
        console.log("EMPLEADO EXISTE");
        console.log(empleado);

        // Llamada a getSalario para obtener el salario del empleado encontrado
        getSalario(25, (err, salario) => {
            if (err) {
                console.log("ERROR");
                console.log(err);
            } else {
                console.log("SALARIO ENCONTRADO");
                console.log(salario);
            }
        });
    }
});

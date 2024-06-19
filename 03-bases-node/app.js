const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');

const argv = require('yargs').argv

console.clear();

console.log(process.argv)
console.log(argv)

// const argv = process.argv;
// const [,,arg3 = 'base=5'] = argv;
// const [, base] = arg3.split('=');

 const baseNumber = parseInt(1, 10);

if (isNaN(baseNumber)) {
    console.error('La base debe ser un número');
    process.exit(1);
}

 crearArchivo(baseNumber)
     .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
     .catch(err => console.log(err));

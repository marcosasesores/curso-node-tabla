// function sumar(a,b){
//     return a + b;
// }

const sumar = (a, b = 10) => {
    return a + b;
}

const saludar = () => "hola mundo" // cuando solo tenemos una linea de cuerpo en la función, se puede simpificar de esta manera

console.log(sumar(5 ));
console.log(saludar());
const fs = require('fs');
const colors = require('colors');



const crearArchivo = (base ) => {

    return new Promise( (resolve, reject) => {
        console.log("===================".green)
        console.log(`tabla-${base}`)
        console.log("===================".green)
        var salida = '';
    
        const tablamulti = (base) => {
            for (var i = 0; i < 11; i++) {
                salida += (base + " X ".green + i + " = ".blue + base * i + "\n");
            }
        }
    
        tablamulti(base);
        // nombre del archivo, la variable , y el callback que se ejecutará cuando termine de escribir ek txt
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        resolve(`tabla-${base}.txt`)
    
        console.log(salida)

    });

   


}


module.exports = {
    crearArchivo: crearArchivo
}






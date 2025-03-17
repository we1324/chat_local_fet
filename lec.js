const fs = require('fs');

function leerArchivo(ruta) {
    fs.readFile(ruta, 'utf8', (err, data) => {
        if (err) {
            console.error("Error al leer el archivo:", err.message);
            return;
        }
        console.log(data);
    });
}


const rutaArchivo = 'oa.txt';
leerArchivo(rutaArchivo);

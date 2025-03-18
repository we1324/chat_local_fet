
const fs = require('fs');

const filePath = './oa.txt'; 


fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }
    
    console.log('Contenido del archivo:');
    console.log(data);
});

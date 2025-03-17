const WebSocket = require('ws');
const readline = require('readline');

const server = new WebSocket.Server({ port: 8080 });
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

server.on('connection', socket => {
    console.log("Cliente conectado");
    rl.question("Ingresa tu nombre: ", name => {
        rl.on('line', message => {
            socket.send(`[${name}] ${message}`);
        });
    });

    socket.on('message', message => {
        const timestamp = new Date().toLocaleString(); 
        const mensajeConHora = `[${timestamp}] ${message}`;


        console.log(mensajeConHora);

        
        server.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(mensajeConHora);
            }
        });
    });

    socket.on('close', () => console.log("Cliente desconectado"));
});

console.log("Servidor WebSocket corriendo en ws://192.168.1.13:8080");

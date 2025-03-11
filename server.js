const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', socket => {
    console.log("Cliente conectado");

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

console.log("Servidor WebSocket corriendo en ws://20.20.2.219:8080");

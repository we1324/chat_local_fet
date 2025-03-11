const WebSocket = require('ws');
const readline = require('readline');


const ws = new WebSocket("ws://20.20.2.219:8080");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


ws.on('message', message => {
    console.log("\n" + message);
    process.stdout.write("> "); 
});

ws.on('open', () => {
    console.log("Conectado al chat. Escribe un mensaje:");

    rl.on('line', message => {
        ws.send(message);
    });
});


ws.on('close', () => {
    console.log("Desconectado del chat");
    rl.close();
});

ws.on('error', error => {
    console.log("Error de conexión:", error.message);
});


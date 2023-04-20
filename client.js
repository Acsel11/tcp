const net = require('net');

const client = new net.Socket();

client.connect(3000, '127.0.0.1', ()=> {
    console.log("------conexion tcp exitosa-----");

});

client.on('close', ()=> {
    console.log("conexion terminada");
});

client.on('data', (data)=> {
    console.log(`Info: ${data}`);
});
const net = require('net');

const server = net.createServer(con => {
    con.write("he recibido una conexion");
    console.log("--------conexion---------");
    con.pipe(con);
});

server.listen(3000, '127.0.0.1');




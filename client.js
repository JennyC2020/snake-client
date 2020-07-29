const net = require('net');


/*
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50541
  });


  conn.setEncoding('utf8'); // interpret incoming data as text

  conn.on('data', message => {
    console.log(message);
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: JCI");
  });

  return conn;
}
module.exports = { connect };
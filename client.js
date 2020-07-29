const net = require('net');
const { IP, PORT } = require('./constants');


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

  // conn.on('data', () => {
  //   console.log("Move: up");
  //   conn.write("Move: up");
  // });

  return conn;
}
module.exports = { connect };
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

const handleUserInput = function(key) {

  if (key === '\u0003') { // \u0003 maps to ctrl+c input
    process.exit();
  }
}



const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => handleUserInput(key));
  return stdin;
};

module.exports = { setupInput };
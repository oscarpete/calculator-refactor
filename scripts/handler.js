function calculateHandler(event) {
  // read & process user input from event
let valor1 = document.getElementById("value1").value;
let valor2 = document.getElementById("value2").value;
let op = document.getElementById("operator").value;
valor1 = parseFloat(valor1);
valor2 = parseFloat(valor2);
  // pass user input through core logic
let resultante = doMath(op, valor1, valor2);
  // render output to DOM for user
document.getElementById("results").innerHTML = resultante;
  // log user action for developers
console.log(`${valor1} ${op} ${valor2} = ${resultante}`);
  // return true for the browser
  return true;
}

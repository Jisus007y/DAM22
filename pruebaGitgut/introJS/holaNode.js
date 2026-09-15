
console.log("hola Node.js");

let edad1 = 20;
let edad2 = 30;
 
console.log("Edad promedio: ");
console.log((edad1 + edad2) / 2);

/*medir tiempo de un proceso*/
console.time("mi proceso");
for(let i=0; i< 10000000; i++){}
console.timeEnd("mi proceso");
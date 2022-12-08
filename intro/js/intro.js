function sum(a,b)
{
  return a+b;
}
let res = sum(1,2);
console.log(res);
// Funciones de primer orden, guardadas en variables
const fSum = sum;
res = fSum(5,5);
console.log(res);

function operation (fn, a, b){
  console.log('Se hace algo');
  console.log(fn(a,b))
}
// Funciones de orden superior, que permiten recibir funciones

operation(sum, 4,5);
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

// arrow function, funciones anonimas
let fA = () => console.log('Funciones anonimas')
fA();
operation((a,b) => a*b, 4,5);
operation((a,b) => {
  const c = a + b
  return c * 2
}, 4,5);

// foreach
const names = ['Andres','José','Francisco'];
// Metodo inmutable, no modifica elemento original
names.forEach((name) =>console.log(name));
names.forEach((name) =>console.log(name.toUpperCase()));

console.log(names)
// Metodo mutable, modifica el elemento original
names.sort();
console.log(names)

//map
const namesUpper = names.map((name) => name.toUpperCase());
console.log(namesUpper)

// reduce, para acumulados
const numbers = [5,4,4,10];
const total = numbers.reduce((ac, number) =>{
  return ac + (number*2);
}, 0)
console.log(total)

// Clase
class Drink {

  constructor(name){
    this.name = name;
  }
  info(){
    return "la bebida es: "+ this.name;
  }
}
//funcional
function Drink2(name){
  this.name = name;
  this.info = function(){
    return "la bebida es: "+ this.name;
  }
}
const drink = new Drink('agua');
console.log(drink.name)

const drink2 = new Drink2("agua");
console.log(drink2.info)

// Herencia
class Beer extends Drink{
  constructor(name, alcohol){
    super(name);
    this.alcohol = alcohol;
  }
  info(){
    return super.info() + " " + this.alcohol;
  }
}
const beer = new Beer('corona',4.5);
console.log(beer.info());
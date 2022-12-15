console.log("Hola desde typescript");

class Bebida {
  private name: string;
  constructor(name: string){
    this.name = name;
  }
  info(): string{
    return this.name;
  }
}
const drink = new Bebida("agua");
console.log(drink.info());

// Interface
interface Producto{
  price: number;
  getPrice(): string;
}

class Cerveza extends Bebida implements Producto{
  private alcohol: number;
  price: number;
  
  constructor(name: string, alcohol: number, price: number){
    super(name);
    this.alcohol = alcohol;
    this.price = price;
  }
  getPrice(): string{
    return "$ "+this.price;
  }
  info(): string{
    return super.info() + " " + this.alcohol;
  }
}
// Implementacion de interface
class Snack implements Producto{
  name: string;
  price: number;
  constructor(name: string, price: number){
    this.name = name;
    this.price = price;
  }
  getPrice(): string{
    return "El precio es: $ " + this.price;
  }
}
const beer = new Cerveza("erdinger", 8.5, 100);
console.log(beer.info());

const products: Producto[] = [
  new Cerveza("Corona", 4.5, 1),
  new Snack("Sabritas", 0.5),
  new Cerveza("Heineken", 5, 1.2),
]

function getPrices(items: Producto[]){
  for (const item of items) {
    console.log(item.getPrice());
    
  }
}

getPrices(products);
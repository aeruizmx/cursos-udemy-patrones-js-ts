// Solo exista una instancia de un objeto de una clase
class Singleton {
  static getInstance(){
    return Singleton.instance;
  }
  constructor(){
    this.random = Math.random();
    //console.log("Entra al constructor");
    if(Singleton.instance){
      //console.log("Ya existe");
      return Singleton.instance;
    }
    //console.log("No existe, se crea");
    Singleton.instance = this;
  }
}

const singleton = new Singleton();
console.log(singleton.random);
const singleton2 = new Singleton();
console.log(singleton2.random);
console.log(singleton2 === singleton2);
const singleton3 = Singleton.getInstance();
console.log(singleton3.random);
console.log(singleton3 === singleton2);

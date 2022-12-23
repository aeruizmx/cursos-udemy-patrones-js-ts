class Person {
  private name: string;
  private lastname: string;
  private age: number;
  private country: string;
  private city: string;
  private hobbies: string[];

  constructor(name: string, lastname:string, age:number, country: string, city:string, hobbies: string[]){
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.hobbies = hobbies;
  }
  getFullName(): string{
    return this.name + ' ' + this.lastname;
  }
}

interface PersonBuilder{
  name: string;
  lastname: string;
  age: number;
  country: string;
  city: string;
  hobbies: string[];

  setName(name: string): PersonBuilder;
  setLastName(lastname: string): PersonBuilder;
  setAge(age: number): PersonBuilder;
  setCountry(country: string): PersonBuilder;
  setCity(city: string): PersonBuilder;
  setName(name: string): PersonBuilder;
  addHobby(hobby: string): PersonBuilder;
  build(): Person;
}

class NormalPersonBuilder implements PersonBuilder{
  name: string;
  lastname: string;
  age: number;
  country: string;
  city: string;
  hobbies: string[];

  constructor(){
    this.name = '';
    this.lastname = '';
    this.age = 0;
    this.country = '';
    this.city = '';
    this.hobbies = [];
  }

  reset(): void {
    this.name = '';
    this.lastname = '';
    this.age = 0;
    this.country = '';
    this.city = '';
    this.hobbies = [];
  }

  setName(name: string): PersonBuilder{
    this.name = name;
    return this;
  }
  setLastName(lastname: string): PersonBuilder{
    this.lastname = lastname;
    return this;
  }
  setAge(age: number): PersonBuilder{
    this.age = age;
    return this;
  }
  setCountry(country: string): PersonBuilder{
    this.country = country;
    return this;
  }
  setCity(city: string): PersonBuilder{
    this.city = city;
    return this;
  }
  addHobby(hobby: string): PersonBuilder{
    this.hobbies.push(hobby);
    return this;
  }
  build(): Person {
    const person = new Person(this.name, this.lastname, this.age, this.country, this.city, this.hobbies);
    this.reset();
    return person;
  }
}

class PersonDirector{
  private personBuilder: PersonBuilder;
  constructor(personBuilder: PersonBuilder){
    this.personBuilder = personBuilder;
  }
  setPersonBuilder(personBuilder: PersonBuilder){
    this.personBuilder = personBuilder;
  }
  createSimplePerson(name: string, lastname:string){
    this.personBuilder.setName(name).setLastName(lastname);
  }
}

//creacion 1
const personBuilder = new NormalPersonBuilder();
const andres = personBuilder.setName("Andres").setLastName("Ruiz").setAge(35).addHobby("Ver peliculas").addHobby("Dormir").build();
console.log(andres);

//creacion 2
const juan = personBuilder.setName('Juan').setLastName('Lopez').setCity('Morelia').setCountry('México').build();
console.log(juan)

//creacion 3 con Director
const director = new PersonDirector(personBuilder);
director.createSimplePerson("Jose","Ramirez");
const jose = personBuilder.build()
console.log(jose);

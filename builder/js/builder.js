class Person{
  constructor(name, lastname, age, country, city, hobbies){
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.hobbies = hobbies;
  }
  getFullName(){
    return this.name + ' ' + this.lastname;
  }
  
}

class PersonBuilder{
  constructor(){
    this.reset();
  }
  reset(){
    this.name = '';
    this.lastname = '';
    this.age = 0;
    this.country = '';
    this.city = '';
    this.hobbies = [];
  }
  setName(name){
    this.name = name
    return this;
  }
  setLastName(lastname){
    this.lastname = lastname
    return this;
  }
  setAge(age){
    this.age = age;
    return this;
  }
  setCountry(country){
    this.country = country;
    return this;
  }
  setCity(city){
    this.city = city;
    return this;
  }
  addHobby(hobby){
    this.hobbies.push(hobby);
    return this;
  }
  build(){
    const person = new Person(
      this.name,
      this.lastname,
      this.age,
      this.country,
      this.city,
      this.hobbies
    );
    this.reset();
    return person;
  }
}

const personBuilder = new PersonBuilder();
const andres = personBuilder.setName('Andrés').setLastName('Ruiz').addHobby('Ver series').addHobby('Dormir').build();
console.log(andres)
const juan = personBuilder.setName('Juan').setAge(20).setCity('Morelia').build();
console.log(juan)

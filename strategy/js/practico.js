// PRACTICA
const data = [
  {
    name: 'Erdinger Pikantus',
    country: 'Alemania',
    info: 'Una cerveza alemana de trigo oscura con un sabor fuerte y robusto. ',
    img: 'https://ss388.liverpool.com.mx/xl/1032704049.jpg'
  },
  {
    name: 'Corona',
    country: 'México',
    info: 'Es una bebida del tipo pilsener que comenzó a elaborarse en el año de 1925. ',
    img: 'https://www.vardoc.com/wp-content/uploads/2022/01/CORONA.png'
  },
  {
    name: 'Delirium Tremens',
    country: 'Belgica',
    info: 'Es fácilmente reconocible por su elefante rosa como logotipo y el aspecto de cerámica de su botella. ',
    img: 'https://chedrauimx.vtexassets.com/arquivos/ids/9815794-1600-auto?v=638061199627530000&width=1600&height=auto&aspect=true'
  },
]
class InfoContext{
  constructor(strategy, data, element){
    this.setStrategy(strategy)
    this.data = data
    this.element = element

  }
  setStrategy(strategy){
    this.strategy = strategy
  }
  show(){
    this.strategy.show(this.data, this.element);
  }
}

class ListStrategy{
  show(data, element){
    element.innerHTML = data.reduce((ac, beer)=>{
      return ac + `<div>
        <h2>${beer.name}</h2>
        <p>${beer.country}</p>
      </div>
      <hr>`
    }, "") 
  }
}

class DetailedListStrategy{
  show(data, element){
    element.innerHTML = data.reduce((ac, beer)=>{
      return ac + `<div>
        <h2>${beer.name}</h2>
        <p>${beer.country}</p>
        <p>${beer.info}</p>
      </div>
      <hr>`
    }, "") 
  }
}

class ListWithImageStrategy{
  show(data, element){
    element.innerHTML = data.reduce((ac, beer)=>{
      return ac + `<div>
        <img width="10%" src="${beer.img}" >
        <h2>${beer.name}</h2>
      </div>
      <hr>`
    }, "") 
  }
}

const strategies = [
  new ListStrategy(),
  new DetailedListStrategy(),
  new ListWithImageStrategy()
]
const info = new InfoContext(new ListStrategy(), data, content)
info.show()
slcOptions.addEventListener("change", (event) => {
  const op = event.target.value
  info.setStrategy(strategies[op])
  info.show()
});
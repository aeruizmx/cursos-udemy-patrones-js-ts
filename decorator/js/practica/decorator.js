//Component
class ClientComponent{
  constructor(url){
    this.url = url
  }
  async getData(){
    const result = await fetch(this.url);
    const data = await result.json();
    return data;
  }
}

//Decorator
class ClientDecorator{
  constructor(clientComponent){
    this.clientComponent = clientComponent
  }
  async getData(){
    return await this.clientComponent.getData();
  }
}

// Decorator 1
class UpperCaseClientDecorator extends ClientDecorator{
  
  async getData(){
    const data = await super.getData();
    const newData = data.map( element => {
      element.title = element.title.toUpperCase();
      return element;
    });
    return newData;
  }
}

// Decorator 2
class HtmlClientDecorator extends ClientDecorator{
  async getData(){
    const data = await super.getData();
    const newData = data.map( element => {
      element.title = `<h1>${element.title}</h1>`;
      element.thumbnailUrl = `<img src='${element.thumbnailUrl}'>`;
      return element;
    });
    return newData;
  }
}

(async () => {
  const url = 'https://jsonplaceholder.typicode.com/photos';
  const client = new ClientComponent(url);
  const data = await client.getData();
  //console.log(data);

  const upperClient = new UpperCaseClientDecorator(client);
  const data2 = await upperClient.getData();
  //console.log(data2);

  const htmlClient = new HtmlClientDecorator(upperClient);
  const data3 = await htmlClient.getData();
  //console.log(data3)
  myDiv1.innerHTML = data3.reduce((ac, e) => {
    return ac + e.title + e.thumbnailUrl;
  }, "");

  const htmlClient2 = new HtmlClientDecorator(client);
  const data4  = await htmlClient2.getData();
  myDiv2.innerHTML = data4.reduce((ac, e) => {
    return ac + e.title + e.thumbnailUrl;
  }, "");
})();
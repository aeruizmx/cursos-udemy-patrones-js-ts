interface Component{
  getDetail(): string;
}

class ProductComponent implements Component{
  protected name: string;
  constructor(name: string){
    this.name = name;
  }
  getDetail(): string {
    return `${this.name}`;
  }
}
//decorator
abstract class ProductDecorator implements Component{
  protected component: Component;
  constructor(component: Component){
    this.component = component;
  }
  getDetail(): string {
    return this.component.getDetail();
  }
}

// decorator 1
class CommercialInfoProductDecorator extends ProductDecorator{
  private trademark: string;
  private brand: string;

  constructor(component: Component, trademark: string, brand:string){
    super(component);
    this.trademark = trademark;
    this.brand = brand;
  }
  getDetail(): string {
    return `${this.trademark} ${this.brand} ` + super.getDetail();
  }
}

// decorator 2
class StoreProductDecorator extends ProductDecorator{
  private price: number;

  constructor(component: Component, price: number){
    super(component);
    this.price = price;
  }
  getDetail(): string {
    return super.getDetail() +` $ ${this.price} `; 
  }
}

const productComponent = new ProductComponent('Cerveza');
console.log(productComponent.getDetail());

// decorator 1 con component
const commercialInfo = new CommercialInfoProductDecorator(productComponent, 'London Porter', 'Fullers');
console.log(commercialInfo.getDetail());

// decorator 2 con component
const storeProduct = new StoreProductDecorator(productComponent, 15.3);
console.log(storeProduct.getDetail());

// decorator 2 con decorator1
const storeProduct2 = new StoreProductDecorator(commercialInfo, 15.4);
console.log(storeProduct2.getDetail());

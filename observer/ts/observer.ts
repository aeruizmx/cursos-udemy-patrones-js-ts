interface IObserver<T>{
  refresh(value: T): void;
}

interface ISubject<T>{
  observers: IObserver<T>[];
  subscribe(observer: IObserver<T>): void;
  unsuscribe(observer: IObserver<T>): void;
  notify(value: T): void;
}

class Subject<T> implements ISubject<T>{
  observers: IObserver<T>[];

  constructor(){
    this.observers = [];
  }
  subscribe(observer: IObserver<T>): void {
    this.observers.push(observer);
  }
  unsuscribe(observer: IObserver<T>): void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }
  notify(value: T): void {
    this.observers.forEach(element => {
      element.refresh(value);
    });
  }
}

class Observer<T> implements IObserver<T>{
  private fn: (value: T) => void;
  constructor(fn: (value: T) => void){
    this.fn = fn
  }
  refresh(value: T): void {
    this.fn(value);
  }
}
const subject = new Subject<number>();
const obs1 = new Observer<number>((n)=> {
  console.log('Hello '+n);
});
const obs2 = new Observer<number>((n)=> {
  console.log('Hi '+n);
});
subject.subscribe(obs1);
subject.subscribe(obs2);
subject.notify(2);

const subject2 = new Subject<string>();
const obs3 = new Observer<string>((s)=> {
  console.log(`${s.toUpperCase()}`);
});
const obs4 = new Observer<string>((s)=> {
  console.log(`${s.toLowerCase()}`);
});
subject2.subscribe(obs3);
subject2.subscribe(obs4);
subject2.notify("Soy Andrés");
subject2.notify("Ramito de violetas");
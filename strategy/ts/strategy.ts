interface Strategy{
  login(user: string, password: string): boolean;
}

class LoginContext{
  private strategry: Strategy;

  constructor(strategy: Strategy){
    this.strategry = strategy;
  }
  setStrategy(strategry: Strategy){
    this.strategry = strategry;
  }
  login(user: string, password: string): boolean{
    return this.strategry.login(user, password);
  }
}

class LoginDBStrategy implements Strategy{
  login(user: string, password: string) {
    console.log("Nos dirigimos a la bd");
    if(user === 'admin' && password === 'entra'){
      return true;
    }
    return false;
  }
}
class LoginServiceStrategy implements Strategy{
  login(user: string, password: string) {
    console.log("Nos dirigimos a un servicio de autenticacion");
    if(user === 'admin' && password === 'entra'){
      return true;
    }
    return false;
  }
}
class LoginGoogleStrategy implements Strategy{
  login(user: string, password: string) {
    console.log("Nos dirigimos a Google de autenticacion");
    if(user === 'admin' && password === 'entra'){
      return true;
    }
    return false;
  }
}
const auth = new LoginContext(new LoginDBStrategy());
console.log(auth.login('admin','entra'));
auth.setStrategy(new LoginServiceStrategy());
console.log(auth.login('admin','entra'));
auth.setStrategy(new LoginGoogleStrategy());
console.log(auth.login('admin','entra'));

class DocumentContext {
  constructor(){
    this.content = "";
    this.state = new BlankState();
  }
  setState(state){
    this.state = state;
  }

  write(text){
    this.state.write(this, text);
  }
}

class BlankState{
  write(documentContext, text){
    documentContext.content = text;
    documentContext.setState(new WithContentState());
  }
}

class WithContentState{
  write(documentContext, text){
    documentContext.content += " " + text;
  }
}

class ApprovedState{
  write(documentContext, text){
    console.error("Documento aprobado, no se modifica");
  }
}

const doc = new DocumentContext();
console.log(doc.state)
doc.write("Hola")
console.log(doc.content)
console.log(doc.state)
doc.write("Mundo")
doc.write("desde")
doc.write("State")
console.log(doc.content)
doc.setState(new ApprovedState());
console.log(doc.state)
doc.write("Nuevo texto")
console.log(doc.content)
doc.setState(new WithContentState());
console.log(doc.state)
doc.write("Nuevo texto 2")
console.log(doc.content)




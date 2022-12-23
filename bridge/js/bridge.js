class EncoderTextAbstraction{
  constructor(encoder){
    this.encoder = encoder;
  }
  encode(str){
    return this.encoder.encode(str);
  }
  decode(str){
    return this.encoder.decode(str);
  }
}

class Base64EncoderImplementor{
  encode(str) {
    return window.btoa(decodeURI(encodeURIComponent(str)));
  }
  decode(str) {
    return decodeURIComponent(decodeURI(window.atob(str)));
  }
}

class HTMLEncoderImplementor{
  encode(str) {
    return str.split(".").reduce((ac,e) => {
      return ac + `<p>${e.trim()}</p>`;
    }, "");
  }
  decode(str) {
    return str.split("</p>").reduce((ac,e) => {
      return (e!== "") ? ac + e.replace("<p>","") + ".": ac + "";
    }, "");
  }
}

const encoder1 = new EncoderTextAbstraction(new Base64EncoderImplementor());
console.log(encoder1.encode("pato"));
console.log(encoder1.decode("cGF0bw=="));
const encoder2 = new EncoderTextAbstraction(new HTMLEncoderImplementor());
console.log(encoder2.encode("pato.hola.hi.bye"));
console.log(encoder2.decode("<p>pato</p><p>hola</p><p>hi</p><p>bye</p>"));


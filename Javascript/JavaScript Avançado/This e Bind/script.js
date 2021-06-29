function speakGeneric() {
   console.log(this.sound);
}

let dog = {
   sound: "Au Au",
   speak: speakGeneric,
};

let cat = {
   sound: "Miau",
   speak: speakGeneric,
};

// cat.speak();
// dog.speak();

// bind faz com que o speak generic saiba que ele esta "marcado/ligado" ao elemento colocado no caso cat. Para quando chamado ele puxa o this.sound do cat. Parecendo quando o cat que está chamando ele.
// Se o speakgeneric for chamado sozinho vai dar erro pq ele não vai achar o this.sound.
let bindedFunction = speakGeneric.bind(cat);

bindedFunction();

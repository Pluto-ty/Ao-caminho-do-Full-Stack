//Modificando Elementos.
let p = document.getElementById("p3");

// p.innerHTML = "<h3>Novo conteúdo</h3>"; //recebe html - podendo receber/acrescentar tags entre outros.
// console.log(p);

//possível perceber a diferença no console do navegagor (inspecionar elemento no opera).
console.log(p.innerText); //innerText vai mostrar apenas o que está mostrando para o usuário.
console.log(p.textContent); //textContent vai mostrar todo tipo de texto que está aparecendo no nosso html.

//Modificando class de um elemento.

let p1 = document.getElementById("test");

p1.className = ""; // tirando ou modificando a class de um elemento. Percebe-se que o paragráfo voltou a ser preto.

//Modificando atributos criados pelo desenv.

let meuAtt = p1.getAttribute("meuAtt"); //pegar o atributo criado pelo dev parecido com class e id e etc.
console.log(meuAtt);

p1.setAttribute("meuAtt", "Outro Nome"); //modificar esse atributo
console.log(p1);

p1.setAttribute("novoAtt", "qualquer coisa"); // criar um novo atributo.
console.log(p1);

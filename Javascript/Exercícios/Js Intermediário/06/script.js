/*
    #Buscando e contando dados em Array =

    Baseado no Array de livros por Categoria abaixo, faça os seguintes desafios

        * Contar o número de categorias e número de livros em cada categoria.
        * Contar o número de autores
        * Mostrar livros do autor Augusto Cury
        * Transformar a função acima em uma função que irá receber o nome do autor
        e devolver os livros desse autor.

*/

const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      { title: "O homem mais rico da Babilônia", author: "George S. Clason" },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];

/*
// Contagem dos livros e categorias
function countBooks() {
  //total de categorias
  console.log(
    `Temos um total de ${booksByCategory.length} de categorias. E elas são:`
  );
  //Contagem dos livros
  for (let i of booksByCategory) {
    let category = i.category;
    let books = i.books.length;
    console.log(`A categoria ${category} com um total de ${books} livros`);
  }
}

countBooks();

*/

const totalCategories = booksByCategory.length;

console.log("Total de categorias: " + totalCategories);

for (let category of booksByCategory) {
  console.log("Total de livros da categoria: " + category.category);
  console.log(category.books.length);
}

function contAuthors() {
  let authors = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author);
      }
    }
  }
  console.log("Total de autores: ", authors.length);
}

contAuthors();

function booksOfAuthor(author) {
  let books = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === author) {
        books.push(book.title);
      }
    }
  }
  console.log(`O autor ${author} tem os livros: ${books.join(", ")} `);
}

booksOfAuthor("Augusto Cury");

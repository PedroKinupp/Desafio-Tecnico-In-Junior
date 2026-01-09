function authors(array){
    let autores = []
    array.forEach(categorias => {
        categorias.books.forEach(livros =>{
            if(autores.indexOf(livros.autor) == -1) autores.push(livros.autor)
        })
    });
    return autores
}

//array de teste (similar ao exercício)
const booksByCategory =[
    {
        category: "Romance",
        books: [
            {
                titulo: "O Sol Também é Uma Estrela",
                autor: "Nicola Yoon",
            },
            {
                titulo: "O Noivo da Minha Melhor Amiga",
                autor: "George Orwell",
            },
            {
                titulo: "Orgulho e Preconceito",
                autor: "Nicola Yoon",
            },
        ]
    },
    {
        category: "Fantasia",
        books: [
            {
                titulo: "Harry Potter e a Pedra Filosofal",
                autor: "George Orwell"
            },
            {
                titulo: "O Hobbit",
                autor: "J.R.R. Tolkien"
            },
            {
                titulo: "Eragon",
                autor: "George Orwell"
            },
            {
                titulo: "O Nome do Vento",
                autor: "Nicola Yoon"
            },
        ]
    },
    {
        category: "Suspense",
        books: [
            {
                titulo: "A garota no trem",
                autor: "Paula Hawkings"
            },
            {
                titulo: "O silêncio dos inocentes",
                autor: "Nicola Yoon"
            },
        ]
    },
    {
        category: "Ficção Científica",
        books: [
            {
                titulo: "Duna",
                autor: "Nicola Yoon"
            },
            {
                titulo: "Neuromancer",
                autor: "Nicola Yoon"
            },
            {
                titulo: "Fundação",
                autor: "Nicola Yoon"
            },
            {
                titulo: "1984",
                autor: "Pedro Kinupp"
            },
            {
                titulo: "O fim da infância",
                autor: "Paula Hawkings"
            },
        ]
    },
]

const arrayfinal = authors(booksByCategory)
console.log(arrayfinal)
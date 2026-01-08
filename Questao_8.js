function countBooksInCategory(array){
    const object = {}

    array.forEach((element) =>{
        let counter = element.books.length
        object[element.category] = counter
    })

    return object
}

const booksByCategory =[
    {
        category: "Romance",
        books: [
            {
                titulo: "seila",
                autor: "seila também"
            },
            {
                titulo: "seila",
                autor: "seila também"
            },
            {
                titulo: "seila",
                autor: "seila também"
            },
        ]
    },
    {
        category: "Fantasia",
        books: [
            {
                titulo: "seila",
                autor: "seila também"
            },
            {
                titulo: "seila",
                autor: "seila também"
            },
        ]
    },
    {
        category: "Suspense",
        books: [
            {
                titulo: "seila",
                autor: "seila também"
            },
            {
                titulo: "seila",
                autor: "seila também"
            },
            {
                titulo: "seila",
                autor: "seila também"
            },
            {
                titulo: "seila",
                autor: "seila também"
            },
        ]
    },
    {
        category: "Ficção Científica",
        books: [
            {
                titulo: "seila",
                autor: "seila também"
            },
            {
                titulo: "seila",
                autor: "seila também"
            },
            {
                titulo: "seila",
                autor: "seila também"
            },
            {
                titulo: "seila",
                autor: "seila também"
            },
            {
                titulo: "seila",
                autor: "seila também"
            },
        ]
    },
]

const objetofinal = countBooksInCategory(booksByCategory)
console.log(objetofinal)
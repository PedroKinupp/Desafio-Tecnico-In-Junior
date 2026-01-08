function countBooksInCategory(array){
    const object = {}

    array.forEach((element, indice) =>{
        let counter = element.books.length()
        let key = element.category
        object.key = counter
    })

    return object
}
function authors(array){
    let autores = []
    array.forEach(categorias => {
        categorias.books.forEach(livros =>{
            autores.push(livros.autor)
        })
    });
    return autores
}



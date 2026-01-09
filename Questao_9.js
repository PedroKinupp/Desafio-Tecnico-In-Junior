function authors(array){
    let autores = []
    array.forEach(categorias => {
        categorias.books.forEach(livros =>{
            if(autores.indexOf(livros.autor) == -1) autores.push(livros.autor)
        })
    });
    return autores
}



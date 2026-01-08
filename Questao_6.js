function fibonacci(n){  
    if(n==0) return [0]
    else if(n==1) return [0,1]

    let fib = fibonacci(n - 1)
    fib.push(fib[fib.length - 1] + fib[fib.length - 2])

    return fib
}

let n = prompt("Digite um número inteiro")
console.log(fibonacci(n-1))
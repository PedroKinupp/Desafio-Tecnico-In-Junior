let a = prompt("digite o coeficiente a");
let b = prompt("digite o coeficiente b");
let c = prompt("digite o coeficiente c");
let delta = (b*b) + (-4*a*c);
console.log("discriminante: " + delta);

if(delta<0){
    console.log("equação não possui raízes")
}else if(delta==0){
    console.log("equação possui uma raíz")
    let raiz = (-b)/(2*a);
    console.log("raiz: " + raiz);
}else{
    console.log("equação possui duas raízes")
    let raiz1=((-b) + Math.sqrt(delta))/(2*a);
    let raiz2=((-b) - Math.sqrt(delta))/(2*a);
    console.log("raizes: " + raiz1 + ", " + raiz2);
}
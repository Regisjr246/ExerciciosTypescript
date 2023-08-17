let numero:number =200;

let segudoNumero: number =100;

console.log(numero+segudoNumero);

let idade:number = 10
let texto:string = "Minhas idade é:" +idade;


console.log(texto);

let idadeNova: number =16;
let textoNovo: string = "Minha idade é ";
console.log( textoNovo + idadeNova );


let verdadeiro:boolean = false;
console.log(verdadeiro);
let arr:number[] = [1, 2, 3, 4, 10, 60, 50];
console.log(arr);
console.log("Tamanho do array:" + arr.length);
console.log("acessando a posição do array:"  +arr[0]);
console.log(arr.indexOf(4));

let arrayTexto: Array<string>;

arrayTexto=['ab','bc', 'cd', 'de'];  

console.log(arrayTexto);
console.log(arrayTexto,length);
console.log(arrayTexto.indexOf('ab'));


function exibirTexto(){
    console.log('Exibindo meu Texto');
}


exibirTexto();

function exibirOutroTexto(){
    return "Exibindo outro Texto";
}

console.log(exibirOutroTexto());



function retornarNumero():number{
    return 15;
}

console.log(retornarNumero());

function retornarTexto(): string{
    return "retornando string";
}

console.log(retornarTexto());


function soma( a:number, b:number): number{
    return a + b;
}

console.log(soma(50,100));


/* exercicio 1*/

function exercicio1(a:number, b:number ):number{
    return a * b;
}

console.log(exercicio1(1,1));

/* exercicio 2*/

function exercicio2(a:number, b:number, c:number):number{
    return ((a+b)*c)
}

console.log(exercicio2(1,1,1));

/* exercicio 3*/

function exercicio3(A:number, B:number):String{
 return " O resultado da multiplicação é: " + (A * B)
}

console.log(exercicio3 (1,1));


"use strict";
let numero = 200;
let segudoNumero = 100;
console.log(numero + segudoNumero);
let idade = 10;
let texto = "Minhas idade é:" + idade;
console.log(texto);
let idadeNova = 16;
let textoNovo = "Minha idade é ";
console.log(textoNovo + idadeNova);
let verdadeiro = false;
console.log(verdadeiro);
let arr = [1, 2, 3, 4, 10, 60, 50];
console.log(arr);
console.log("Tamanho do array:" + arr.length);
console.log("acessando a posição do array:" + arr[0]);
console.log(arr.indexOf(4));
let arrayTexto;
arrayTexto = ['ab', 'bc', 'cd', 'de'];
console.log(arrayTexto);
console.log(arrayTexto, length);
console.log(arrayTexto.indexOf('ab'));
function exibirTexto() {
    console.log('Exibindo meu Texto');
}
exibirTexto();
function exibirOutroTexto() {
    return "Exibindo outro Texto";
}
console.log(exibirOutroTexto());
function retornarNumero() {
    return 15;
}
console.log(retornarNumero());
function retornarTexto() {
    return "retornando string";
}
console.log(retornarTexto());
function soma(a, b) {
    return a + b;
}
console.log(soma(50, 100));
/* exercicio 1*/
function exercicio1(a, b) {
    return a * b;
}
console.log(exercicio1(1, 1));
/* exercicio 2*/
function exercicio2(a, b, c) {
    return ((a + b) * c);
}
console.log(exercicio2(1, 1, 1));
/* exercicio 3*/
function exercicio3(A, B) {
    return " O resultado da multiplicação é: " + (A * B);
}
console.log(exercicio3(1, 1));

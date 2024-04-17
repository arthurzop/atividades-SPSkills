let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //array base

const impares = array.filter(array => array%2 == 1) //separando os impares

console.log(impares)

const soma = impares.reduce((i, e) => i + e, 0) // pegando a soma dos itens

const resultado = 1 + 3 + 5 + 7 + 9 //gabarito

console.log(soma, resultado)


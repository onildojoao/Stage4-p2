/* 
Encontre a solução do problema:

Pergunte o nome do usuário e escreva a mensagem:
"Olá, [nome do usuário]"
*/
/* let nome = prompt("Qual o seu nome?")
alert("Olá, " + nome) */

/* ================================================================ */

/* 
Solicite dois números, faça a soma deles e apresente o resultado final ao usuário
*/

/* let n1, n2, r

n1 = prompt("Digite o n1")
n2 = prompt("Digite o n2")
r = Number(n1) + Number(n2)

alert("Resultado: " + r) */

/* ================================================================ */

/* 
Capturar 2 números, fazer as operações matemáticas de soma, 
subtração, multiplicação, divisão e resto da divisão.

Para cada operação, motrar um alerta com o resultado
*/

/* n1 = prompt("Digite o n1")
n2 = prompt("Digite o n2")
alert("Soma: " + (Number(n1) + Number(n2)))
alert("Subtração: " + (Number(n1) - Number(n2)))
alert("Multiplicação: " + (Number(n1) * Number(n2)))
alert("Divisão: " + (Number(n1) / Number(n2)))
alert("Resto da Divisão: " + (Number(n1) % Number(n2))) */

/* ================================================================ */

/* 
Solicitar o nome do aluno e as 3 notas do bimestre para calcular a média.

Se o aluno passou no bimestre, dar os parabéns.

Se o aluno não passou no bimestre, motivar o aluno a dar o melhor na recuperação.

Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

/* let studentName = prompt("Qual o seu nome?")
let firstGrade = prompt("Qual a sua primeira nota?")
let secondGrade = prompt("Qual a sua segunda nota?")
let thirdGrade = prompt("Qual a sua terceira nota?")

let finalScore = (Number(firstGrade) + Number(secondGrade) + Number(thirdGrade)) / 3
finalScore = finalScore.toFixed(1)

if (finalScore > 7)
alert("Muito bem " + studentName + "! Você passou! Sua nota foi: " + finalScore)
else
alert("Que pena " + studentName + "! Tente o seu melhor na recuperação! Sua média foi: " + finalScore) */

/* ================================================================ */

/* 
 Capture 10 itens para compor a lista de um supermercado.

 Após capturar os 10 itens, imprima-os, separando por vírgula
*/

/* let item = []

for (let listed = 0; listed < 10; listed++) {
  let itemName = prompt("Digite o item " + (listed + 1))

  item[listed] = itemName
  //item.push(itemName)
}

alert(item) */

/* let i1 = prompt("Qual o primeiro item?")
let i2 = prompt("Qual o segundo item?")
let i3 = prompt("Qual o terceiro item?")
let i4 = prompt("Qual o quarto item?")
let i5 = prompt("Qual o quinto item?")
let i6 = prompt("Qual o sexto item?")
let i7 = prompt("Qual o sétimo item?")
let i8 = prompt("Qual o oitavo item?")
let i9 = prompt("Qual o nono item?")
let i10 = prompt("Qual o décimo item?")

let itensList = []
itensList.push(i1)
itensList.push(i2)
itensList.push(i3)
itensList.push(i4)
itensList.push(i5)
itensList.push(i6)
itensList.push(i7)
itensList.push(i8)
itensList.push(i9)
itensList.push(i10)


let i
 for (i = 0; i< itensList.length; i++)
  alert(itensList[i]) 
 */

/* ================================================================ */

/* 
Jogo da adivinhação

Apresente a mensagem ao usuário:
"Adivinhe o número que estou pensando? Está entre 0 e 10."

Crie uma lógica para gerar um número aleatório e verificar se o número digitado é o
mesmo gerado pelo sistema.

Enquanto o usuário não adivinhar o número, mostrar a mensagem:
"Erro, tente novamente:"

Caso o usuário acerte o número, apresentar a mensagem:
"Parabéns! Você adivinhou o número em x tentativas"

Substituia o "x" da mensagem pelo número de tentativas
*/

/* let counter = 0
let randomNumber = Math.round(Math.random() * 10)
console.log(randomNumber)
let pickedNumber

alert("Adivinhe o número que estou pensando? Está entre 0 e 10.")

while (pickedNumber != randomNumber) {
  pickedNumber = prompt("Digite a sua escolha!")
  counter++

  if (Number(pickedNumber) == randomNumber) {
    alert(`Parabéns! Você adivinhou o número em ${counter} tentativas`)
    break
  }
  else
    alert("Erro, tente novamente!")
} */

/* ================================================================ */

/* 
Faça um programa que tenha um menu e apresente a seguinte mensagem:

Olá usuário! Digite o número da opçào desejada

1. Cadastrar um item na lista
2. Mostrar itens cadastrados
3. Sair do programa

--
O programa deverá capturar o número digitado pelo usuário e mostrar os cenários:

Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
Caso o usuário digite 2, ele poderá ver os itens cadastrados
  Se não houver nenhum item cadastrado, motrar a mensagem:
    "Não existem itens cadastrados"
Caso o usuário digite 3, a aplicação deverá ser encerrada
*/

let choice
let list = []
let listItem
while (choice != 3) {
  choice = Number(prompt("Olá usuário!\nDigite o número da opçào desejada.\n\n1. Cadastrar um item na lista\n2. Mostrar itens cadastrados\n3. Sair do programa"))
  switch (choice) {
    case 1:
      listItem = prompt("Digite o item a ser inserido:")
      list.push(listItem)
      break
    case 2:
      if (list.length == 0)
        alert("Não existem itens cadastrados")
      else
        alert(list)
      break
    case 3:
      alert("Encerrando lista!")
      break
      default:
        alert("Opção inválida! Tente novamente!")
  }
}

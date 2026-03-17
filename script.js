window.alert("Mini game número secreto");

const numeroAleatorio = parseInt(Math.random() *10)+1;
console.log(numeroAleatorio);
var chute = window.prompt("Mini game numero secreto, digite um número entre 1 e 9 para tentar adivinhar!!!!!!");
let tentativas = 1;

while(chute!= numeroAleatorio){
    if(chute>numeroAleatorio){
        chute = prompt("O número que vc digitou é maior do que o número aleatório!!!");
    }else{
        chute= prompt("O número que vc digitou é menor do que o número aleatório");
    }
    tentativas++;
}
alert(`Parabéns, você acertou na ${tentativas}º tentativa!`);
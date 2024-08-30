/* FUNÇÕES
Uma funçºao JavaScript é um blocl de  código projetado para executar uma tarefa específica.

É como uma pequena "fábrica" onde você faz uma entrada e ele te d+a uma saida.

pode ser encarado como "mine-programas" projetados para fazer uma tarefa que vai contribuir para todo código.

uma função JavaScript é executada quando "algo" a invoca (chama-a).*/

function soma(valor1, valor2) {
    return valor1 + valor2;var total = soma(10, 30);

alert(total);
}

function realParaDolar(real, cotacaoDolar) {
    return real * cotacaoDolar;
}

var valorReal = 7.89;
var cotacao = 5.08;

var total = realParaDolar(valorReal, cotacao);
//alert(`O valor em real é R$: ${valorReal} o valor e, dólar U$ é:${total}`);

function paraCelsius(valorFahrenheit) {
    return (5 / 9) * (valorFahrenheit - 32);

}

var x = paraCelsius(77);
alert("A temperatuda é de" +x+ " graus celsius");
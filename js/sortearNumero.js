const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
    
    
}

const elementoMenorValor = document.getElementById('menor-valor')
const elementoMaiorvalor = document.getElementById('maior-valor')
console.log(numeroSecreto)

elementoMaiorvalor.innerHTML = maiorValor
elementoMenorValor.innerHTML = menorValor
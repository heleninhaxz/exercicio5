let resposta = document.getElementById("resposta")
console.log(resposta)

function calcule(){
    let custo = Number(document.getElementById('custo').value)
    console.log(custo)
    let distribuidor = Number(document.getElementById('distribuidor').value)
    console.log(distribuidor)
    let taxa = custo * 0.15

    let distribuidorCusto = custo * (distribuidor / 100)
    console.log(distribuidorCusto)
    let custoFinal = custo + distribuidorCusto + taxa
    console.log("O custo será de " + custoFinal)

    resposta.innerHTML = "O custo será de " + custoFinal.toFixed(2) + " reais"
    
    resposta.style.fontSize = "1.5rem"
    resposta.style.fontWeight = "lightbold"
    resposta.style.color = "white"
}
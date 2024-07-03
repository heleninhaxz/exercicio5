let resposta = document.getElementById("resposta")
console.log(resposta)

function calcule(){
    let cebola = Number(document.getElementById('cebola').value)
    console.log(cebola)
    let tomate = Number(document.getElementById('tomate').value)
    console.log(tomate)
    let aipim = Number(document.getElementById('aipim').value)
    console.log(aipim)
    let batata = Number(document.getElementById('batata').value)
    console.log(batata)
    let cenoura = Number(document.getElementById('cenoura').value)
    console.log(cenoura)
    let chuchu = Number(document.getElementById('chuchu').value)
    console.log(chuchu)

    let conta = (cebola * 3.32) + (tomate * 5.35) + (aipim * 2.87) + (batata * 4.43) + (cenoura * 3.59) + (chuchu * 1.79)
    console.log("O valor a se pagar será de " + conta)

    resposta.innerHTML = "O valor a se pagar será de " + conta.toFixed(2) + " reais"
    resposta.style.fontSize = "1.5rem"
    resposta.style.fontWeight = "lightbold"
    resposta.style.color = "white"
}
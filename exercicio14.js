let resposta = document.getElementById("resposta")
console.log(resposta)

function calcule(){
    let litros = Number(document.getElementById('litros').value)
    console.log(litros)
    let combustivel = Number(document.getElementById('combustivel').value)
    console.log(combustivel)

    if(((combustivel == A) && (litros > 0) && (litros <= 20))){
        let precoCombus = (litros * 4) - (litros / 0.02)
        resposta.innerHTML = "O valor a ser pagado é " + precoCombus.toFixed(2) + " reais"
    }else if ((combustivel == A) && (litros > 20)){
        let precoCombus2 = (litros * 4) - (litros / 0.04)
        resposta.innerHTML = "O valor a ser pagado é " + precoCombus2.toFixed(2) + " reais"
    }else if (((combustivel == G) && (litros > 0) && (litros < 20))){
        let precoCombus3 = (litros * 4) - (litros / 0.03)
        resposta.innerHTML = "O valor a ser pagado é " + precoCombus3.toFixed(2) + " reais"
    }else if ((combustivel == G) && (litros > 20)){
        let precoCombus4 = (litros * 4) - (litros / 0.05)
        resposta.innerHTML = "O valor a ser pagado é " + precoCombus4.toFixed(2) + " reais"
    }else{
        resposta.innerHTML = "Número inválido"
    }
    
    resposta.style.fontSize = "1.5rem"
    resposta.style.fontWeight = "lightbold"
    resposta.style.color = "white"
}
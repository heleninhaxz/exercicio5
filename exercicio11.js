let resposta = document.getElementById("resposta")
console.log(resposta)

function calcule(){
    let preco = Number(document.getElementById('preco').value)
    console.log(preco)

    if(preco < 50){
        let final = preco * 1.35
        resposta.innerHTML = "O preço final é " + final.toFixed(2) + " reais"
    }else if ((preco > 50) && (preco < 100)){
        let final1 = preco * 1.25
        resposta.innerHTML = "O preço final é " + final1.toFixed(2) + " reais"
    }else if (preco > 100){
        let final2 = preco * 1.15
        resposta.innerHTML = "O preço final é " + final2.toFixed(2) + " reais"
    }else{
        resposta.innerHTML = "Número inválido"
    }
    
    resposta.style.fontSize = "1.5rem"
    resposta.style.fontWeight = "lightbold"
    resposta.style.color = "white"
}
let resposta = document.getElementById("resposta")
console.log(resposta)

function calcule(){
    let quantidade = Number(document.getElementById('quantidade').value)
    console.log(quantidade)

    if((quantidade > 0) && (quantidade <= 75)){
        resposta.innerHTML = "O preço final é " + 5 + " reais"
    }else if ((quantidade > 75) && (quantidade <= 240)){
        let final = (quantidade - 75) * 0.05 + 5
        resposta.innerHTML = "O preço final é " + final.toFixed(2) + " reais"
    }else if (quantidade > 240){
        let final2 = (quantidade - 75) * 0.05 + 5 + (quantidade - 240) * 0.10 + 5
        resposta.innerHTML = "O preço final é " + final2.toFixed(2) + " reais"
    }else{
        resposta.innerHTML = "Número inválido"
    }
    
    resposta.style.fontSize = "1.5rem"
    resposta.style.fontWeight = "lightbold"
    resposta.style.color = "white"
}
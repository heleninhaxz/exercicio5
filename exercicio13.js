let resposta = document.getElementById("resposta")
console.log(resposta)

function calcule(){
    let vendas = Number(document.getElementById('vendas').value)
    console.log(vendas)

    if((vendas > 0) && (vendas <= 10000)){
        let final = (vendas * 0.03) + 1800
        resposta.innerHTML = "O salário final é " + final.toFixed(2) + " reais"
    }else if ((vendas > 10000) && (vendas <= 30000)){
        let final2 = (vendas * 0.05) + 1800
        resposta.innerHTML = "O preço final é " + final2.toFixed(2) + " reais"
    }else if (vendas > 30000){
        let final3 = (vendas * 0.08) + 1800
        resposta.innerHTML = "O preço final é " + final3.toFixed(2) + " reais"
    }else{
        resposta.innerHTML = "Número inválido"
    }
    
    resposta.style.fontSize = "1.5rem"
    resposta.style.fontWeight = "lightbold"
    resposta.style.color = "white"
}
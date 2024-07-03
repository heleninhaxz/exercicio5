let resposta = document.getElementById("resposta")
console.log(resposta)

function calcule(){
    let num1 = Number(document.getElementById('num1').value)
    console.log(num1)
    let num2 = Number(document.getElementById('num2').value)
    console.log(num2)
    let num3 = Number(document.getElementById('num3').value)
    console.log(num3)

    if ((num1 < num2) && (num1 < num3)){
        resposta2.innerHTML = "O menor número é " + num1
    }else if ((num2 < num1) && (num2 < num3)){
        resposta2.innerHTML = "O menor número é " + num2
    }else if ((num3 < num1) && (num3 < num2)){
        resposta2.innerHTML = "O menor número é " + num3
    }else{
        console.log("Inválido.")
    }

    if ((num1 > num2) && (num1 > num3)){
        resposta.innerHTML = "O maior número é " + num1 
    }else if ((num2 > num1) && (num2 > num3)){
        resposta.innerHTML = "O maior número é " + num2
    }else if ((num3 > num1) && (num3 > num2)){
        resposta.innerHTML = "O maior número é " + num3
    }else{
        console.log("Inválido.")
    }

    resposta.style.fontSize = "1.5rem"
    resposta.style.fontWeight = "lightbold"
    resposta.style.color = "white"
    resposta2.style.fontSize = "1.5rem"
    resposta2.style.fontWeight = "lightbold"
    resposta2.style.color = "white"

}
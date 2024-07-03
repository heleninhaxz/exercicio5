let resposta = document.getElementById("resposta")
console.log(resposta)

function calcule(){
    let num1 = Number(document.getElementById('num1').value)
    console.log(num1)
    let num2 = Number(document.getElementById('num2').value)
    console.log(num2)

    let A = num1 + num2
    console.log("A soma deles é " + A)
    let S = num1 - num2
    console.log("A subtração deles é " + S)
    let M = num1 * num2
    console.log("A multiplicação deles é " + M)
    let D = num1 / num2
    console.log("A divisão deles é " + D)

    resposta.innerHTML = "A soma deles é " + A.toFixed(2)
    resposta2.innerHTML = "A subtração deles é " + S.toFixed(2)
    resposta3.innerHTML = "A multiplicação deles é " + M.toFixed(2)
    resposta4.innerHTML = "A divisão deles é " + D.toFixed(2)
    
    resposta.style.fontSize = "1.5rem"
    resposta.style.fontWeight = "lightbold"
    resposta.style.color = "white"
    resposta2.style.fontSize = "1.5rem"
    resposta2.style.fontWeight = "lightbold"
    resposta2.style.color = "white"
    resposta3.style.fontSize = "1.5rem"
    resposta3.style.fontWeight = "lightbold"
    resposta3.style.color = "white"
    resposta4.style.fontSize = "1.5rem"
    resposta4.style.fontWeight = "lightbold"
    resposta4.style.color = "white"
}
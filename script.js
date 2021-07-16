
//-----------------------------------------------variables-------------------------
const btn = document.querySelectorAll(".btn")
const pantalla = document.querySelector(".pantalla")
const DELETE = document.querySelector(".delete")
const clear = document.querySelector(".clear")
const igual = document.querySelector(".igual")






//----------------------------------------funciones----------------------------------
function add(a,b){
    return a + b
}

function subtract(a,b){
    return a - b
}

function multiply(a,b){
    return a * b
}

function divide(a,b){
    return a / b
}

function operate(a,operator,b){
    let resultado = 0
    if(operator == "+"){
        resultado = add(a,b)
    } else if(operator == "−"){
        resultado = subtract(a,b)
    } else if (operator == "×"){
        resultado = multiply(a,b)
    } else if(operator == "÷"){
        resultado = divide(a,b)
    }

    return resultado
}








btn.forEach(div => {
    div.addEventListener("click",(e) => {
    
     pantalla.textContent = pantalla.textContent + e.target.id })

})

igual.addEventListener("click", (e) => {
    let operador 
    let arr = [...pantalla.textContent]
    let positionOfoperator 
    let resultado
    
    if(arr.includes("+")){
        operador = "+"
        positionOfoperator = arr.indexOf(operador)
    } else if(arr.includes("−")){
        operador = "−"
        positionOfoperator = arr.indexOf(operador)
    } else if(arr.includes("×")){
        operador = "×"
        positionOfoperator = arr.indexOf(operador)
    } else if(arr.includes("÷")){
        operador = "÷"
        positionOfoperator = arr.indexOf(operador)
    }

    let a = Number(arr.slice(0,positionOfoperator).join(""))
    let b = Number(arr.slice(positionOfoperator + 1).join(""))
    
    console.log(typeof a,b)

    pantalla.textContent= Math.round(operate(a,operador,b)) 
    
    
})



DELETE.addEventListener("click", (e) => {
    pantalla.textContent = ""
})

clear.addEventListener("click", (e) => {
    let arr =[...pantalla.textContent]
    arr.pop()
    pantalla.textContent = arr.join("")
})



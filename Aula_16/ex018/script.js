let userNumbers = []
let numVal = document.querySelector('#numVal')
let maxVal = document.querySelector('#maxVal')
let minVal = document.querySelector('#minVal')
let totVal = document.querySelector('#totVal')
let medVal = document.querySelector('#medVal')
let msg = document.querySelector(".msg")

function addNumber() {
    var selectList = document.querySelector('#selectList')
    let num = document.querySelector('#userNumber')
    if (num.value.length == 0) {
        msg.style.color = 'red'
        msg.innerHTML = 'Preencha o campo antes de prosseguir!'
    } else {
        msg.innerHTML = ''
        let n = Number(num.value )
        userNumbers.push(n)
        let newNumber = document.createElement('option')
        newNumber.text = `${n}`
        selectList.appendChild(newNumber)
        num.value = ''
    }
    num.focus()
}

function eraseList() {
    userNumbers = []
    selectList.innerText = ''
    numVal.innerText = ''
    maxVal.innerText = ''
    minVal.innerText = ''
    totVal.innerText = ''
    medVal.innerText = ''
}

function examineList() {
        if (userNumbers.length == 0) {
            msg.style.color = 'red'
            msg.innerHTML = 'Insira um número à lista antes de prosseguir!'
        } else {
            
            // Números Cadastrados
            numVal.innerText = userNumbers.length

            // Maior Valor Cadastrado
            let max = 0
            for (let i = 0; i < userNumbers.length; i++) {
                if (i == 0) {
                    max = userNumbers[i]
                } else {
                    if (userNumbers[i] > max) {
                        max = userNumbers[i]
                    }
                }
            }
            maxVal.innerText = max

            // Menor valor Cadastrado
            let min = 0
            for (let i = 0; i < userNumbers.length; i++) {
                if (i == 0) {
                    min = userNumbers[i]
                } else {
                    if (userNumbers[i] < min) {
                        min = userNumbers[i]
                    }
                }
            }
            minVal.innerText = min

            // Soma Total dos Valores
            let soma = 0
            for (let i = 0; i < userNumbers.length; i++) {
                soma += userNumbers[i]
            }
            totVal.innerText = soma

            // Média dos Valores
            media = soma / userNumbers.length
            medVal.innerText = media.toFixed(2)        
        }
}

function contar() {
    var userInicio = document.querySelector('#inicio')
    var userFim = document.querySelector('#fim')
    var userIntervalo = document.querySelector('#intervalo')
    var resultado = document.querySelector('#resultado')

    // Confirmação de Preenchimento dos Campos
    if (userInicio.value.length == 0 || userFim.value.length == 0) {
        resultado.innerHTML = 'Erro! Um ou mais campos não foram preenchidos.'
    } else if (userIntervalo.value.length == 0) {
        resultado.innerHTML = 'Erro! Um ou mais campos não foram preenchidos.'
    } else {
        resultado.innerHTML = ''
        ini = Number(userInicio.value)
        fim = Number(userFim.value)
        int = Number(userIntervalo.value)
        if (ini <= fim) {
            for (var num = ini; num <= fim; num += int) {
                if (num < fim - int) {
                    resultado.innerHTML += `${num} > `
                } else {
                    resultado.innerHTML += `${num} FIM!`
                }
            }
        } else if (ini > fim) {
            for (var num = ini; num >= fim; num -= int)
                if (num > fim + int) {
                    resultado.innerHTML += `${num} > `
                } else {
                    resultado.innerHTML += `${num} FIM!`
                }
        } else {}
    }
}


function calcularTabuada() {
    let num = document.querySelector('#userNumber')
    let tab = document.querySelector('#seltab')
    if (num.value.length == 0) {
        window.alert('Erro! Preencha o campo antes de prosseguir.')
    } else {
        n = Number(num.value)
        tab.innerHTML = ``
        for (var c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${num.value} x ${c} = ${n}`
            tab.appendChild(item)
        }
    }
}
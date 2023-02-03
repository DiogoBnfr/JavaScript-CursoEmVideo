function carregar() {
    var msg = document.getElementById("msg")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 12) {
        document.body.style.background = '#e7eaf6'
    } else if (hora >=13 && hora <= 19) {
        document.body.style.background = '#a2a8d3'
    } else {
        document.body.style.background = '#113f67' 
    }
}
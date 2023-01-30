var now = new Date()
var hr = now.getHours()
var min = now.getMinutes()
var seg = now.getSeconds()
var ds = now.getDay()
var dm = now.getDate()
var m = now.getMonth()
var y = now.getFullYear()

/*
    0 = domingo
    1 = segunca-feira
    2 = terça-feira
    3 = quarta-feira
    4 = quinta-feira
    5 = sexta-feira
    6 = sábado
*/

switch(ds) {
    case 0:
        ds = 'Domingo'
        break
    case 1:
        ds = 'Segunda-Feira'
        break
    case 2:
        ds = 'Terça-Feira'
        break
    case 3:
        ds = 'Quarta-Feira'
        break
    case 4:
        ds = 'Quinta Feira'
        break
    case 5:
        ds = 'Sexta-Feira'
        break
    case 6:
        ds = 'Sábado'
        break
}

switch(m) {
    case 0:
        m = '01'
        break
    case 1:
        m = '02'
        break
    case 2:
        m = '03'
        break
    case 3:
        m = '04'
        break
    case 4:
        m = '05'
        break
    case 5:
        m = '06'
        break
    case 6:
        m = '07'
        break
    case 7:
        m = '08'
        break
    case 8:
        m = '09'
        break
    case 9:
        m = '10'
        break
    case 10:
        m = '11'
        break
    case 11:
        m = '12'
        break
}

console.log(`${ds} | ${hr}:${min}:${seg} - ${dm}/${m}/${y}`)
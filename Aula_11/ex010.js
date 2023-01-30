var sCar = 120
var sLimit = 80
if (sCar > sLimit) {
    var sDiff = sCar - sLimit
    console.log(`O carro trafegava a ${sCar}km/h em uma estrada de limite ${sLimit}km/h.`)
    console.log(`O carro trafegava a ${sDiff}km/h acima do limite permitido.`)
} else {
    var sDiff = sLimit - sCar
    console.log(`O carro trafegava a ${sCar}km/h em uma estrada de limite ${sLimit}km/h.`)
    console.log(`O carro trafegava dentro dos limites de segurança da estrada.`)
}

var valores = [4, 6, 1, 3, 7, 8, 9]
for (let p = 0; p < valores.length; p++) {
    console.log(`${p+1}o Número: ${valores[p]}`)
}

for (let num in valores) {
    console.log(valores.sort()[num])
}

// O array valores foi declarado pelo método "var", ou seja
// ela foi declarada globalmente. No segundo for, foi apli
// cado o método sort() à ela. A lista fica:
// [1, 3, 4, 6, 7, 8, 9]
console.log(valores.indexOf(4))
// R: 2, pois agora 4 se encontra no segundo index
let amigo = {nome:'Diogo', 
idade:18, 
peso:64.5, 
engordar(p=0) {
    this.peso += p
    console.log(`${amigo.nome} agora pesa ${amigo.peso}Kg`)
}}
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
amigo.engordar(10)
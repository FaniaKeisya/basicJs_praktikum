let suku1 = 4
let rasio = 3
let jumlahSuku = 10

let total = 0

for (let i = 0; i < jumlahSuku; i++){
    let sukuk1 = suku1 * Math.pow(rasio, i)
    total += sukuk1 
}

console.log("Jumlah 10 suku pertama : "+total)
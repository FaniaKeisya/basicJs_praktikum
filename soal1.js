let panjang = 20.5
let lebar = 30

let hargaTanah = 1500000
let ppn = 0.15

let luasTanah = panjang * lebar
let totalHarga = luasTanah * hargaTanah

let hargaDgnPPN = totalHarga * ppn
let hargaa = totalHarga + hargaDgnPPN

console.log("Total harga seluruhnya: Rp." + hargaa.toLocaleString());
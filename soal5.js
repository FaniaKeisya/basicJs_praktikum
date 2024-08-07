class Lingkaran {
  constructor(r) {
      this.r = r;
  }

  luas() {
      return Math.PI * this.r * this.r
  }

  keliling() {
      return 2 * Math.PI * this.r;
  }
}

class Tabung extends Lingkaran {
  constructor(r, t) {
      super(r);
      this.t = t;
  }

  volume() {
      return this.luas() * this.t;
  }

  luasPermukaan() {
      return 2 * this.luas() + this.keliling() * this.t;
  }

  luasSelimut() {
      return this.keliling() * this.t;
  }
}

class Kerucut extends Lingkaran {
  constructor(r, t) {
      super(r);
      this.t = t;
  }

  volume() {
      return (1/3) * this.luas() * this.t;
  }

  luasPermukaan() {
    //math.sqrt untuk mengakarkan bilangan, math.pow umtuk memangkatkan bilangan
      let s = Math.sqrt(Math.pow(this.r, 2) + Math.pow(this.t, 2));
      return this.luas() + Math.PI * this.r * s;
  }

  luasSelimut() {
      let s = Math.sqrt(Math.pow(this.r, 2) + Math.pow(this.t, 2));
      return Math.PI * this.r * s;
  }
}

class Bola extends Lingkaran {
  constructor(r) {
      super(r);
  }

  volume() {
      return (4/3) * Math.PI * Math.pow(this.r, 3);
  }

  luasPermukaan() {
      return 4 * this.luas();
  }
}
 

let bola = new Bola(15)
console.log("Volume Bola: " + bola.volume().toFixed(2))
console.log("Luas Permukaan Bola: " + bola.luasPermukaan().toFixed(2))

let kerucut = new Kerucut(10, 40)
console.log("\nVolume Kerucut: " + kerucut.volume().toFixed(2))
console.log("Luas Permukaan Kerucut: " + kerucut.luasPermukaan().toFixed(2))
console.log("Luas Selimut Kerucut: " + kerucut.luasSelimut().toFixed(2))

let tabung = new Tabung(7.5, 50) 
console.log("\nVolume Tabung: " + tabung.volume().toFixed(2))
console.log("Tabung Luas Permukaan: " + tabung.luasPermukaan().toFixed(2))
console.log("Luas Selimut Tabung: " + tabung.luasSelimut().toFixed(2))
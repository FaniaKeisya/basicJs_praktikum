// mengubah tinggi dr cm ke meter 
let tinggiCm = 170 / 100;
let beratKg = 90;

let bmi = beratKg / (tinggiCm * tinggiCm);

let statusBb;

if (bmi < 18.5) {
    statusBb = "Kekurangan berat badan";
} else if (bmi >= 18.5 && bmi <= 24.9) {
    statusBb = "Normal (ideal)";
} else if (bmi >= 25 && bmi <= 29.9) {
    statusBb = "Kelebihan berat badan";
} else {
    statusBb = "Kegemukan (Obesitas)";
}

console.log("Status berat badan Rhodey: " + statusBb);
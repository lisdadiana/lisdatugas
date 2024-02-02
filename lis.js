//mendeklarasikan 
let animal;
console.log (animal);

// tipe data
let namaSaya = "lisda";
let umurSaya =  16;

// operator aritmatika
const penjumlahan = 7 + 8;
const modulus = penjumlahan %12;
const pangkat = modulus ** 3;

// assigment
let umur = 10;
umur += 5;
console.log(umur);

// string
let kalimat = 'Hello';
kalimat += ' world';
console.log(kalimat); 

// fungsi
function namaSaya() {
    return "lisda"
}

let myName = namaSaya();
console.log(myName);

// parameter
function luasPersegi (s) {
    return s*s
}

// object
let saya = new Object();

saya.nama = 'lisda';
saya.umur = 16;

console.log(saya);

// menambah properti
let manusia = {
    kepala: true,
    badan: true,
    tangan: true,
  };
  manusia.ekor = false;
  console.log(manusia);

// menghapus properti
let tubuh = {
    bugar: true,
    sehat: true,
    roda: 2
};
delete tubuh.roda;
delete tubuh['roda'];

console.log(tubuh); 

// object method
let kucing = {
    lucu: true,
    kaki: 4,
    suara: function() {
        return "meong";
    }
};

// array
let hewan = ["singa", "harimau", "elang", "kucing"]

// mengubah data
let warna = ['hitam', 'merah', 'ungu', 'kuning'];
warna[3]='biru'

// method object
let bilangan = 0;

let pow = Math.pow(bilangan, 2,3);
let sqrt = Math.sqrt(16);
let max = Math.max(5, 9, 3, 7);

// menggunakan if else
function ganjilGenap(platNomor) {
 if (platNomor % 2 === 0) {
        return "Genap";
    } else {
        return "Ganjil";
    }
}

// for loop
let a = [1, 46, 75, 12, 89, 54, 101];
let genap = [];
for (let i= 0; i < a.length; i++) {
    if (a[i] % 2 ===0) {
        genap.push(a[i]);
    }
}

// for/of loop
let b = [1, 46, 75, 12, 89, 54, 101];
let ganjil = [];
for (let num of b) {
    if (num % 2 === 1) {
        ganjil.push(num);
    }
}

// while loop
let u = [];
let i = 5;

while (i >=0) {
  console.log(i);
  i--;
}

// do while loop
let angka = [];
let c = 5;
do {
    angka.push(i);
    c++;
} while (c <= 10);

// default parameter
function warnaKesukaan(warna = "putih") {
    return "Warna kesukaan saya adalah " + warna;
}

// rest parameter
let namaBuah1 = ['apel', 'mangga'];
let namaBuah2 = ['sirsak', 'semangka'];

let semuaNamaBuah = [...namaBuah1, ...namaBuah2];

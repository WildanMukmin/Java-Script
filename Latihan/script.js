const penumpang = [];

function tambahPenumpang (nama , arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == nama){
            console.log(`${nama} sudah ada di dalam angkot`);
            console.log(arr);
            break;
        } else if (arr[i] == undefined){
            arr[i] = nama;
            console.log(arr);
            break;
        }
    }
    arr.push(nama);
    console.log(arr);
}






































// const angka = [1,2,3,4,5,6,7,8,9,10];
// const angka2 = angka.map ( a => {
//     return a * 2;
// }) 

// console.log(angka.join(" "));
// console.log(angka2.join(" "));


// const angka = [1,232,432,3,423,5,2341,2,42,35,43,5,34,52,3,41,2];


// console.log(angka.sort((a,b) =>{
//     return a - b;
// } ));
// console.log(angka.join(" "));



// const angka  =  [1,2,5,7,8,3,6,8,4,3,2,5,7,4,2];

// const saring = angka.filter((a) =>{
//     return a === 2 || a > 7;
// })

// console.log(saring.join(" "));

























// const nama = ["wildan", "mukmin", "suka", "ngoding"]

// const tukar = (arr, a, b) => {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === a){
//             arr.splice(i + 1, 0, b);
//             break;
//         }
//     }
    
// }

// const arr2 = nama.slice(1,4);
// const arr3 = nama.slice(1,4);

// console.log(nama.join(" "));

// console.log(arr2.join(" "));
// console.log(arr3.join(" "));





















// const nama = [];

// nama.push("wildan");
// nama.push("otong");
// nama.push("anu");
// nama.push("jamet");
// nama.push("asuu");

// // console.log(nama);
// nama.pop();
// nama.pop();
// nama.pop();
// nama.pop();

// nama.unshift("hayooo");
// nama.unshift("apa");

// nama.shift();
// nama.shift();

// nama.forEach(a => {
//     console.log(a);
// });

// console.log(nama.join(" "));















// let anu = () => {
//     console.log("Anu");
// }

// const arr = ["teks", 2, false, anu, [4,5,6]];

// console.log(typeof(arr));
// console.log(arr[4]);



// function tambah(){
//     let hasil = 0;
//     for(let i = 0; i < arguments.length; i++){
//         hasil += arguments[i];       
//     }
//     return hasil;
// }

// let misal = tambah(1,2,3,4,5);
// console.log(misal);


// let volumeKubus = (a) => {
//     return a*a*a;
// }

// let penjumlahanKubus = (a,b) => {
//     console.log(a+b);
// }

// penjumlahanKubus(volumeKubus(8), volumeKubus(3));
// penjumlahanKubus(volumeKubus(10), volumeKubus(15));






// const nama = "WilDAn MukMIn";
// const random = Math.floor(Math.random() * 10 + 1) ;

// // console.log(nama.charAt(7));
// // console.log(nama.toLowerCase());
// // console.log(nama.toUpperCase());
// // console.log(nama.slice(3));
// // console.log(nama.split(""));
// console.log(random);


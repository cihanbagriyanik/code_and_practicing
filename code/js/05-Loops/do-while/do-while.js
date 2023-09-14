/* -------------------------------------------------------------------------- */
//!                                DO - WHILE                                 */
/* -------------------------------------------------------------------------- */
//* Kontrol sonda yapildigi icin, en az bir defa islem gerceklesir.
//*  do {
//*     calisacak kodlar
//*  }
//*  while(Kosul);

// ? Kullanıcıdan vize ve final notlarını isteyen ve vizenin %40 ını finalin %60 ını alarak notunu hesaplayan her işlem bittiğinde devam etmek isteyip istemediğini soran program

// let isContinue = "";
// let Avg;

// do {
//   let vize = +prompt("Vize notunuzu Girin:");
//   let final = +prompt("Final Notunu Giriniz:");

//   Avg = vize * 0.4 + final * 0.6;
//   console.log(`Ortalamanız : ${Avg}`);

//   isContinue = prompt("Devam etmek istiyor musunuz(e/h):").toLowerCase();
// } while (isContinue === "e");


//? Girilen şifreye yada pin kodu doğru mu kontrolü

// let setPassword = 1234;
// let password;
// let denemeSayisi = 0;

// do{
//     password = +prompt("Lutfen sifrenizi giriniz?")
//     denemeSayisi++


// } while(password !== setPassword);

// console.log(`${denemeSayisi} deneme sonrasinda basarili giris yaptiniz...`);


//? Kullanicidan bir sayi istiyoruz sayi degilse tekrar girsin (***isNaN()***)
let check1 = isNaN("snfak"); // string oldugu icin true deger doner.
console.log(check1);
let check2 = isNaN(5); // sayi oldugu icin false deger doner.
console.log(check2);


// let inputNum;
// do{
//     inputNum = prompt("Bir sayi giriniz?")
// } while (isNaN(inputNum)===true)

/* -------------------------------------------------------------------------- */
//*                                ODEV SORU 1                                */
/* -------------------------------------------------------------------------- */
console.log("***** SORU 1 *****");
//? Fiyatlar dizisinde her bir fiyata %10 zam yapalim?
//! NOT : FOR EACH kullanilmali ve orjinal dizi degistirilmeli.

const fiyatlar = [100, 250, 50, 89]

fiyatlar.forEach((a) => console.log((a * 1.10).toFixed()))


/* -------------------------------------------------------------------------- */
//*                                ODEV SORU 2                                */
/* -------------------------------------------------------------------------- */
console.log("***** SORU 2 *****");
//? Fiyatlar dizisindeki fiyati 90'dan buyuk olan degerleri konsola tek tek bastiriniz?
//* const fiyatlar = [100, 250, 50, 89]

fiyatlar.filter((a) => a > 90).forEach((b) => console.log(b))


/* -------------------------------------------------------------------------- */
//*                                ODEV SORU 3                                */
/* -------------------------------------------------------------------------- */
console.log("***** SORU 3 *****");
//? Fiyatlar dizisindeki fiyati 110'dan kucuk olan degerlere %10 artis yapin ve bu degeleri kosola tek tek bastiriniz?
//* const fiyatlar = [100, 250, 50, 89]

fiyatlar.filter((a) => a <= 110).map((b) => (b * 1.10).toFixed()).forEach((c) => console.log(c));


/* -------------------------------------------------------------------------- */
//*                                ODEV SORU 4                                */
/* -------------------------------------------------------------------------- */
console.log("***** SORU 4 *****");
//? Maaslar dizisinde 4000'den dusuk olan maaslara %50 zam yapmak istiyoruz ve bunu ayri dizi olarak saklamak istiyoruz.

const maaslar = [3000, 5000, 4000, 6000, 6500]

maaslar.filter((a) => a <= 4000).map((b) => (b * 1.50).toFixed(2)).forEach((c) => console.log(c))


/* -------------------------------------------------------------------------- */
//*                                ODEV SORU 5                                */
/* -------------------------------------------------------------------------- */
console.log("***** SORU 5 *****");
//? Maasi 4000'den buyuk olanlara %25 zam yaparak sonuclari konsola yazdiralim.
//* const maaslar = [3000, 5000, 4000, 6000, 6500]

maaslar.filter((a) => a > 4000).map((b) => (b * 1.25).toFixed(2)).forEach((c) => console.log(c))
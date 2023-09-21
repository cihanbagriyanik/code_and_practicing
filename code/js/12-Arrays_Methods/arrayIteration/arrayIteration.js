//* ======================================================
//*                   FOREACH METHOD
//! NOT: forEach metodu void bir metottur. (Yani herhangi bir değer döndürmez.log(forEach..)=undefined) terminal işlemdir, diziyi fonksiyon içinde yazdırır ve tüketir bitirir.
//*======================================================
//*----------ORNEK-----------

const prices1 = [100, 250, 50, 90];

prices1.forEach((a) => console.log(a))

let toplam = 0

const terminal = prices1.forEach((a) => console.log(toplam += a))

console.log(terminal); // undefined

//******************** Ornek ********************/

//* p => price dizisinin her bir elemani
//* i => index
//* prices => prices dizisidir.

const prices = [100, 250, 50, 90]

let toplam1 = 0

prices.forEach((p, i, price) => {
    
    toplam1 += p

    console.log(` ${i+1}. toplam ${toplam1}`);
    
    price[i] = prices[i] * 2
    //* Bu sekilde diziyi kalici degistirmis olduk

})
console.log(prices);
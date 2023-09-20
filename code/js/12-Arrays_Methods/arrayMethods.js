
/* -------------------------------------------------------------------------- */
//*                            ITERATION IN ARRAYS                            */
/* -------------------------------------------------------------------------- */

//* ======================================================
//*                     FOR LOOP
//* ======================================================
//*ÖRNEK: dizi1 arrayindeki pozitif sayılarla negatif sayıları 2 ayrı array de toplayan function yazınız

const dizi1 = [-5, 15, 22, -4, 45, 79, -54];

const negatifler1 = []
const pozitifler1 = []

const dizilereAyir1 = () => {

    for (let i = 0; i < dizi1.length; i++) {

        if (dizi1[i] < 0) {
            negatifler1.push(dizi1[i]);
        } else {
            pozitifler1.push(dizi1[i]);
        }
    }
    console.log(negatifler1);
    console.log(pozitifler1);
}
dizilereAyir1()


//*************** FOR IN **************/

const dizi2 = [-5, 15, 22, -4, 45, 79, -54]

const negatifler2 = []
const pozitifler2 = []

const dizilereAyir2 = () => {
    for (let i in dizi2) {
        if (dizi2[i] < 0) {
            negatifler2.push(dizi2[i]);
        } else {
            pozitifler2.push(dizi2[i]);
        }
    }
    console.log(negatifler2);
    console.log(pozitifler2);
}
dizilereAyir2()


//*************** FOR OF **************/

const dizi3 = [-5, 15, 22, -4, 45, 79, -54]

const negatifler3 = []
const pozitifler3 = []

const dizilereAyir3 = () => {
    for (let i of dizi3) {
        if (i < 0) {
            negatifler3.push(i);
        } else {
            pozitifler3.push(i);
        }
    }
    console.log(negatifler3);
    console.log(pozitifler3);
}
dizilereAyir3()

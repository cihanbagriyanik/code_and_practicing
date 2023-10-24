

console.log("module den selamlar")


export const CALISMA_SAATI = 40;

export function topla(s1, s2) {
    return s1 + s2
}

let counter = 5;

const inc = (miktar) => counter += miktar

const dec = (miktar) => {
    counter -= miktar
    return counter
}

const benimAdim = "Ashley"

export {inc,dec,benimAdim}

export default function ugurla() {
    console.log("elveda js hosgeldin react")
}


// for (i = 2; i < 100; i++) {
//     if (i % 1 === 0 && i % i === 0) {
//         if (i % 4 != 0 &&
//             i % 6 != 0 &&
//             i % 4 != 0 &&
//             i % 10 != 0) {

//                 console.log(i);

//         } 
//     }
// }



// for (i = 2; i < 100; i++) {
//     for (x = 2; x < 100; x++) {
//         if (i % x === 0 && i % 1 === 0 ) {
//             // console.log(i);
//         } else if(i % 3 != 0 && i % 4 != 0 && i % 5 != 0){
//             console.log(i);
//         }
//     }
// }



for (let num = 2; num <= 100; num++) {
    let isPrime = true;

    for (let i = 2; i <= num - 1; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}
function topla(num, ...numbers) {
    let toplam = num;
    numbers.forEach(num => toplam += num);
    console.log(toplam);
}
topla(1);
topla(1, 2);
topla(1, 2, 3, 4, 5);

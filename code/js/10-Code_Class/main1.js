function removeDuplicates(arr) {
    const uniqueArray = [];

    for (const element of arr) {
        if (!uniqueArray.includes(element)) {
            uniqueArray.push(element);
        }
    }
    return uniqueArray;
}

const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const result = removeDuplicates(arrayWithDuplicates);
console.log(result); // Output: [1, 2, 3, 4, 5]
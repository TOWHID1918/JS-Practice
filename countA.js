//Count how many times a string has the letter a

function countA(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }

    }
    return count;
}
console.log(countA('towhid chowdhury', 'a'));
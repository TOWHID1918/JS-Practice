
function electionResult(votes) {
    let mangoCount = 0;
    let bananaCount = 0;
    for (let i = 0; i < votes.length; i++) {
        if (votes[i] === 'mango') {
            mangoCount++;
        }
        else if (votes[i] === 'banana') {
            bananaCount++;
        }
    }
    if (Array.isArray(votes) === false) {
        return "Invalid";
    }
    else if (mangoCount > bananaCount) {
        return "Mango";
    }
    else if (mangoCount < bananaCount) {
        return "Banana";
    }
    else if (mangoCount === bananaCount) {
        return "Draw";
    }
}

console.log(electionResult(["mango", "banana", "mango", "banana", "mango"]));
console.log(electionResult([]));
console.log(electionResult(["mango", "banana", "jaker party", "no"]));
console.log(electionResult(["mango"]));
console.log(electionResult(["banana", "banana", "age e valo chilam", "no"]));
console.log(electionResult({ result: "mango , banana ,  mango" }));
console.log( electionResult("mango , banana"));
console.log( electionResult(["mango", "BananA", "na vote", "na vote"]));


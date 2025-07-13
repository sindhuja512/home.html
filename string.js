//1
function capitalizeFirst(word) {
    return word[0].toUpperCase() + word.slice(1);

}
console.log(capitalizeFirst("hello"));
//2
function containWord(sentence, word) {
    return sentence.includes(sentence, word);

}
console.log(containWord("JavaScript is fun", "fun"));
// Expected: true
//3
function countCharacter(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count++;

        }
    }
    console.log("Count:", count);
}

countCharacter("banana", "a");
// Expected: 3
//4
function getDomain(email) {
    return email.slice(5);
}


console.log(getDomain("user@example.com"));
// Expected: example.com
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("JavaScript"));
// Expected: tpircSavaJ
//6
function roundToTwo(num) {
    return parseFloat(num.toFixed(2));
    // TODO: Use toFixed() and parseFloat
}

console.log(roundToTwo(3.14159));
// Expected: 3.14
//7
function convertToInteger(str) {
    return parseInt(str);
}

console.log(convertToInteger("42"));
// Expected: 42
//8
function isInteger(num) {
    return Number.isInteger(num);
}

console.log(isInteger(5.5));
// Expected: false
//9
function addStringNumbers(a, b) {
    return parseInt(a)+parseInt(b);// TODO: Convert strings to numbers and return sum
}

console.log(addStringNumbers("10", "20"));
//Expected : 30

//10
function absoluteDifference(a, b) {
    return Math.abs(a - b);
}

console.log(absoluteDifference(10, 25));
// Expected: 15









const reverseString = function(word) {
let letters = word.split("");
let wordLength = letters.length;
let reverseWord = "";

for(let i = wordLength - 1; i>=0;i--)
{
reverseWord += letters[i];
}

return reverseWord;


};

// Do not edit below this line
module.exports = reverseString;

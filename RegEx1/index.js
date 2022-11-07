var string = prompt("Enter the string for which number of vowels is to be counted.")

function countVowel(str){
    if(str.match(/[aeiou]/gi) === null){
        return 0
    }
    return str.match(/[aeiou]/gi).length;
}

alert("The Number of vowels are: " + countVowel(string));
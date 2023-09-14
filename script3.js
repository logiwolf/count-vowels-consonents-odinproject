//Count Vowels and Consonants: Write a program that counts the number of vowels and consonants in a given string using a loop.

function countAlphabeticalLetters(inputString) {
    // Use a regular expression to match alphabetical letters (A-Z and a-z).
    const regex = /[A-Za-z]/g;
  
    // Use the match method to find all matches in the input string.
    const matches = inputString.match(regex);
  
    // If matches is null (no alphabetical letters found), return 0.
    // Otherwise, return the length of the matches array.
    //return matches ? matches.length : 0;
    return matches;
  }

  
// 1. create a function which provide a input
const checkVowels = () =>{
    const text = countAlphabeticalLetters(input);
    
    // 2. create a global two variable for that function.
    const vowels = ["a","e","i","o","u","A","E","I","O","U"];
    let count = 0;
   
    // 3. create a for loop which will check all the letter in the input.
    for(let i=0; i<text.length; i++){

        // 4. equal the input parameter to a variable.
        const word = text[i];
        //console.log(word);
        // 5. create a conditional statement, which will loop through the input and if input has  a vowel it will increment the count.
        if (vowels.includes(word)){
            count++;
        } 
    }
    return count;   
}

const checkConsonent = () =>{
    
    // 6. create a global two variable for that function.
    const vowels = ["a","e","i","o","u","A","E","I","O","U"];
    let count = 0;
    let countTwo = 0;
    const text = countAlphabeticalLetters(input);

    // 7. create a for loop which will check all the letter in the input.
    for(let i=0; i<text.length; i++){

        // 8. equal the input parameter to a variable.
        const word = text[i];
        //console.log(word);
        // 9. create a conditional statement, which will loop through the input and if input has  a vowel it will increment the count.
        if (vowels.includes(word)){
            count++;
        } else {
            countTwo++;
        }
    }
    return countTwo;   
}

// 10. call the function.
const input = "My House is big";
console.log(`Word  "${input} " contains ${checkVowels()} vowels and consonent ${checkConsonent()}`);
const count = countAlphabeticalLetters(input);
console.log("Total alphabetical letters:" + count.join(" "));

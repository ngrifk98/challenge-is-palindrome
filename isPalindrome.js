/* Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

For example:

isPalindrom("a")
// returns true

isPalindrom("noon")
// returns true

isPalindrom("hello")
// returns false
Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter:

isPalindrom("Racecar")
// returns false

isPalindrom("racecar")
// returns true

*/

// Write your code below

function isPalindrome(word) {
    // Remove spaces 
    word = word.replace(/\s/g, "");
  
    // Check if the word is the same when reversed
    return word === word.split("").reverse().join("");
  }
  
  // Test cases
  console.log(isPalindrome("a"));            // true
  console.log(isPalindrome("noon"));         // true
  console.log(isPalindrome("hello"));        // false
  console.log(isPalindrome("Racecar"));      // false
  console.log(isPalindrome("racecar"));      // true
  
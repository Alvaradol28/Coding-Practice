function fizzBuzz(n) {
    for (let i = 1; i <= n; i++){
        if (i % 15 === 0){
            console.log('FizzBuzz');
        } else if ( i % 3 === 0){
            console.log('Fizz');
        } else if ( i % 5 === 0){ 
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }

} 


function vowelsOnly(str) {

let vowels = ['a','i','e','u','o', 'A','E','I','O','U'];
let updStr= "";

for(let char of str) {
    if(vowels.includes(char)) {
        updStr += char;
        }
    }

return updStr;

}

console.log(vowelsOnly('SHOUT it out')); 


function isPangram(sentence) {
    let updCondition = sentence.toLowerCase();
    for (let char of "abcdefghijklmnopqrstuvwxyz") {
      if (!updCondition.includes(char)) {
        return false;
      }
     }
  return true;
}

  console.log(isPangram("sphinx of black quartz, judge my vow"));
  console.log(isPangram('the quick brown fox jumps over the lazy dog'));
  console.log(isPangram('this does not have all letters')); 
  console.log(isPangram('this will not work as well')); 


function strExpand(str) {
    let newObject = {};
    for (let char = 0; char < str.length; char++) {
        if(newObject[str[char]]){
            newObject[str[char]]++;
        } else {
            newObject[str[char]] = 1;
        }
    }


let newStr = "";
for(let key in newObject) {
    newStr += key + newObject[key];
    }

return newStr;

}

console.log(strExpand('aeebbccd'));
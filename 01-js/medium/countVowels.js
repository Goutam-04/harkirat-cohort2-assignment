/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const ans=str.toLowerCase()
    let count=0;
    for(let i=0;i<str.length;i++){
      if(ans[i]=='a'||ans[i]=='e'||ans[i]=='i'||ans[i]=='o'||ans[i]=='u'){count++;}

    }
    return count;

    // const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    // let count = 0;
    // for (let char of str.toLowerCase()) {
    //   if (vowels.has(char)) {
    //     count++;
    //   }
    // }
    // return count;
}

module.exports = countVowels;
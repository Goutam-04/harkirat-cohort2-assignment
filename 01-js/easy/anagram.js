/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  str1 = str1.replace(/\s+/g, '').toLowerCase();
  str2 = str2.replace(/\s+/g, '').toLowerCase();

  if(str1.length !== str2.length){return false;}

  const count1={}
  const count2={}

  for(let i of str1){
    count1[i]=(count1[i]||0)+1;
  }
  for(let i of str2){
    count2[i]=(count2[i]||0)+1;
  }

for(let i in count1){
  if(count1[i]!==count2[i])return false;
}

return true;

}

module.exports = isAnagram;

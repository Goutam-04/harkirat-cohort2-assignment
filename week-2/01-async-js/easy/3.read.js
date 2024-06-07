const fs=require('fs')
let content;
function reading(){
    content= fs.readFile('1-counter.md');
        
}

reading()
console.log(content);

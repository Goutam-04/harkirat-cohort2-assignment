const fs=require('fs')
let content;
// the readfile call back always take two argument first is err and secont is value of the file
fs.readFile('./file.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    let a=1;
    for(let i=0;i<10000000000;i++){
    a+=i;
    }
    console.log(data);
})
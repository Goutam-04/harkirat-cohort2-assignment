const fs=require('fs')

const content="copyright by goutam"
// fs.writeFile take one argument on its callback which is err 
fs.writeFile('file1.txt',content,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
    
        console.log(content);
    }
})
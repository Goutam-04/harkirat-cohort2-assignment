const fs=require('fs')



fs.readFile('file.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
    //    let content=data.trim();
    let content=data.replace(/\s+/g, " ");
    fs.writeFile('file.txt',content,(err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(content);
    })
    }
})

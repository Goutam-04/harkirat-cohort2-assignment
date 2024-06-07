fs.writeFile('file.txt',content,(err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(content);
    })
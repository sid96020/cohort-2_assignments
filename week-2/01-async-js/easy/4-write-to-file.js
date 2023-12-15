const fs = require('fs');
fs.readFile('./tmp.txt', 'utf8', function(err, data){
    if (err) {

    }else{
        fs.writeFile("./tmp_write.txt",data,'utf-8', function(err){
            if (err) {
                console.error
            }
        })
    }
});
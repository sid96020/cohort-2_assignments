const fs = require('fs')
fs.readFile('./tmp.txt', 'utf8', function (err, data) {
    if (err) {
        console.log(err)
    }else{
        let new_str = ""
        for (let i = 0; i < data.length; i++) {
            if (data[i]==" " && data[i+1] == " "){
                continue
            }else{
                new_str += data[i]
            }
        }
        fs.writeFile('./tmp.txt', new_str, function (err){
            if (err) {
                console.log(err)
            }
        })
    }
})
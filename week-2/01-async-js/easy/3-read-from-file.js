const fs = require('fs');
let data = fs.readFile('./tmp.txt', 'utf8',(err,data)=>{
if (err){
    console.log(err)
    throw new Error
}
console.log("this is data: " + data)
});
let exp_task=0
console.log(data);
for (let i = 0; i < 1000000000; i++) {
    exp_task=exp_task+1*i;

}
console.log(data)

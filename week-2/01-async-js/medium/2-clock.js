let Sec = 0
let min = 59
let hr = 12
let flags = "AM"
setInterval(function() {
    Sec = Sec+1
    if(Sec > 59){
        min = min + 1
        Sec = 0
    }
    if(min > 59){
        hr = hr + 1
        min = 0
    }
    if(hr > 12){
        hr = 1
        flags = flags=="AM"?"PM":"AM"
    }
    console.log((hr<10?"0":"")+hr + ":" + (min<10?"0":"")+min + ":"+ (Sec<10?"0":"")+Sec+" "+flags)
    setTimeout(() => {
        console.clear()
    }, 1000);
},1000)


// let Sec = 0
// let min = 59
// let hr = 0
// setInterval(function() {
//     Sec = Sec+1
//     if(Sec > 59){
//         min = min + 1
//         Sec = 0
//     }
//     if(min > 59){
//         hr = hr + 1
//         min = 0
//     }
//     if(hr > 24){
//         hr = 0
//     }
//     console.log((hr<10?"0":"")+hr + ":" + (min<10?"0":"")+min + ":"+ (Sec<10?"0":"")+Sec)
//     setTimeout(() => {
//         console.clear()
//     }, 1000);
// },1000)



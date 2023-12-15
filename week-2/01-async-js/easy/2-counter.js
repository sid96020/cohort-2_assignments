let counter = 0;
function counter_trigger() {
    setTimeout(function() {
        counter ++;
        console.log(counter)
        counter_trigger();
    },1000)
}
counter_trigger();

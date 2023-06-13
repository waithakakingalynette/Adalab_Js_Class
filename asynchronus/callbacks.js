//callbacks are functions placed as arguements to other functions.
//run the already ready  codes as the others progress.
function add (num ,callback){
    console.log(num)
    console.log(callback)
    callback(num)
}

function nums(num){
    console.log(num+30)
    // console.log("Hello")
}
add(12,nums)
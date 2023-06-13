let success =true

let promises=new Promise (function(resolve,reject){
    if(success){
        resolve ("I have everything")
    }
    else{
        reject ("I am still poor")
    }
    }).then(()=>{console.log("It is a dream come true")}) //do something with the result.
    .catch(()=>{console.log("I will get my own money")})  //hundle error.
    .finally(()=>{console.log("I will be happy")})  //do somethin after you have been successfiul or have an error.

console.log({promises})
let userDetails =true

let promise = new Promise (function(resolve,reject){
    if(userDetails){
        setTimeout(()=>{resolve("user details available")},5000);
    }
    else{
        setTimeout(()=>{reject("no user details found")},5000);
    }
});
// async function
const getuserdetails =async()=>{
    let response=await promise;
    console.log({response})
}
getuserdetails();
let a=20; //which is global

function add (b){
    console.log("a",a);
    console.log(a+b);
    let c=30;
    console.log(a+b+c)
    a=60;
}
add(20); //locale variable are only accepted within the function and not outside the function
console.log("a",a);

function multiply(c){
    console.log(a*c)
    d=7;
}
multiply(3)
console.log(d);

function greet(){
    let hello="hae"
    function talk(){
        let greeting="hey there";
        console.log(`${hello} ${greeting}`)
    }
    talk()//it is invoked in the function greet since it is within its boundary.
}
greet()
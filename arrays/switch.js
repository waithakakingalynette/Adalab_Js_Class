let a=20;
switch(a){
    case 30:// select one of the many codes blocks for execution.
    console.log("a is 30");
    break;
    case 40:
        console.log("a is 40") 
        break;
        default:
        console.log("a is not found") 
        break;  

}

let b=30;
switch(b){
    case 40:
    console.log("b is not 40");
    break;//jump out.
    case 30:
        console.log("b is 30")
        break;// jump out .
        default:
        console.log("b is not found")  
        break;  
}
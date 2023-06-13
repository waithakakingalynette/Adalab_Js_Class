//Hoisting calling a  variable or a function before declaring it.
//console.log(a);// when you invoke the variable before calling it it returns undefined.
var a=20;
console.log(a);

greet();
function greet(){
    console.log("Hello")
}

word();
function word(){
    console.log("My name is Lynette")
}
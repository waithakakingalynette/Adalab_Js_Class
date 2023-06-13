let person={
    name:"Ann",
    age:25,
    introduce:function(){
        console.log("Hello");
        console.log(`Hello my name is ${this.name}`);
    }
}
person.introduce();
person.greet=function(){
    console.log("How are you doing?")
}
person.greet();

//create an object
let person={
     name:"Lynette",
     age:20,
     height:"5ft",
    friend:{
        name:"Baryl",
        age:25
    } 

}
let person1=new Object();
console.log({person})
//console.log({person1});
person1.name="Edith"
person1.age=10;
console.log({person1});
console.log(person.age);
person["age"]=25;
console.log((person.age));
console.log(person.friend.age);
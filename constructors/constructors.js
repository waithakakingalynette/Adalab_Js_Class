function Person(name,age,height){
    this.name=name,
    this.age=age,
    this.height=height
    this.greet=function(){
        console.log()
    
    } 
}
let adam=new Person('Adam',25,'7ft')
console.log({adam});
adam.weight=60
console.log({adam});

let eve=new Person('Eve',20,'5ft')
console.log({eve});

console.log(Person.prototype)//It is an  empty onject.
Person.prototype.race='black';
Person.prototype.nationality='Kenyan'
console.log(adam.race);
console.log(eve.race);
console.log({adam});
console.log({eve});
eve.nationality="Uganda"
console.log({eve})
console.log(adam.nationality);
console.log(eve.nationality);

Person.prototype.yearofbirth=function(){
    let year=new Date().getFullYear();
    let birth=year-this.age;
    console.log(year);
}
adam.yearofbirth()

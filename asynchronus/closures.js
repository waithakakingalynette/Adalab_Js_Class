//Functions have access to outer functions.
let add =()=>{
    let num=20
    let subtract =()=>{
        return 30-num
    }
    return subtract
}

let nums =add();
console.log({nums})
console.log(nums());


let multiply=()=>{
    let number=40
    let modulus=()=>{
        return 2%number
    }
    return modulus
}

let numbers=multiply();
console.log({numbers});
console.log(numbers());
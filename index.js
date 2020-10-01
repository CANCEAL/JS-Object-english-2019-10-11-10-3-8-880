// # JS-Object

// 1. Program and observe the following requirements:  
//   - Create a null object and set its variable name as user; 
//   - Add a name attribute and set its value as John; 
//   - Add a surname attribute and set its value as Mike; 
//   - Modify the value of name attribute as Peter; 
//   - Delete name attribute of user. 
 
// 2. Program and observe the following requirements: calculate how many pieces of fruit there are in the fruit object and the output should be 50. 

// ```
// var fruit = {
// apple: 20,
// pear: 20,
// peach: 10
// };
// // write your code here...
// ```
// ## Requirements
// Create a js document and complete the above requirements.

//PROGRAM 1
console.log("Program 1:");
//Create a null object and set its variable name as user; 
var user = {};
console.log("Create a null object and set its variable name as user: ");
console.log(user);

//Add a name attribute and set its value as John; 
user.name = 'John';
console.log("Add a name attribute and set its value as John: ");
console.log(user);

//Add a surname attribute and set its value as Mike; 
user.surname = 'Mike';
console.log("Add a surname attribute and set its value as Mike: ");
console.log(user);

//Modify the value of name attribute as Peter; 
user.name = 'Peter';
// console.log(user.name);
console.log("Modify the value of name attribute as Peter: ");
console.log(user);

//Delete name attribute of user. 
delete user.name;
console.log("Delete name attribute of user: ");
console.log(user);

//PROGRAM 2
console.log("\nProgram 2:");
var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};

var sum = 0;
function sumFruit(fruit) {
    for (var i in fruit){
        sum = sum + fruit[i];
    }
    return sum;
}
console.log(fruit);
console.log("Sum of all fruits inside Fruit object: " + sumFruit(fruit));
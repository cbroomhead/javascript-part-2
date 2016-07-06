/*Read about the Array.prototype.sort method. Create a function that can be used with sort. 
This function should take two strings, and return a value that sort can use to determine which is the longest string. 
Finally, create an array of strings and try to get it sorted using your new function.*/

function stringSort (a, b) {
    var strgArray =[a, b];
    strgArray.sort(function compare (a, b){ 
        
        if (a.length < b.length) {
            return 1;
        }
        else if (a.length > b.length) {
            return -1;
        }
        else {
            return 0;
        }
    
    }  
    )
    return strgArray;
}
console.log(stringSort("ba", "a"));

/*Create an array of objects (don’t need to use new here, just regular object literals). 
These objects will contain a name and email property. Then, run some code that will sort your array by the longest name. 
Then, run some code that will sort your array by e-mail address in alphabetical order.*/

var person1 = {
    email: "celinebroomhead",
    name: "eline"
}

var person2 = {
    email: "stelledolan",
    name: "estelle"
}

var stuff =[person1, person2];

stuff.sort(function (person1, person2){
        if (person1.name.length < person2.name.length) {
            return 1;
        }
        else if (person1.name.length > person2.name.length) {
            return -1;
        }
        else {
            return 0;
        }
    }
    )
console.log(stuff);

stuff.sort(function (person1, person2){
        if (person1.email > person2.email) {
            return 1;
        }
        else if (person1.email < person2.email) {
            return -1;
        }
        else {
            return 0;
        }
    } 
    )
console.log(stuff);

/*Create a function that can be used with Array.prototype.map. This function should take a number and 
return its square. Then, use this function with map on an array of numbers to check the result.*/

var arr1 = [2,3,4,5];
var squares = arr1.map(function(num){
        return num * num;
});
console.log(squares);


/*Create a function that can be used with Array.prototype.map. This function should be able 
to take an object and square its “num” property. Then, use this function with map on an 
array of objects each containming a “num” property.*/

var number = [{value: 2}, {value: 4}, {value: 6}];

//var stuff = [number];

var squared = number.map(function(obj){
    return obj.value * obj.value;
})
console.log(squared)


/*In a previous workshop, you had to create a function that took two numbers and an operation (add, sub, mult, …) 
and returned the result of the operation on the two numbers. Here we are going to do the same but at a higher order. 
Create a function called operationMaker that takes only a string called operation as argument. 
This string could be “add”, “subtract”, “mult” or “div”. Your function will return a function that 
will take two numbers and return the result of running operation on these numbers. The end result 
should let me do something like this:

var adder = operationMaker(“add”);
var sum = adder(5, 10); //15

var mult = operationMaker(“mult”);
var product = mult(5, 10); // 50*/

function operationMaker(operation){
    if(operation === 'add'){
        return function (num1, num2){
            return num1 + num2;
        }
    }
    else if (operation === 'mult'){
        return function (num1, num2){
            return num1 * num2;
        }
    }
     else if (operation === 'substract'){
        return function (num1, num2){
            return num1 - num2;
        }
    }
     else if (operation === 'div'){
        return function (num1, num2){
            return num1 / num2;
        }
    }
}

var op = operationMaker('mult')
console.log(op(5,2));



/*/function add(num1){
    return function (num2){
        return num1 + num2;
    }
}

//add(10)(20) // this will pass both the parameters 
//OR
var increment = add(1);
increment(10);*/

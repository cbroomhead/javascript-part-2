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


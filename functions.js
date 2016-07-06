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


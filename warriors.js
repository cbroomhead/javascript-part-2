/*Create a constructor function called Warrior that can create new warriors. 
This function will take parameters name, and gender. name can be any string, gender can be M or F. 
It should create a warrior that has these properties:
name: the value that was passed to the constructor
gender: the value that was passed to the constructor
level: 1
weapon: wooden sword
power: a random number between 1 and 100
In addition to that, every object that gets created should have the following methods:
fight: will output to the console: " rushes to the arena with "
faceoff: faceoff takes one argument called opponent. Based on the power of each opponent, this 
method should output to the console which player won the fight based on their power. Be as 
creative as you like with the text of this method :)
Finally, create a bunch of warriors and make them fight together.*/

var WarriorPrototype = {
    name: null,
    gender: null,
    level: 1,
    weapon: "wooden sword",
    power: null,
    fight: function(){
        var pronouns = null;
        if(this.gender === 'F'){
            pronouns = "her";
        }
        else {
            pronouns = "his"
        }
        console.log(this.name + " rushes to the arena with " + pronouns + " " + this.weapon);
    },
    faceoff: function (opponent){
        if (this.power > opponent.power){
            console.log(this.name + " wins");
        }
        else {
            console.log(opponent.name + " wins");
        };
    }
}

function Warrior (name, gender){
    var warrior = Object.create(WarriorPrototype)
    if (typeof name === "string"){
    warrior.name = name;
    }
    if (gender === 'F' || gender === 'M'){
        warrior.gender = gender;
    }
    else {
        console.log("Your input is invalid");
    }
    
    warrior.power= Math.random() * 100;
    return warrior
}

var bob = Warrior("Bob", "M");
var mary = Warrior("3", "F");
bob.fight();
mary.fight();
bob.faceoff(mary);
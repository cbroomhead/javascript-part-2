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

function Warrior(name, gender, level, weapon, power) {
    this.warriorName = name;
    this.warriorGender = gender;
    this.warriorLevel = level;
    this.warriorWeapon = weapon;
    this.warriorPower = power;
    fight : function (){
        console.log(warriorName + " rushes to the arena with " + warriorWeapon)
    }
}

var princess1 = new Warrior ("Xena", "F", "badass", "numchucks", 86);
var princess1 = new Warrior ("Zelda", "F", "badass", "sword", 13);

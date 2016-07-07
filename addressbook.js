function Person (firstName, lastName){
    this.firstName = firstName;
    this.lastName =lastName;
    this.email = [];
    
};

function Email(email, type){
    this.address = email;
    if (type === 'work'){
            this.type = "work";
    }
    else if (type === 'home'){
            this.type = "home";
    }
    else {
            this.type = 'other';
    }
};


Person.prototype = {
    addEmail: function(email, type){
      this.email.push(new Email(email, type));
    }
};

var bob = new Person("Bob", "Smith");
bob.addEmail("bob@domain.com", "work");
console.log(bob);
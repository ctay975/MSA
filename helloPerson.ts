function temp(person: string){
    return "Hello, " + person;
}

var user = "Deep Sea";

document.body.innerHTML = temp(user);

class Animal {
    name: string;
    constructor(AnName: string, UNo: number){
        this.name = AnName;
    }
}

var rhino = new Animal("Rhino", 0);

class Giraffe extends Animal {
    constructor(){
        super("Giraffe", 1);
    }
}



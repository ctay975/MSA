function temp(person) {
    return "Hello, " + person;
}
var user = "Deep Sea";
document.body.innerHTML = temp(user);
var Animal = (function () {
    function Animal(AnName, UNo) {
        this.name = AnName;
    }
    return Animal;
}());
var rhino = new Animal("Rhino", 0);

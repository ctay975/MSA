var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var Giraffe = (function (_super) {
    __extends(Giraffe, _super);
    function Giraffe() {
        _super.call(this, "Giraffe", 1);
    }
    return Giraffe;
}(Animal));

//INITIAL DECLARATIONS
var count = 0;
var results = [];
var qno = 0;
//INITIAL FRENCH ANSWERS
function answer() {
    var outputstring = "<h3> Answers to Questions Above: </h3>";
    //retrieve quiz answers in form
    var quiz1ans = document.forms["quiz1"].elements;
    var length = (quiz1ans.length - 1) / 4;
    var correct = 0;
    //QUESTION ONE
    var answer1 = quiz1ans["pouletfr"].value;
    if (answer1 == "Chicken") {
        results[qno] = "Correct";
        correct += 1;
    }
    else
        results[qno] = "Incorrect";
    qno += 1;
    //QUESTION TWO
    var answer2 = quiz1ans["ccva"].value;
    if (answer2 == "cvb") {
        results[qno] = "Correct";
        correct += 1;
    }
    else
        results[qno] = "Incorrect";
    qno += 1;
    //QUESTION THREE
    var answer3 = quiz1ans["q3f"].value;
    if (answer3 == "a4") {
        results[qno] = "Correct";
        correct += 1;
    }
    else
        results[qno] = "Incorrect";
    qno += 1;
    //OUTPUT
    var output = correct / length * 100 + "%";
    for (qno = 0; qno < length; qno += 1) {
        outputstring += "Your Answer to Question " + (qno + 1) + " was " + results[qno] + "<br>";
    }
    outputstring += "<br><ul>You Final Mark is " + output + "<ul>";
    document.getElementById("demo").innerHTML = outputstring;
}

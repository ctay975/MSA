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
    //QUESTION ONE
    var answer1 = quiz1ans["pouletfr"].value;
    if (answer1 == "Chicken") {
        results[qno] = "Correct";
    }
    else
        results[qno] = "Incorrect";
    qno += 1;
    //QUESTION TWO
    var answer2 = quiz1ans["ccva"].value;
    if (answer2 == "cvb") {
        results[qno] = "Correct";
    }
    else
        results[qno] = "Incorrect";
    //OUTPUT
    var output = count / length * 100 + "%";
    for (qno = 0; qno < length; qno += 1) {
        outputstring += "Your Answer to Question " + (qno + 1) + " was " + results[qno] + "<br>";
    }
    document.getElementById("demo").innerHTML = outputstring;
}

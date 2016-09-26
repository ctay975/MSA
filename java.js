//INITIAL DECLARATIONS
var count = 0;
var results = [];
//INITIAL FRENCH ANSWERS
function answer() {
    var outputstring = "Answers to Questions Above: \n\n";
    //retrieve quiz answers in form
    var quiz1ans = $("#quiz1 ol").children();
    var length = ((quiz1ans.length) / 2);
    var correct = 0;
    //QUESTION ONE
    var answer1 = $("input[name='pouletfr']:checked").val();
    if (answer1 == "Chicken") {
        results.push("Correct");
        correct += 1;
    }
    else {
        results.push("Incorrect");
    }
    //QUESTION TWO
    var answer2 = $("input[name='ccva']:checked").val();
    if (answer2 == "cvb") {
        results.push("Correct");
        correct += 1;
    }
    else
        results.push("Incorrect");
    //QUESTION THREE
    var answer3 = $("input[name='q3f']:checked").val();
    if (answer3 == "a4") {
        results.push("Correct");
        correct += 1;
    }
    else
        results.push("Incorrect");
    //OUTPUT
    var output = correct / length * 100;
    for (count = 0; count < length; count++) {
        outputstring += " Your Answer to Question " + (count + 1) + " was " + results[count] + "\n";
    }
    alert(outputstring);
    alert("Your final mark of " + Math.round(output) + "% has been submitted");
}
//JQUERY

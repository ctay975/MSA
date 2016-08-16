var count = 0;
var total;
function answer() {
    //retrieve quiz answers in form
    var quiz1ans = document.forms["quiz1"].elements;
    var length = (quiz1ans.length - 1) / 4;
    var answer1 = quiz1ans["pouletfr"].value;
    if (answer1 == "Chicken") {
        count += 1;
    }
    else
        ;
    var answer2 = quiz1ans["ccva"].value;
    if (answer2 == "cvb") {
        count += 1;
    }
    else
        ;
    //output
    alert("You Received " + count / length * 100 + "%");
}

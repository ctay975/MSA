//INITIAL DECLARATIONS
let count: number = 0;
let results: string[] = [];
let qno: number = 0;



//INITIAL FRENCH ANSWERS

function answer(): void {

    let outputstring: string = "<h3> Answers to Questions Above: </h3>"; 
    //retrieve quiz answers in form
    var quiz1ans: string[] = document.forms["quiz1"].elements
    var length = (quiz1ans.length - 1)/4;

    //QUESTION ONE
    var answer1: string = quiz1ans["pouletfr"].value;
    if (answer1 == "Chicken"){
        results[qno]= "Correct";
    }
    else results[qno] = "Incorrect";
    qno += 1;

    //QUESTION TWO
    var answer2: string = quiz1ans["ccva"].value;
    if (answer2 == "cvb" ){
        results[qno] = "Correct";
    }
    else results[qno] = "Incorrect";

    //OUTPUT
    var output: string = count/length * 100 + "%";
    for (qno = 0; qno < length; qno += 1){
    outputstring += "Your Answer to Question " + (qno + 1) + " was " + results[qno] + "<br>";
    }
    document.getElementById("demo").innerHTML = outputstring;
}
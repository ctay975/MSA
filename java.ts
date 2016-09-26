//INITIAL DECLARATIONS
let count: number = 0;
let results: string[] = [];


//INITIAL FRENCH ANSWERS

function answer(): void {

    let outputstring: string = "Answers to Questions Above: \n\n"; 
    //retrieve quiz answers in form
    var quiz1ans: string[] = $("#quiz1 ol").children();
    var length: number = ((quiz1ans.length)/2);
    let correct: number = 0;

    //QUESTION ONE
    var answer1: string = $("input[name='pouletfr']:checked").val();
    if (answer1 == "Chicken"){
        results.push("Correct");
        correct += 1;
    }
    else {
        results.push("Incorrect");
    }

    //QUESTION TWO
    var answer2: string = $("input[name='ccva']:checked").val();
    if (answer2 == "cvb"){
        results.push("Correct");
        correct += 1;
    }
    else results.push("Incorrect");

    //QUESTION THREE
    var answer3: string = $("input[name='q3f']:checked").val();
    if (answer3 == "a4"){
        results.push("Correct");
        correct += 1;
    }
    else results.push("Incorrect");


    //OUTPUT
    var output: number = correct/length * 100;
    for (count = 0; count < length; count ++){
    outputstring += " Your Answer to Question " + (count + 1) + " was " + results[count] + "\n";
    }
    alert(outputstring);
    alert("Your final mark of " + Math.round(output) + "% has been submitted");

}

//JQUERY


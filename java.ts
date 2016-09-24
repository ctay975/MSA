//INITIAL DECLARATIONS
let count: number = 0;
let results: string[] = [];
let qno: number = 0;



//INITIAL FRENCH ANSWERS

function answer(): void {

    let outputstring: string = "Answers to Questions Above: \n\n"; 
    //retrieve quiz answers in form
    var quiz1ans: string[] = document.forms["quiz1"].elements
    var length: number = ((quiz1ans.length)-1)/4;
    let correct: number = 0;

    //QUESTION ONE
    var answer1: string = quiz1ans["pouletfr"].value;
    if (answer1 == "Chicken"){
        results[qno]= "Correct";
        correct += 1;
    }
    else results[qno] = "Incorrect";
    qno += 1;

    //QUESTION TWO
    var answer2: string = quiz1ans["ccva"].value;
    if (answer2 == "cvb"){
        results[qno] = "Correct";
        correct += 1;
    }
    else results[qno] = "Incorrect";
    qno += 1;

    //QUESTION THREE
    var answer3: string = quiz1ans["q3f"].value;
    if (answer3 == "a4"){
        results[qno] = "Correct";
        correct += 1;
    }
    else results[qno] = "Incorrect";
    qno += 1;


    //OUTPUT
    var output: number = correct/length * 100;
    for (qno = 0; qno < length; qno += 1){
    outputstring += " Your Answer to Question " + (qno + 1) + " was " + results[qno] + "\n";
    }
    alert(outputstring);
    alert("Your final mark of " + Math.round(output) + "% has been submitted");
}

//JQUERY


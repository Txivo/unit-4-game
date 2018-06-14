// 2. The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 

// 3. Here's how the app works:

//    * There will be four crystals displayed as buttons on the page.

//    * The player will be shown a random number at the start of the game.

//    * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

//      * Your game will hide this amount until the player clicks a crystal.
//      * When they do click one, update the player's score counter.

//    * The player wins if their total score matches the random number from the beginning of the game.

//    * The player loses if their score goes above the random number.

//    * The game restarts whenever the player wins or loses.

//      * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//    * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// * The random number shown at the start of the game should be between 19 - 120.

// * Each crystal should have a random hidden value between 1 - 12.



// variables

// 1.- computer will create a random numer between 19 - 120, and display it.
// var arrey1=[19-120]


// Math.floor((math,random()*120) + 19 );
// 2.-assign a random hidden value to gems between 1 - 12 
// var arrey2=[1-12]

// Math.floor((math,random()*12) + 1);

// 3.-start adding the value of the gems comparing it to the first number displayed. 

// 4.-keep going until number matches the first number.

// 5.- if added numbers under first number keep going until it matches or goes over,

// 6.- if first number is matched player wins 

// 7.-if first number goes over player loses. 

//Step 1: Create a computerSum 9what we aim for)-random value between 1 and 10
//Step 2: Create crystal with random numbers 
//Step 3: Create a variable that will hold the usersSum
//Step 4: Create a winsCounter
//Step 5: creat a lossCounter
//Step 6: Clear button ( reset , wins and losses to zero, userSum to 0, crystals and computerSum should have new numbers, make a reset function)
//Step 7: Game Logic
// -User will click a crystal (crytsal should be responsive, add an onclick)
// -onclick will trigger a function, and you will determine what you want your function to do
// -the value of the crytsal to be added to the userSum
// -userSum > computerSum ?
//  -alert you lose!
//  -lossCOunter ++

// -userSum === computerSum?
//  -alert you win
//  -winCOunter ++


//POINTS TO NOTE:

// 1) IDENTIFY THE VARIABLES YOU'RE GOING TO NEED


//in this example, the highest value will be 10, and the lowest 1
var targetNumber = Math.floor((math,random()*120) + 19 );


//2) USE CONSOLE LOG TO KEEP TRACK OF YOUR CHANGES, SUPER USEFUL IN DE-BUGGING
console.log(targetNumber);


//3) MAKE THE CHANGES REFLECT ON THE HTML, IF NEEDED!
//2 parts: what the TARGET is, and what the UPDATE is
//in this example; target is the html element with the id of "targetNumber", 
//the update is to the text with the value specified in the bracket
$("#fistNumber").text(fistNumber);


//The other variables
var oneC = Math.floor((Math.random() * 12) + 1);
console.log( "oneC" + oneC);

var twoC = Math.floor((Math.random() * 12) + 1);
console.log( "twoC" + twoC);

var threeC = Math.floor((Math.random() * 12) + 1);
console.log( "threeC" + threeC);

var fourC = Math.floor((Math.random() * 12) + 1);
console.log( "fourC" + fourC);

var wins = 0;
var losses = 0;
var userSum = 0;


//example of an on-click on a crystal
//What do I want to happen when the user clicks on the crystal?


//4)NOT ONLY BUTTONS ARE "CLICK-ABLE", YOU CAN MAKE TEXT, IMAGES, ETC ALSO BEHAVE IN A SIMILAR FASHION

  $("#oneC").on("click", function() {

    //add to the counter
    userSum += oneC;
    console.log(userSum);

    //update the html
    $("#userSum").text(userSum);

    //the condition
    if (userSum >= fistNumber) {
        alert ("You lose!");
        //update variable
        losses++;
        //link javascript to html
        $("#losses").text("You've lost " + losses + " times.");
    }

    else if (userSum === fistNumber){
        alert ("You won!");
        //update variable
        wins++;
        //link javascript to html
        $("#wins").text(wins);
    }

  });


        // second crystal

  $("#twoC").on("click", function() {

    //add to the counter
    userSum += twoC;
    console.log(userSum);

    //update the html
    $("#userSum").text(userSum);

    //the condition
    if (userSum >= fistNumber) {
        alert ("You lose!");
        //update variable
        losses++;
        //link javascript to html
        $("#losses").text(losses);
    }

    else if (userSum === fistNumber){
        alert ("You won!");
        //update variable
        wins++;
        //link javascript to html
        $("#wins").text(wins);
    }

  });

// third crystal

$("#threeC").on("click", function() {

    //add to the counter
    userSum += threeC;
    console.log(userSum);

    //update the html
    $("#userSum").text(userSum);

    //the condition
    if (userSum >= fistNumber) {
        alert ("You lose!");
        //update variable
        losses++;
        //link javascript to html
        $("#losses").text(losses);
    }

    else if (userSum === fistNumber){
        alert ("You won!");
        //update variable
        wins++;
        //link javascript to html
        $("#wins").text(wins);
    }

  });

//   fourth crystal

$("#fourC").on("click", function() {

    //add to the counter
    userSum += fourC;
    console.log(userSum);

    //update the html
    $("#userSum").text(userSum);

    //the condition
    if (userSum >= fistNumber) {
        alert ("You lose!");
        //update variable
        losses++;
        //link javascript to html
        $("#losses").text(losses);
    }

    else if (userSum === fistNumber){
        alert ("You won!");
        //update variable
        wins++;
        //link javascript to html
        $("#wins").text(wins);
    }


    $(".clear").on("click", function() {
        $("#oneC").empty();
        $("#twoC").empty();
        $("#threeC").empty();
        $("#fourC").empty();
        wins = null;
        losses = null;
        userSum  = null;
        firstNumber = "";
        
        })





  });